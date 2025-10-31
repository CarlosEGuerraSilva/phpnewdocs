import AppFooter from "@/components/app-footer";
import Button, { ButtonProps } from "@/components/button";
import { Container } from "@/components/container";
import DocNav from "@/components/docs/doc-nav";
import Grid from "@/components/grid";
import { ChevronLeftIcon } from "@/components/icons/chevron-left-icon";
import { ChevronRightIcon } from "@/components/icons/chevron-right-icon";
import Navbar from "@/components/navbar";
import Select from "@/components/select";
import { useSidebarData } from "@/hooks/use-sidebar-data";
import { cn } from "@/utils/cn";
import { useBreakpointCondition } from "react-tw-breakpoints";

export interface NavegablePage {
  title: string;
  href: string;
}

interface DocsLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  asideContent?: React.ReactNode;
  breadCrumbs?: React.ReactNode;
  previousPage?: NavegablePage;
  nextPage?: NavegablePage;
  activeNavKey?: string;
}

function DocsLayout({
  title,
  description,
  children,
  breadCrumbs,
  asideContent,
  previousPage,
  nextPage,
  activeNavKey,
}: DocsLayoutProps) {
  const sidebarData = useSidebarData();
  const isTablet = useBreakpointCondition({ lessThan: "lg" });

  return (
    <div className="min-h-dvh w-dvw relative max-w-full bg-background text-on-background">
      <title>{title}</title>
      <meta name="description" content={description} />
      <Navbar />
      <Container maxWidth="7xl">
        <div className="my-4 flex justify-end">
          <Select>
            <option>Latest version (8.5)</option>
            <option>PHP 8.4</option>
            <option>PHP 8.3</option>
            <option>PHP 8.2</option>
            <option>PHP 8.1</option>
            <option>(EOL) PHP 8.0</option>
          </Select>
        </div>
      </Container>
      <Container maxWidth="7xl">
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-full">
          <aside className="md:w-64 md:sticky md:top-20 md:self-start">
            <DocNav data={sidebarData} activeKey={activeNavKey} />
          </aside>
          <main className="flex-1">
            {breadCrumbs}
            <section className="mt-4">{children}</section>
            <div className="mt-12 mb-10">
              <Grid columns={{ xs: 2 }} className="gap-4">
                {previousPage && (
                  <NavigableButton
                    title={previousPage.title}
                    href={previousPage.href}
                    startContent={
                      <ChevronLeftIcon className="me-4" size={24} />
                    }
                    isPrevious
                  />
                )}
                {nextPage && (
                  <NavigableButton
                    title={nextPage.title}
                    href={nextPage.href}
                    endContent={<ChevronRightIcon className="ms-4" size={24} />}
                  />
                )}
              </Grid>
            </div>
          </main>
          {asideContent && !isTablet && (
            <aside className="md:w-64 md:sticky md:top-20 md:self-start">
              {asideContent}
            </aside>
          )}
        </div>
      </Container>
      <AppFooter />
    </div>
  );
}

export default DocsLayout;

interface NavigableButtonProps
  extends Omit<ButtonProps, "href" | "title">,
    NavegablePage {
  isPrevious?: boolean;
}

const NavigableButton: React.FC<NavigableButtonProps> = ({
  title,
  href,
  isPrevious,
  ...props
}) => {
  return (
    <Button
      variant="bordered"
      fullWidth
      href={href}
      textAlign={isPrevious ? "left" : "right"}
      {...props}
      className={cn("px-6 py-3", props.className)}
    >
      <>
        <p className="font-bold text-xs">{isPrevious ? "Previous" : "Next"}</p>
        {title}
      </>
    </Button>
  );
};
