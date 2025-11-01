import CodeHighlighter from "@/components/code-highlighter";
import DocLinkSection from "@/components/docs/doc-link-section";
import FeedbackVote from "@/components/feedback-vote";
import InlineCode from "@/components/inline-code";
import Typography from "@/components/typography";
import { LINKS } from "@/consts/links";
import { PHP_8_5_MIGRATION_SNIPPETS } from "@/docs/content/php-8-5-migration";
import { useTheme } from "@/hooks/use-theme";
import DocsLayout from "@/layouts/docs-layout";
import { Link } from "react-router-dom";

function MigrationGuidesPage() {
  const { theme } = useTheme();
  function AsideContent() {
    return (
      <>
        <Typography variant="subtitle">On this page</Typography>
        <hr className="my-2 border-outline-variant" />
        <DocLinkSection headingId="overview" label="Overview" />
        <DocLinkSection headingId="deprecations" label="Deprecations" />
        <DocLinkSection headingId="switch_semicolon" label="Switch Semicolon" />
        <DocLinkSection headingId="cast_names" label="Cast Names" />
        <DocLinkSection
          headingId="multiple_attributes"
          label="Multiple Attributes"
        />
        <DocLinkSection headingId="shell_exec" label="Backticks" />
        <DocLinkSection headingId="magic_methods" label="Magic Methods" />
        <DocLinkSection headingId="null_array_key" label="Null Array Key" />
        <DocLinkSection headingId="debug_info" label="__debugInfo()" />
        <DocLinkSection
          headingId="constant_redeclaration"
          label="Constant Re-declaration"
        />
        <DocLinkSection headingId="migration_tips" label="Migration Tips" />
      </>
    );
  }

  return (
    <DocsLayout
      title="PHP 8.5 Migration Guide"
      description="Learn how to migrate your PHP applications to PHP 8.5 and handle deprecated features."
      activeNavKey="Migration guides"
      previousPage={{ title: "PHP 8.5", href: LINKS.releaseNotes }}
      nextPage={{ title: "Community", href: "#" }}
      asideContent={<AsideContent />}
    >
      <Typography
        id="overview"
        variant="h1"
        component="h1"
        className="scroll-m-22"
      >
        Migrating to PHP 8.5
      </Typography>
      <hr className="my-3 border-outline-variant" />

      <Typography variant="body" className="mt-4">
        PHP 8.5 introduces several deprecations that will help modernize your
        codebase and prepare for future PHP versions. This guide outlines all
        deprecated features and provides recommendations for updating your code.
      </Typography>

      <Typography
        id="deprecations"
        variant="h2"
        component="h2"
        className="mt-8 scroll-m-22"
      >
        Deprecations in PHP 8.5
      </Typography>

      <Typography variant="body" className="mt-4">
        The following features have been deprecated in PHP 8.5 and will be
        removed in a future version. It is recommended to update your code to
        avoid compatibility issues.
      </Typography>

      <Typography
        id="switch_semicolon"
        variant="h3"
        component="h3"
        className="mt-6 scroll-m-22"
      >
        Semicolon after case in switch
      </Typography>
      <Typography variant="body" className="mt-2">
        Using a semicolon after <InlineCode>case</InlineCode> statements in{" "}
        <InlineCode>switch</InlineCode> blocks is now deprecated. Use a colon
        instead.
      </Typography>

      <div className="mt-4 space-y-4">
        <div>
          <Typography variant="body" className="font-semibold text-error mb-2">
            Deprecated:
          </Typography>
          <CodeHighlighter
            filename="switch_deprecated.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.switchSemicolonDeprecated}
            theme={theme}
          />
        </div>
        <div>
          <Typography
            variant="body"
            className="font-semibold text-primary mb-2"
          >
            Recommended:
          </Typography>
          <CodeHighlighter
            filename="switch_recommended.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.switchSemicolonRecommended}
            theme={theme}
          />
        </div>
      </div>

      <Typography
        id="cast_names"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Non-standard cast names
      </Typography>
      <Typography variant="body" className="mt-2">
        Non-standard cast names are deprecated. Use the standard cast syntax
        instead.
      </Typography>

      <div className="mt-4 space-y-4">
        <div>
          <Typography variant="body" className="font-semibold text-error mb-2">
            Deprecated:
          </Typography>
          <CodeHighlighter
            filename="cast_deprecated.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.castNamesDeprecated}
            theme={theme}
          />
        </div>
        <div>
          <Typography
            variant="body"
            className="font-semibold text-primary mb-2"
          >
            Recommended:
          </Typography>
          <CodeHighlighter
            filename="cast_recommended.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.castNamesRecommended}
            theme={theme}
          />
        </div>
      </div>

      <Typography
        id="multiple_attributes"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Multiple attributes for one property
      </Typography>
      <Typography variant="body" className="mt-2">
        Declaring multiple attributes with the same name on a single property is
        deprecated. Combine attributes into a single declaration.
      </Typography>

      <Typography
        id="shell_exec"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Backticks for shell_exec()
      </Typography>
      <Typography variant="body" className="mt-2">
        Using backticks (<InlineCode>`</InlineCode>) as a shorthand for{" "}
        <InlineCode>shell_exec()</InlineCode> is deprecated. Use the explicit
        function call instead.
      </Typography>

      <div className="mt-4 space-y-4">
        <div>
          <Typography variant="body" className="font-semibold text-error mb-2">
            Deprecated:
          </Typography>
          <CodeHighlighter
            filename="shell_exec_deprecated.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.shellExecDeprecated}
            theme={theme}
          />
        </div>
        <div>
          <Typography
            variant="body"
            className="font-semibold text-primary mb-2"
          >
            Recommended:
          </Typography>
          <CodeHighlighter
            filename="shell_exec_recommended.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.shellExecRecommended}
            theme={theme}
          />
        </div>
      </div>

      <Typography
        id="magic_methods"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Magic methods __sleep() and __wakeup()
      </Typography>
      <Typography variant="body" className="mt-2">
        The magic methods <InlineCode>__sleep()</InlineCode> and{" "}
        <InlineCode>__wakeup()</InlineCode> are deprecated. Use{" "}
        <InlineCode>__serialize()</InlineCode> and{" "}
        <InlineCode>__unserialize()</InlineCode> instead.
      </Typography>

      <div className="mt-4 space-y-4">
        <div>
          <Typography variant="body" className="font-semibold text-error mb-2">
            Deprecated:
          </Typography>
          <CodeHighlighter
            filename="magic_methods_deprecated.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.magicMethodsDeprecated}
            theme={theme}
          />
        </div>
        <div>
          <Typography
            variant="body"
            className="font-semibold text-primary mb-2"
          >
            Recommended:
          </Typography>
          <CodeHighlighter
            filename="magic_methods_recommended.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.magicMethodsRecommended}
            theme={theme}
          />
        </div>
      </div>

      <Typography
        id="null_array_key"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Using null as array key
      </Typography>
      <Typography variant="body" className="mt-2">
        Using <InlineCode>null</InlineCode> as an array key is deprecated. It
        will be automatically converted to an empty string.
      </Typography>

      <div className="mt-4 space-y-4">
        <div>
          <Typography variant="body" className="font-semibold text-error mb-2">
            Deprecated:
          </Typography>
          <CodeHighlighter
            filename="null_array_key_deprecated.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.nullArrayKeyDeprecated}
            theme={theme}
          />
        </div>
        <div>
          <Typography
            variant="body"
            className="font-semibold text-primary mb-2"
          >
            Recommended:
          </Typography>
          <CodeHighlighter
            filename="null_array_key_recommended.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.nullArrayKeyRecommended}
            theme={theme}
          />
        </div>
      </div>

      <Typography
        id="debug_info"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        __debugInfo() returning null
      </Typography>
      <Typography variant="body" className="mt-2">
        Returning <InlineCode>null</InlineCode> from{" "}
        <InlineCode>__debugInfo()</InlineCode> is deprecated. Return an empty
        array instead.
      </Typography>

      <div className="mt-4 space-y-4">
        <div>
          <Typography variant="body" className="font-semibold text-error mb-2">
            Deprecated:
          </Typography>
          <CodeHighlighter
            filename="debug_info_deprecated.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.debugInfoDeprecated}
            theme={theme}
          />
        </div>
        <div>
          <Typography
            variant="body"
            className="font-semibold text-primary mb-2"
          >
            Recommended:
          </Typography>
          <CodeHighlighter
            filename="debug_info_recommended.php"
            code={PHP_8_5_MIGRATION_SNIPPETS.debugInfoRecommended}
            theme={theme}
          />
        </div>
      </div>

      <Typography
        id="constant_redeclaration"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Constant re-declaration
      </Typography>
      <Typography variant="body" className="mt-2">
        Re-declaring constants is deprecated. Ensure constants are only defined
        once in your codebase.
      </Typography>

      <Typography
        id="migration_tips"
        variant="h2"
        component="h2"
        className="mt-8 scroll-m-22"
      >
        Migration Tips
      </Typography>

      <Typography variant="body" className="mt-4">
        Follow these recommendations to ensure a smooth migration to PHP 8.5:
      </Typography>

      <ul className="list-disc mt-4 space-y-2">
        <li className="ms-8">
          <Typography variant="body">
            <strong>Remove deprecated syntax before upgrading:</strong> Review
            your codebase for deprecated features and update them according to
            the recommendations above.
          </Typography>
        </li>
        <li className="ms-8">
          <Typography variant="body">
            <strong>Ensure OPcache extension is available:</strong> OPcache is
            now mandatory in PHP 8.5. Make sure it is installed and configured
            properly.
          </Typography>
        </li>
        <li className="ms-8">
          <Typography variant="body">
            <strong>Run tests with PHP 8.5 RC versions:</strong> Test your
            application thoroughly with release candidate versions before
            upgrading to the stable release.
          </Typography>
        </li>
        <li className="ms-8">
          <Typography variant="body">
            <strong>Check framework compatibility:</strong> Verify that your
            framework (e.g., Laravel, Symfony) supports PHP 8.5 and update to
            compatible versions.
          </Typography>
        </li>
        <li className="ms-8">
          <Typography variant="body">
            <strong>Update your CI/CD pipeline:</strong> Update your continuous
            integration and deployment pipelines to test against PHP 8.5.
          </Typography>
        </li>
        <li className="ms-8">
          <Typography variant="body">
            <strong>Monitor error logs:</strong> After upgrading, monitor your
            error logs closely for any deprecation warnings or unexpected
            behavior.
          </Typography>
        </li>
      </ul>

      <Typography variant="body" className="mt-8">
        For more information about new features in PHP 8.5, please refer to the{" "}
        <Link
          to={LINKS.releaseNotes}
          className="text-primary visited:text-tertiary"
        >
          PHP 8.5 Release Notes
        </Link>
        .
      </Typography>

      <FeedbackVote docHref={LINKS.migrationGuide} className="mt-2" />
    </DocsLayout>
  );
}

export default MigrationGuidesPage;
