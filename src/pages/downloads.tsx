import Card from "@/components/card";
import Checkbox from "@/components/checkbox";
import Grid from "@/components/grid";
import { DocsIcon } from "@/components/icons/docs-icon";
import { GitHub } from "@/components/icons/github-icon";
import { HTMLIcon } from "@/components/icons/html-icon";
import LogoSquare from "@/components/icons/logo-square";
import { LogosIcon } from "@/components/icons/logos-icon";
import { ReleaseCandidateIcon } from "@/components/icons/release-candidate-icon";
import { SourceIcon } from "@/components/icons/source-icon";
import Select from "@/components/select";
import Typography from "@/components/typography";
import DocsLayout from "@/layouts/docs-layout";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { Link } from "react-router-dom";

type DownloadType = "php" | "manual" | "source" | "logos" | "rc" | "git";

interface DownloadCardProps {
  title: string;
  release: string;
  className?: string;
  children?: React.ReactNode;
}

interface DocumentationFormat {
  icon: React.ReactNode;
  title: string;
  format: string;
  size: string;
  date: string;
}

const ICON_SIZE = 16;

interface PHPDownloadData {
  title: string;
  release: string;
  zipSize: string;
  zipSha256: string;
  debugSize: string;
  debugSha256: string;
  devPackageSize: string;
  devPackageSha256: string;
}

interface RCDownloadData {
  title: string;
  release: string;
  size: string;
  sha256: string;
}

const PHP_DOWNLOADS: PHPDownloadData[] = [
  {
    title: "VS17 x64 Non Thread Safe",
    release: "2025-Oct-21 19:44:52 UTC",
    zipSize: "31.95MB",
    zipSha256:
      "fe23d4a7e57efe2e4c761980f9e1c4aa92f5030b380ae8fb9e0b61e807c0802c",
    debugSize: "36.89MB",
    debugSha256:
      "d857cc8144fcd39d2dcdf6c67c248f9820bdb45d6f026775a5bb2479a67cbf4a",
    devPackageSize: "1.35MB",
    devPackageSha256:
      "2e3db69e6081cb1b8de25dba91fc9a0d12d3888187fa1d389958f99489da8831",
  },
  {
    title: "VS17 x64 Thread Safe",
    release: "2025-Oct-21 19:44:52 UTC",
    zipSize: "32.1MB",
    zipSha256:
      "978e2a273ff8aada6806d3461df402a7e4a3b09e2726c14a4e72bad1779a1ef3",
    debugSize: "36.97MB",
    debugSha256:
      "53c63b0edea9d569ae2872f648b064dae5c00f3a3b63705726def71c92d78e9f",
    devPackageSize: "1.36MB",
    devPackageSha256:
      "67d7e03623f2d55a84eebc5838b028218d8903a986c6e30c3e53673aa08c4d45",
  },
  {
    title: "VS17 x86 Non Thread Safe",
    release: "2025-Oct-21 19:44:50 UTC",
    zipSize: "28.62MB",
    zipSha256:
      "050223a9c8b2803404268430471e868b371a21b9dafd7d828d1490b230a7a615",
    debugSize: "37.24MB",
    debugSha256:
      "4844250c7723911ba572d9bbeb33a26cf0ca43daf3adceb50727ac17a676d55f",
    devPackageSize: "1.35MB",
    devPackageSha256:
      "d9bb0af4ed824c56b8d3f33d3070eff75144de154891c90045396e2a06cc88e4",
  },
];

const RC_DOWNLOADS: RCDownloadData[] = [
  {
    title: "php-8.5.0RC3.tar.bz2",
    release: "23 Oct 2025",
    size: "128.3MB",
    sha256: "c12a6d7e305280a839d9950fda22463ebd3eb764c929c57049a3c1fbfdce4930",
  },
  {
    title: "php-8.5.0RC3.tar.gz",
    release: "23 Oct 2025",
    size: "111.6MB",
    sha256: "937e544d72ee1eb28d2190cadaadf8e5e8d7d8c365b5c1f6a99b4f979a1f3a1b",
  },
  {
    title: "php-8.5.0RC3.tar.xz",
    release: "23 Oct 2025",
    size: "158.87MB",
    sha256: "d3dd9e8b5e458277f86ca79f47b5001cb2c7d6d6742cdd2298790fd58a5ce7d3",
  },
];

const DOCUMENTATION_FORMATS: DocumentationFormat[] = [
  {
    icon: <HTMLIcon size={56} className="text-on-surface" />,
    title: "Single HTML file",
    format: "html.gz",
    size: "5232Kb",
    date: "20 Nov 2025",
  },
  {
    icon: <HTMLIcon size={56} className="text-on-surface" />,
    title: "Many HTML files",
    format: "tar.gz",
    size: "10155Kb",
    date: "20 Nov 2025",
  },
  {
    icon: <HTMLIcon size={56} className="text-on-surface" />,
    title: "HTML Help file",
    format: "chm",
    size: "13493Kb",
    date: "20 Nov 2025",
  },
  {
    icon: <HTMLIcon size={56} className="text-on-surface" />,
    title: "HTML Help file (with user notes)",
    format: "chm",
    size: "26577Kb",
    date: "20 Nov 2025",
  },
];

function ChipTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="ms-1 px-1 py-0.5 bg-surface-container-low text-on-surface border-outline-variant border rounded-md">
      {children}
    </span>
  );
}

function DownloadTypeIcon({ type }: { type: DownloadType }) {
  const iconMap: Record<DownloadType, React.ReactNode> = {
    php: <LogoSquare size={ICON_SIZE} />,
    manual: <DocsIcon size={ICON_SIZE} />,
    rc: <ReleaseCandidateIcon size={ICON_SIZE} />,
    git: <GitHub size={ICON_SIZE} />,
    logos: <LogosIcon size={ICON_SIZE} />,
    source: <SourceIcon size={ICON_SIZE} />,
  };

  return <>{iconMap[type]}</>;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  release,
  className,
  children,
}) => {
  return (
    <Card
      size="lg"
      elevation="highest"
      className={cn("border-l-8 border-primary", className)}
    >
      <Typography variant="h2" component="h2" className="mb-4">
        {title}
      </Typography>
      <Typography variant="subtitle" component="p" className="mb-2">
        Release: {release}
      </Typography>
      {children}
    </Card>
  );
};

function PHPDownloadFilters() {
  return (
    <div className="mt-6 mb-3">
      <div className="mb-4">
        <Typography variant="subtitle" component="p" className="mb-2">
          I want to use PHP for
        </Typography>
        <Select>
          <option value="web">Web Development</option>
          <option value="cli">CLI/Library Development</option>
          <option value="fw-drupal">Drupal Development</option>
          <option value="fw-joomla">Joomla Development</option>
          <option value="fw-laravel">Laravel Development</option>
          <option value="fw-symfony">Symfony Development</option>
          <option value="fw-wordpress">WordPress Development</option>
        </Select>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Typography variant="subtitle" component="span">
            I work with
          </Typography>
          <Select>
            <option value="windows">Windows</option>
            <option value="linux">Linux</option>
            <option value="macos">macOS</option>
          </Select>
          <Select>
            <option value="zip">ZIP Downloads</option>
            <option value="installer">Installer</option>
            <option value="source">Source</option>
          </Select>
          <Typography variant="subtitle" component="span">
            and use
          </Typography>
          <Select>
            <option value="default">OS default version</option>
            <option value="8.4">Version 8.4</option>
            <option value="8.3">Version 8.3</option>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          size="lg"
          label="I want to be able to use multiple PHP versions"
        />
        <Checkbox size="lg" label="I want to compile everything from source" />
      </div>
    </div>
  );
}

function PHPDownloadsList() {
  return (
    <div className="mt-6">
      {PHP_DOWNLOADS.map((download, index) => (
        <DownloadCard
          key={index}
          title={download.title}
          release={download.release}
          className="mb-6"
        >
          <Typography variant="body" component="p" className="mb-1">
            <Link
              to="#"
              className="text-primary hover:underline decoration-dashed underline-offset-4"
            >
              Zip
            </Link>
            <ChipTag>{download.zipSize}</ChipTag>
          </Typography>
          <Typography variant="body" component="p" className="mb-1">
            <strong>SHA256:</strong> {download.zipSha256}
          </Typography>
          <Typography variant="body" component="p" className="mb-1">
            <Link
              to="#"
              className="text-primary hover:underline decoration-dashed underline-offset-4"
            >
              Debug Pack
            </Link>
            <ChipTag>{download.debugSize}</ChipTag>
          </Typography>
          <Typography variant="body" component="p" className="mb-1">
            <strong>SHA256:</strong> {download.debugSha256}
          </Typography>
          <Typography variant="body" component="p" className="mb-1">
            <Link
              to="#"
              className="text-primary hover:underline decoration-dashed underline-offset-4"
            >
              Development Package
            </Link>
            <ChipTag>{download.devPackageSize}</ChipTag>
          </Typography>
          <Typography variant="body" component="p" className="mb-1">
            <strong>SHA256:</strong> {download.devPackageSha256}
          </Typography>
        </DownloadCard>
      ))}
    </div>
  );
}

function RCDownloadsList() {
  return (
    <div className="mt-6">
      {RC_DOWNLOADS.map((download, index) => (
        <DownloadCard
          key={index}
          title={download.title}
          release={download.release}
          className="mb-6"
        >
          <a
            href="#"
            className="text-primary hover:underline underline-offset-4 decoration-dashed"
          >
            Download
          </a>
        </DownloadCard>
      ))}
    </div>
  );
}

function RCDownloadInfo() {
  return (
    <>
      <Typography variant="h2" component="h2" className="mt-6">
        Release Candidate Builds
      </Typography>
      <Typography variant="body" className="mt-2">
        This page contains links to the Release Candidate builds that the
        release managers create before each actual release. These builds are
        meant for the community to test whether no inadvertent changes have been
        made, and whether no regressions have been introduced.
      </Typography>
    </>
  );
}

function ManualDownloadInfo() {
  return (
    <>
      <Typography variant="h2" component="h2" className="mt-6">
        Documentation Downloads
      </Typography>
      <Typography variant="body" className="mt-2">
        The PHP manual is available in a selection of languages and formats.
        Pick a language and format from the table below to start downloading.
      </Typography>
      <Typography variant="h4" component="h3" className="mt-6">
        Notes to read before you download
      </Typography>
      <ul className="list-disc ms-6 mt-2">
        <li>
          The English version should be considered the most accurate, since
          translations are based on that version. Most of the translations are
          not complete, and contain English parts.
        </li>
        <li>
          If you are looking for PHP 5 documentation, please read{" "}
          <a href="#" className="text-primary visited:text-tertiary">
            this explanation.
          </a>
        </li>
        <li>
          If you are looking for PHP 4 documentation, please read{" "}
          <a href="#" className="text-primary visited:text-tertiary">
            this explanation.
          </a>
        </li>
      </ul>
    </>
  );
}

function ManualLanguageSelector() {
  return (
    <div className="w-full">
      <Typography variant="h5" component="h3">
        Select language
      </Typography>
      <Select className="mt-2" fullWidth>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="ru">Русский</option>
      </Select>
    </div>
  );
}

function DocumentationFormatCard({ format }: { format: DocumentationFormat }) {
  return (
    <Card
      size="md"
      isHoverable
      isPressable
      className="flex flex-col gap-2 items-center select-none"
    >
      {format.icon}
      <Typography
        variant="subtitle"
        component="p"
        textAlign="center"
        className="mt-2 leading-4.5"
      >
        {format.title} ({format.format})
      </Typography>
      <ChipTag>{format.size}</ChipTag>
      <small>
        <time>{format.date}</time>
      </small>
    </Card>
  );
}

function ManualDownloadsList() {
  return (
    <div className="mt-4">
      <Grid className="gap-4 overflow-hidden" columns={{ xs: 1, md: 2, lg: 4 }}>
        {DOCUMENTATION_FORMATS.map((format, index) => (
          <DocumentationFormatCard key={index} format={format} />
        ))}
      </Grid>
    </div>
  );
}

function DownloadsPage() {
  const [downloadType, setDownloadType] = useState<DownloadType>("php");

  const handleDownloadTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDownloadType(e.target.value as DownloadType);
  };

  const renderDownloadTypeFilters = () => {
    switch (downloadType) {
      case "php":
        return <PHPDownloadFilters />;
      case "manual":
        return <ManualLanguageSelector />;
      default:
        return null;
    }
  };

  const renderDownloadsList = () => {
    switch (downloadType) {
      case "php":
        return (
          <>
            <Typography variant="h3" component="h2" className="mt-4">
              Available Downloads:
            </Typography>
            <PHPDownloadsList />
          </>
        );
      case "manual":
        return (
          <>
            <ManualDownloadInfo />
            <Typography variant="h3" component="h2" className="mt-4">
              Available Downloads:
            </Typography>
            <ManualDownloadsList />
          </>
        );
      case "rc":
        return (
          <>
            <RCDownloadInfo />
            <Typography variant="h3" component="h2" className="mt-4">
              Available Downloads:
            </Typography>
            <RCDownloadsList />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <DocsLayout
      title="Downloads - PHP Documentation"
      description="Download the latest version of PHP. Get the PHP documentation in various formats including HTML, PDF, and CHM for offline access."
      activeNavKey="Downloads"
      previousPage={{ title: "System requirements", href: "#" }}
      nextPage={{ title: "Installation on Windows", href: "#" }}
    >
      <Typography
        id="downloads"
        variant="h1"
        component="h1"
        className="scroll-m-22"
      >
        Downloads
      </Typography>

      <Card
        size="lg"
        elevation="normal"
        className="mt-6 flex flex-col items-center gap-4"
      >
        <Typography variant="h4" component="h2" className="scroll-m-22">
          Choose your download type
        </Typography>
        <Select
          startContent={<DownloadTypeIcon type={downloadType} />}
          onChange={handleDownloadTypeChange}
        >
          <option value="php">Download PHP</option>
          <option value="manual">Documentation Download</option>
          <option value="rc">Release Candidates</option>
          <option value="source">Source Tarballs</option>
          <option value="logos">PHP Logos</option>
          <option value="git">Development Sources (git)</option>
        </Select>

        {renderDownloadTypeFilters()}
      </Card>

      {renderDownloadsList()}
    </DocsLayout>
  );
}

export default DownloadsPage;
