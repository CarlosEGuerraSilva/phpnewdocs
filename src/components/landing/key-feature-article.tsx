import { useTheme } from "@/hooks/use-theme";
import Button from "../button";
import CodeComparator from "../code-comparator";
import CodeHighlighter from "../code-highlighter";
import { DocsIcon } from "../icons/docs-icon";
import Typography from "../typography";
import { cn } from "@/utils/cn";
import Grid from "../grid";

export interface KeyFeatureArticleProps {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  href: string;
  code?: string;
  codeBefore?: string;
  codeAfter?: string;
}

const KeyFeatureArticle: React.FC<KeyFeatureArticleProps> = ({
  title,
  subtitle,
  href,
  code,
  codeBefore,
  codeAfter,
}) => {
  const { theme } = useTheme();

  const DescriptionContent = () => (
    <>
      <Typography
        variant="h2"
        color="primary"
        component="h3"
        className="text-pretty"
      >
        {title}
      </Typography>
      <Typography
        variant="body"
        className={cn(
          "mt-4 leading-5.5 text-balance",
          code ? "md:max-w-md" : " max-w-3xl"
        )}
      >
        {subtitle}
      </Typography>
      <Button
        href={href}
        className="mt-3"
        endContent={<DocsIcon size={16} />}
        text="Learn more"
      />
    </>
  );

  return (
    <article className="pb-6 md:pb-12 mb-6 md:mb-12 border-b border-outline-variant">
      {code && !codeBefore && !codeAfter ? (
        <Grid columns={{ xs: 1, md: 2 }} className="gap-12 items-start">
          <div className="self-center lg:ps-6">{<DescriptionContent />}</div>
          <CodeHighlighter code={code} theme={theme} className="w-full" />
        </Grid>
      ) : (
        <>
          {<DescriptionContent />}
          <CodeComparator
            className="mt-6"
            before={
              <CodeHighlighter
                code={codeBefore ?? ""}
                theme={theme}
                className="h-full"
              />
            }
            after={
              <CodeHighlighter
                code={codeAfter ?? ""}
                theme={theme}
                className="h-full"
              />
            }
          />
        </>
      )}
    </article>
  );
};

export default KeyFeatureArticle;
