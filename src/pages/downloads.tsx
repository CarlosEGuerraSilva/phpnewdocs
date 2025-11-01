import Card from "@/components/card";
import Checkbox from "@/components/checkbox";
import Select from "@/components/select";
import Typography from "@/components/typography";
import DocsLayout from "@/layouts/docs-layout";
import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";

function DownloadsPage() {
  const Downloads: DownloadCardProps[] = [
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

  return (
    <DocsLayout
      title="Downloads - PHP Documentation"
      description="Download the latest version of PHP. Get the PHP documentation in various formats including HTML, PDF, and CHM for offline access."
      activeNavKey="Downloads"
      previousPage={{ title: "System requirements", href: "#" }}
      nextPage={{ title: "Installation on Windows", href: "#" }}
    >
      <Typography
        id="what_is_php"
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
        <div>
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
        <div>
          <div className="flex items-center mb-4 gap-2 flex-wrap">
            <Typography variant="subtitle" component="span">
              I work with
            </Typography>
            <Select>
              <option value="web">Windows</option>
              <option value="cli">Linux</option>
              <option value="fw-drupal">macOS</option>
            </Select>
            <Select>
              <option value="web">ZIP Downloads</option>
              <option value="cli">No time</option>
              <option value="fw-drupal">Left :(</option>
            </Select>
            <Typography variant="subtitle" component="span">
              and use
            </Typography>
            <Select>
              <option value="web">OS default version</option>
              <option value="cli">Version 8.4</option>
              <option value="fw-drupal">Version 8.3</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Checkbox
            size="lg"
            label="I want to be able to use multiple PHP versions"
          />
          <Checkbox
            size="lg"
            label="I want to compile everything from source"
          />
        </div>
      </Card>
      <Typography variant="h3" component="h2" className="mt-4">
        Available Downloads:
      </Typography>
      <div className="mt-6">
        {Downloads.map((download, index) => (
          <DownloadCard className="mb-6" key={index} {...download} />
        ))}
      </div>
    </DocsLayout>
  );
}

export default DownloadsPage;

interface DownloadCardProps {
  title: string;
  release: string;
  zipSize: string;
  zipSha256: string;
  debugSize: string;
  debugSha256: string;
  devPackageSize: string;
  devPackageSha256: string;
  className?: string;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  release,
  zipSize,
  zipSha256,
  debugSize,
  debugSha256,
  devPackageSize,
  devPackageSha256,
  className,
}) => {
  function ChipTag({ children }: { children: React.ReactNode }) {
    return (
      <span className="ms-1 px-1 py-0.5 bg-surface-container-low text-on-surface border-outline-variant border rounded-md">
        {children}
      </span>
    );
  }
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
      <Typography variant="body" component="p" className="mb-1">
        <Link
          to="#"
          className="text-primary hover:underline decoration-dashed underline-offset-4"
        >
          Zip
        </Link>
        <ChipTag>{zipSize}</ChipTag>
      </Typography>
      <Typography variant="body" component="p" className="mb-1">
        <strong>SHA256:</strong> {zipSha256}
      </Typography>
      <Typography variant="body" component="p" className="mb-1">
        <Link
          to="#"
          className="text-primary hover:underline decoration-dashed underline-offset-4"
        >
          Debug Pack
        </Link>
        <ChipTag>{debugSize}</ChipTag>
      </Typography>
      <Typography variant="body" component="p" className="mb-1">
        <strong>SHA256:</strong> {debugSha256}
      </Typography>
      <Typography variant="body" component="p" className="mb-1">
        <Link
          to="#"
          className="text-primary hover:underline decoration-dashed underline-offset-4"
        >
          Development Package
        </Link>
        <ChipTag>{devPackageSize}</ChipTag>
      </Typography>
      <Typography variant="body" component="p" className="mb-1">
        <strong>SHA256:</strong> {devPackageSha256}
      </Typography>
    </Card>
  );
};
