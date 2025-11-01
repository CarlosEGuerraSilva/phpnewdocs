import { Link } from "react-router-dom";
import Card from "./card";
import { DocsIcon } from "./icons/docs-icon";
import { SuggestionIcon } from "./icons/suggestion-icon";
import Input from "./input";
import Modal from "./modal";
import Typography from "./typography";
import { LINKS } from "@/consts/links";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const QUERY_RESULTS: SearchItemProps[] = [
    {
      title: "preg_match",
      description: "Perform a regular expression match",
      href: LINKS.docs,
    },
    {
      title: "Windows installation",
      description: "How to install PHP on Windows",
      href: LINKS.docs,
    },
    {
      title: "Enum types",
      description: "Learn about enum types in PHP 8.1",
      href: LINKS.docs,
    },
    {
      title: "JIT compilation",
      description: "Just-In-Time compilation in PHP 8.0",
      href: LINKS.docs,
    },
    {
      title: "Attributes",
      description: "Using attributes (annotations) in PHP 8.0",
      href: LINKS.docs,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      dialogTitle="Search"
      title="Search docs..."
      allowCloseOutside
      position="topCenter"
      size="xl"
    >
      <Input
        size="lg"
        placeholder="Search on docs"
        type="search"
        variant="bordered"
        color="default"
        fullWidth
        autoFocus
      />
      <div className="mt-2">
        <Typography variant="body" color="primary">
          Suggested
        </Typography>
        <div className="flex flex-col gap-2">
          <SearchItem
            isSuggested
            title="PHP 8.5"
            description="Read full release notes of the latest version of PHP!"
            href={LINKS.docs}
          />
          <SearchItem
            isSuggested
            title="Migration guide"
            description="Learn how to upgrade to our newest version, easier than ever"
            href={LINKS.migrationGuide}
          />
          <SearchItem
            isSuggested
            title="Downloads"
            description="Download the latest version of PHP!"
            href={LINKS.download}
          />
        </div>
      </div>
      <div className="mt-2">
        <Typography variant="body" color="primary">
          Results
        </Typography>
        <div className="flex flex-col gap-2">
          {QUERY_RESULTS.map((item, index) => (
            <SearchItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;

interface SearchItemProps {
  title: string;
  description: string;
  href: string;
  isSuggested?: boolean;
}

const SearchItem: React.FC<SearchItemProps> = ({
  title,
  description,
  href,
  isSuggested = false,
}) => {
  return (
    <Link to={href} className="group">
      <Card size="xs" isPressable>
        <div className="flex items-center gap-2">
          <div
            aria-hidden="true"
            className="bg-surface-container-lowest rounded-xl text-on-surface flex items-center justify-between p-3"
          >
            {isSuggested ? <SuggestionIcon /> : <DocsIcon />}
          </div>
          <div className="flex-1">
            <Typography
              variant="h6"
              color="primary"
              className="group-hover:underline underline-offset-4 decoration-dashed font-bold"
            >
              #{title}
            </Typography>
            <Typography variant="caption">#{description}</Typography>
          </div>
        </div>
      </Card>
    </Link>
  );
};
