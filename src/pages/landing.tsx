import LandingLayout from "@/layouts/landing-layout";
import { Container } from "@/components/container";
import Typography from "@/components/typography";
import CodeHighlighter from "@/components/code-highlighter";
import { useTheme } from "@/hooks/use-theme";
import LogoFlexible from "@/components/icons/logo-flexible";
import Button from "@/components/button";
import { LINKS } from "@/consts/links";
import { DownloadIcon } from "@/components/icons/download-icon";
import { DocsIcon } from "@/components/icons/docs-icon";
import { useBreakpointCondition } from "react-tw-breakpoints";

const HELLO_WORLD_PHP = `<?php
echo "Hello world in PHP " . phpversion() . "!";
?>
// Hello World in PHP 8.5.0!
`;

function Landing() {
  const { theme } = useTheme();
  const isMobile = useBreakpointCondition({ lessThan: "sm" });

  return (
    <LandingLayout>
      <section aria-label="New release">
        <div className="py-6 md:pt-12 lg:pt-20 flex items-center justify-center">
          <Button
            variant="ghost"
            color="default"
            aria-label="Read release notes"
            startContent={
              <div className="size-4 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--color-primary),0.6)] animate-pulse" />
            }
            className="rounded-full shadow-lg shadow-secondary-container/50"
          >
            PHP 8.5 released!
          </Button>
        </div>
      </section>
      <section
        aria-label="Hero section"
        className="block max-w-full relative overflow-hidden"
      >
        <Container
          maxWidth="7xl"
          className="p-6 flex items-center min-h-[50dvh]"
        >
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1 lg:max-w-[50%] text-center lg:text-left">
              <div className="w-full flex justify-center lg:justify-start">
                <LogoFlexible className="h-48" />
              </div>
              <Typography
                variant="h2"
                color="primary"
                component="h1"
                className="leading-11.5 text-pretty mt-8 mb-2"
              >
                The Engine of the Internet
              </Typography>
              <Typography variant="subtitle" className="leading-5 text-balance">
                PHP is a popular general-purpose scripting language that is
                especially suited to web development. Fast, flexible and
                pragmatic, PHP powers everything from your blog to the most
                popular websites in the world.
              </Typography>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-6">
                <Button
                  href={LINKS.download}
                  startContent={<DownloadIcon size={20} />}
                  variant="shadow"
                  color="primary"
                  size={isMobile ? "lg" : "xl"}
                  textAlign={isMobile ? "left" : "center"}
                  fullWidth={isMobile}
                >
                  Download
                </Button>
                <Button
                  href={LINKS.docs}
                  startContent={<DocsIcon size={20} />}
                  variant="bordered"
                  color="secondary"
                  size={isMobile ? "lg" : "xl"}
                  textAlign={isMobile ? "left" : "center"}
                  fullWidth={isMobile}
                >
                  Read docs
                </Button>
              </div>
            </div>
            <div className="flex-1 lg:max-w-[50%] flex items-center min-w-0">
              <CodeHighlighter
                code={HELLO_WORLD_PHP}
                filename="hello_world.php"
                theme={theme}
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="relative overflow-hidden h-22 lg:h-48 mt-15">
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center z-0"
          aria-hidden="true"
        >
          <div className="world-sphere" />
        </div>
      </div>
      <section aria-label="About PHP" className="mb-20 bg-primary-container">
        <Container>
          <Typography variant="h2" component="h3" className="text-center mb-6">
            About PHP
          </Typography>
        </Container>
      </section>
    </LandingLayout>
  );
}

export default Landing;
