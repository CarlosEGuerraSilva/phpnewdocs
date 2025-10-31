function DocLinkSection({
  headingId,
  label,
}: {
  headingId: string;
  label: string;
}) {
  return (
    <a
      href={`#${headingId}`}
      className="block border-l-5 ps-2 mb-2 border-primary/10 hover:border-primary transition-colors"
    >
      {label}
    </a>
  );
}

export default DocLinkSection;
