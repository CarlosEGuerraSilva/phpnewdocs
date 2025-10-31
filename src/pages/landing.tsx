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
import { SNIPPETS } from "@/consts/snippets";
import KeyFeatureArticle, {
  KeyFeatureArticleProps,
} from "@/components/landing/key-feature-article";
import Card from "@/components/card";

import SupportImg from "@/assets/support.svg";
import PackageImg from "@/assets/package.svg";
import UpgradeImg from "@/assets/upgrade.svg";
import FoundationImg from "@/assets/php_foundation.svg";

import Grid from "@/components/grid";
import { DeprecateIcon } from "@/components/icons/deprecate-icon";
import { Blog } from "@/consts/blog";
import BlogPreview from "@/components/blog-preview";
import { DonateIcon } from "@/components/icons/donate-icon";
import { Conferences } from "@/consts/conferences";
import ConferenceItem from "@/components/conference-item";
import { CalendarIcon } from "@/components/icons/calendar-icon";

function Landing() {
  const { theme } = useTheme();
  const isMobile = useBreakpointCondition({ lessThan: "sm" });

  const pageTitle = "PHP: Hypertext Preprocessor";
  const pageDescription =
    "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.";
  const pageUrl = "https://php.net";
  const pageImage = "https://php.net/images/php-logo.png";

  const NewKeyFeatures: KeyFeatureArticleProps[] = [
    {
      title: "Typed Class Constants",
      subtitle:
        "Bring the full power of PHP's type system to your class constants. Enforce type safety at the language level, eliminating runtime checks and improving static analysis.",
      href: LINKS.docs + "/typed-class-constants",
      codeBefore: SNIPPETS.typedClassBefore,
      codeAfter: SNIPPETS.typedClassAfter,
    },
    {
      title: "A New Flow: The Pipe Operator (|>)",
      subtitle:
        "Stop nesting functions. PHP 8.5 introduces the pipe operator, letting you chain operations in a clean, readable, top-to-bottom flow. It passes the result of the left expression as the first argument to the callable on the right.",
      href: LINKS.docs + "/pipe-operator",
      codeBefore: SNIPPETS.pipeOperatorBefore,
      codeAfter: SNIPPETS.pipeOperatorAfter,
    },
    {
      title: "Enforce Clean Code: The #[NoDiscard] Attribute",
      subtitle:
        'Ensure important return values are never ignored. Mark functions with #[NoDiscard] to generate a E_WARNING if a developer calls the function but doesn\'t use its result. Perfect for "pure" functions or methods that return a new state.',
      href: LINKS.docs + "/no-discard-attribute",
      code: SNIPPETS.noDiscardCode,
    },
    {
      title: "A Modern, Standard URL API",
      subtitle:
        "PHP 8.5 finally introduces a robust, modern API for URL parsing and manipulation. Built to comply with both RFC 3986 and WHATWG standards, this replaces parse_url() with a powerful, object-oriented, and predictable interface.",
      href: LINKS.docs + "/url-class",
      code: SNIPPETS.urlApiCode,
    },
  ];

  const WhyUpgradeCards = [
    {
      image: SupportImg,
      title: "Active Security Support",
      description:
        "Stay Secure. PHP 8.5 receives active security support and bug fixes. Older branches (like 8.2) are moving to security-only, and 8.1 is nearing its end-of-life. Upgrading is your best defense.",
    },
    {
      image: PackageImg,
      title: "Ecosystem Compatibility",
      description:
        "The Latest Tools. The entire ecosystem (Laravel, Symfony, Composer, etc.) is moving forward. New packages and framework versions will require 8.5+, leaving older apps behind.",
    },
    {
      image: UpgradeImg,
      title: "The Smoothest Upgrade Yet",
      description:
        "Effortless Migration. The migration from 8.4 is designed to be seamless. Our comprehensive guide lists all minor deprecations so you can upgrade with confidence.",
    },
  ];

  return (
    <LandingLayout>
      {/* Page Metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Additional SEO */}
      <meta
        name="keywords"
        content="PHP, PHP 8.5, programming language, web development, server-side scripting, hypertext preprocessor"
      />
      <meta name="author" content="The PHP Group" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      <section aria-labelledby="announcement-heading">
        <h2 id="announcement-heading" className="sr-only">
          Announcement
        </h2>
        <div className="py-6 md:pt-12 lg:pt-20 flex items-center justify-center">
          <Button
            variant="ghost"
            color="default"
            aria-label="Read PHP 8.5 release notes"
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
        aria-labelledby="hero-heading"
        className="block max-w-full relative overflow-hidden"
      >
        <Container
          maxWidth="7xl"
          className="p-6 flex items-center min-h-[50dvh]"
        >
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1 lg:max-w-[50%] text-center lg:text-left">
              <div className="w-full flex justify-center lg:justify-start">
                <LogoFlexible className="h-48" aria-hidden="true" />
              </div>
              <Typography
                variant="h1"
                color="primary"
                component="h1"
                id="hero-heading"
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
                code={SNIPPETS.helloWorld}
                filename="hello_world.php"
                theme={theme}
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="relative overflow-hidden h-22 lg:h-48 mt-4">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-0"
          aria-hidden="true"
        >
          <div className="world-sphere" />
        </div>
      </div>
      <section aria-labelledby="new-features-heading">
        <Container
          maxWidth="full"
          className="pt-16 pb-6 bg-primary-container text-on-primary-container"
        >
          <div className="flex flex-col items-center">
            <Typography
              variant="h2"
              component="h2"
              id="new-features-heading"
              className="text-center text-balance"
            >
              New in PHP 8.5
            </Typography>
            <Typography
              variant="subtitle"
              className="leading-5.5 text-balance max-w-5xl mt-4"
              textAlign="center"
            >
              Discover the next evolution of PHP. Packed with new features,
              significant performance optimizations, and quality-of-life
              improvements that perfect your development workflow.
            </Typography>
          </div>
        </Container>
        <Container maxWidth="7xl" className="mt-12 pb-6">
          {NewKeyFeatures.map((feature, index) => (
            <KeyFeatureArticle key={index} {...feature} />
          ))}
          <div className="mt-6 text-center">
            <Typography
              variant="h3"
              color="tertiary"
              component="h3"
              id="deprecations-heading"
            >
              Deprecations
            </Typography>
            <Container maxWidth="3xl">
              <ul
                className="mt-6 text-left"
                aria-labelledby="deprecations-heading"
              >
                <li className="mb-3">
                  <div className="flex items-start gap-2">
                    <DeprecateIcon
                      className="inline-block text-danger shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="flex-1 min-w-0">
                      All{" "}
                      <code className="font-mono p-0.5 px-2 rounded bg-surface-container-highest whitespace-nowrap">
                        MHASH_*
                      </code>{" "}
                      constants deprecated
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="flex items-start gap-2">
                    <DeprecateIcon
                      className="inline-block text-danger shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="flex-1 min-w-0 wrap-break-word">
                      Non-canonical scalar type casts{" "}
                      <code className="font-mono p-0.5 px-2 rounded bg-surface-container-highest whitespace-nowrap">
                        (boolean|double|integer|binary)
                      </code>{" "}
                      deprecated
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="flex items-start gap-2">
                    <DeprecateIcon
                      className="inline-block text-danger shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="flex-1 min-w-0 wrap-break-word">
                      Returning non-string values from a user output handler is
                      deprecated
                    </span>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="flex items-start gap-2">
                    <DeprecateIcon
                      className="inline-block text-danger shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="flex-1 min-w-0 wrap-break-word">
                      Emitting output from custom output buffer handlers is
                      deprecated
                    </span>
                  </div>
                </li>
              </ul>
            </Container>
            <div className="py-10 mb-4 flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                href={LINKS.docs}
                startContent={<DocsIcon size={20} />}
                color="secondary"
                size={isMobile ? "lg" : "xl"}
                textAlign={isMobile ? "left" : "center"}
                fullWidth={isMobile}
              >
                See migration guide
              </Button>
              <Button
                href={LINKS.docs}
                startContent={<DocsIcon size={20} />}
                color="secondary"
                variant="bordered"
                size={isMobile ? "lg" : "xl"}
                textAlign={isMobile ? "left" : "center"}
                fullWidth={isMobile}
              >
                Release notes
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section aria-labelledby="upgrade-heading">
        <Container maxWidth="full" className="py-6">
          <div className="flex flex-col items-center">
            <Typography
              variant="h2"
              component="h2"
              id="upgrade-heading"
              className="text-center text-balance text-shadow-primary text-shadow-xl"
            >
              Why Upgrade?
            </Typography>
            <Typography
              variant="subtitle"
              className="leading-5.5 text-balance max-w-5xl mt-4"
              textAlign="center"
            >
              Upgrading isn't just about new features. It's about security,
              stability, and staying current with the ecosystem.
            </Typography>
          </div>
        </Container>
        <Container maxWidth="7xl" className="mt-6 pb-6">
          <Grid columns={{ xs: 1, lg: 3 }} className="gap-4 lg:gap-8">
            {WhyUpgradeCards.map((card, index) => (
              <Card
                key={index}
                elevation="high"
                size="lg"
                className="hover:shadow-2xl shadow-primary-container/50"
                fullWidth
              >
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="mb-2"
                />
                <Typography variant="h3" component="h3" className="mb-4">
                  {card.title}
                </Typography>
                <Typography variant="body" className="mb-3">
                  {card.description}
                </Typography>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>
      <section aria-labelledby="blog-heading">
        <Container maxWidth="full" className="py-6 mt-6 lg:mt-12">
          <div className="flex flex-col items-center">
            <Typography
              variant="h2"
              component="h2"
              id="blog-heading"
              className="text-center text-balance text-shadow-primary text-shadow-xl"
            >
              Latest news
            </Typography>
            <Typography
              variant="subtitle"
              className="leading-5.5 text-balance max-w-5xl mt-4"
              textAlign="center"
            >
              Stay updated with the latest announcements, tutorials, and best
              practices from the PHP community.
            </Typography>
          </div>
        </Container>
        <Container maxWidth="6xl" className="mt-6">
          {Blog.map((blog, idx) => (
            <BlogPreview key={idx} {...blog} className="mb-4" />
          ))}
          <div className="py-4 flex justify-end">
            <Button
              href={LINKS.docs}
              startContent={<DocsIcon size={20} />}
              color="primary"
              variant="ghost"
              fullWidth={isMobile}
            >
              Read all blog posts
            </Button>
          </div>
        </Container>
      </section>
      <section aria-labelledby="foundation-heading">
        <Container
          maxWidth="5xl"
          className="mt-12 py-6 bg-primary-container text-on-primary-container"
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
            <img
              src={FoundationImg}
              alt=""
              aria-hidden="true"
              className="size-24 md:size-48"
            />
            <div className="flex-1">
              <Typography
                variant="h2"
                component="h2"
                id="foundation-heading"
                className="text-pretty"
              >
                The PHP Foundation
              </Typography>
              <Typography
                variant="body"
                className="mt-2 leading-5.5 text-pretty md:max-w-3xl"
              >
                The PHP Foundation is a collective of people and organizations,
                united in the mission to ensure the long-term prosperity of the
                PHP language.
              </Typography>
              <Button
                href={LINKS.docs}
                startContent={<DonateIcon size={20} />}
                color="surface"
                textAlign="left"
                size={isMobile ? "xl" : "lg"}
                variant="shadow"
                className="mt-4"
              >
                Donate
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section aria-labelledby="conferences-heading">
        <Container maxWidth="full" className="py-6 mt-6 lg:mt-12">
          <div className="flex flex-col items-center">
            <Typography
              variant="h2"
              component="h2"
              id="conferences-heading"
              className="text-center text-balance text-shadow-primary text-shadow-xl"
            >
              Upcoming conferences
            </Typography>
            <Typography
              variant="subtitle"
              className="leading-5.5 text-balance max-w-5xl mt-4"
              textAlign="center"
            >
              Join the PHP community at conferences worldwide. Learn, network,
              and grow your skills with fellow developers.
            </Typography>
          </div>
        </Container>
        <Container maxWidth="6xl" className="mt-6">
          {Conferences.map((conference, idx) => (
            <ConferenceItem key={idx} {...conference} className="mb-4" />
          ))}
          <div className="pt-4 flex justify-end">
            <Button
              href={LINKS.docs}
              startContent={<CalendarIcon size={20} />}
              color="primary"
              variant="ghost"
              fullWidth={isMobile}
              textAlign={isMobile ? "left" : "inherit"}
            >
              View all conferences
            </Button>
          </div>
          <div className="pt-2 pb-4 flex justify-end">
            <Button
              href={LINKS.docs}
              startContent={<CalendarIcon size={20} />}
              color="primary"
              variant="contained"
              fullWidth={isMobile}
              textAlign={isMobile ? "left" : "inherit"}
            >
              User Group Events
            </Button>
          </div>
          <Container maxWidth="full" className="py-6 mt-4">
            <div className="flex flex-col items-center">
              <Typography
                variant="h3"
                component="h3"
                id="cfp-heading"
                className="text-center text-balance text-shadow-primary text-shadow-xl"
              >
                Conferences calling for papers
              </Typography>
              <Typography
                variant="subtitle"
                className="leading-5.5 text-balance max-w-5xl mt-4"
                textAlign="center"
              >
                Got insights, skills, or experience to share? Submit your talk
                ideas before the deadline! We’re looking for both technical and
                non-technical sessions that will inspire and engage our
                community.
              </Typography>
            </div>
          </Container>
          <ConferenceItem
            date="March 10 - 13, 2026"
            title="Dutch PHP Conference 2026"
            location="Pathé Amsterdam Noord, Amsterdam, Netherlands"
            href="#"
            className="mb-4"
          />
          <div className="py-4 flex justify-end">
            <Button
              href={LINKS.docs}
              startContent={<CalendarIcon size={20} />}
              color="primary"
              variant="ghost"
              fullWidth={isMobile}
              textAlign={isMobile ? "left" : "inherit"}
            >
              View all conferences
            </Button>
          </div>
        </Container>
      </section>
      <section aria-labelledby="sponsors-heading">
        <Container maxWidth="full" className="py-6 mt-6 lg:mt-12">
          <div className="flex flex-col items-center">
            <Typography
              variant="h2"
              component="h2"
              id="sponsors-heading"
              className="text-center text-balance text-shadow-primary text-shadow-xl"
            >
              Special thanks
            </Typography>
            <Typography
              variant="subtitle"
              className="leading-5.5 text-balance max-w-5xl mt-4"
              textAlign="center"
            >
              PHP.net is very grateful for all their support. The PHP Group
              would like to thank the sponsors and partners who make PHP.net
              possible.
            </Typography>
            <div className="flex justify-center py-6">
              <Button
                href={LINKS.docs}
                startContent={<DonateIcon size={20} />}
                color="primary"
                size="xl"
                fullWidth={isMobile}
                textAlign={isMobile ? "left" : "inherit"}
              >
                See all sponsors
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section aria-label="Get PHP">
        <Container
          maxWidth="full"
          className="mt-6 py-16 bg-primary-container text-on-primary-container"
        >
          <div className="flex flex-col items-center">
            <Typography
              variant="h1"
              component="h2"
              className="text-center text-balance"
            >
              Get Started with 8.5
            </Typography>
            <Typography
              variant="subtitle"
              className="leading-5.5 text-balance max-w-5xl mt-4"
              textAlign="center"
            >
              Access the download hub for all supported releases, including
              binaries and source.
            </Typography>
            <Button
              href={LINKS.download}
              startContent={<DownloadIcon size={20} />}
              color="surface"
              size="xl"
              fullWidth={isMobile}
              textAlign={isMobile ? "left" : "inherit"}
              className="mt-6"
            >
              Download the Latest Version
            </Button>
          </div>
        </Container>
      </section>
    </LandingLayout>
  );
}

export default Landing;
