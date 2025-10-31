import { cn } from "@/utils/cn";
import Card from "./card";
import Typography from "./typography";
import { Link } from "react-router-dom";

export interface BlogPreviewProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
  date: string;
  content: string;
  href: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  subtitle,
  date,
  content,
  href,
  className,
  ...props
}) => {
  const isExternal = href.startsWith("http") || href.startsWith("//");

  const linkContent = (
    <>
      <Typography variant="caption" color="tertiary" component="time">
        {date}
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        className="mt-2 decoration-dashed underline-offset-4 group-hover:underline"
      >
        {title}
      </Typography>
      <Typography variant="body" className="mt-2">
        {subtitle}
      </Typography>
      <Typography variant="body" className="mt-4 line-clamp-3">
        {content}
      </Typography>
    </>
  );

  return (
    <article className={cn("group", className)} {...props}>
      <Card elevation="highest" isPressable>
        {isExternal ? (
          <a href={href} className="block p-4">
            {linkContent}
          </a>
        ) : (
          <Link to={href} className="block p-4">
            {linkContent}
          </Link>
        )}
      </Card>
    </article>
  );
};

export default BlogPreview;
