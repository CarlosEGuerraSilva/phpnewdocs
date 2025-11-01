import CodeHighlighter from "@/components/code-highlighter";
import DocLinkSection from "@/components/docs/doc-link-section";
import FeedbackVote from "@/components/feedback-vote";
import InlineCode from "@/components/inline-code";
import Typography from "@/components/typography";
import { LINKS } from "@/consts/links";
import { PHP_8_5_SNIPPETS } from "@/docs/content/php-8-5";
import { useTheme } from "@/hooks/use-theme";
import DocsLayout from "@/layouts/docs-layout";
import { Link } from "react-router-dom";

function LatestReleasePage() {
  const { theme } = useTheme();

  function AsideContent() {
    return (
      <>
        <Typography variant="subtitle">On this page</Typography>
        <hr className="my-2 border-outline-variant" />
        <DocLinkSection headingId="overview" label="Overview" />
        <DocLinkSection headingId="new_features" label="New Features" />
        <DocLinkSection headingId="pipe_operator" label="Pipe Operator" />
        <DocLinkSection headingId="uri_extension" label="New URI Extension" />
        <DocLinkSection
          headingId="array_functions"
          label="array_first() and array_last()"
        />
        <DocLinkSection headingId="nodiscard" label="#[NoDiscard] Attribute" />
        <DocLinkSection headingId="enhanced_clone" label="Enhanced clone" />
        <DocLinkSection
          headingId="attributes_constants"
          label="Attributes on Constants"
        />
        <DocLinkSection
          headingId="closures_constants"
          label="Closures in Constants"
        />
        <DocLinkSection headingId="intl_improvements" label="Intl API" />
        <DocLinkSection headingId="new_functions" label="New Functions" />
        <DocLinkSection headingId="opcache" label="OPcache Changes" />
      </>
    );
  }

  return (
    <DocsLayout
      title="PHP 8.5 Release Notes"
      description="Discover all the new features and improvements in PHP 8.5, released on November 20, 2025."
      activeNavKey="PHP 8.5"
      previousPage={{ title: "Version history", href: "#" }}
      nextPage={{ title: "Migration Guide", href: LINKS.migrationGuide }}
      asideContent={<AsideContent />}
    >
      <Typography
        id="overview"
        variant="h1"
        component="h1"
        className="scroll-m-22"
      >
        PHP 8.5 Release Notes
      </Typography>
      <Typography variant="body" className="mt-4">
        Release Date: November 20, 2025
      </Typography>
      <hr className="my-3 border-outline-variant" />

      <Typography variant="h2" component="h2" className="mt-6">
        Overview
      </Typography>
      <Typography variant="body" className="mt-2">
        PHP 8.5 introduces new syntax, attributes, and language improvements
        aimed at modernizing code structure and performance. This release brings
        significant enhancements to developer experience with features like the
        pipe operator, improved array handling functions, and better attribute
        support.
      </Typography>

      <Typography
        id="new_features"
        variant="h2"
        component="h2"
        className="mt-8 scroll-m-22"
      >
        New Features
      </Typography>

      <Typography
        id="pipe_operator"
        variant="h3"
        component="h3"
        className="mt-6 scroll-m-22"
      >
        Pipe Operator (<InlineCode>|&gt;</InlineCode>)
      </Typography>
      <Typography variant="body" className="mt-2">
        The pipe operator simplifies chaining by passing the left-hand value as
        the first argument to the right-hand function. Use{" "}
        <InlineCode>$$</InlineCode> to reference the piped value.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #1 Using the pipe operator
      </Typography>
      <CodeHighlighter
        filename="pipe_operator.php"
        code={PHP_8_5_SNIPPETS.pipeOperator}
        theme={theme}
      />

      <Typography
        id="uri_extension"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        New URI Extension
      </Typography>
      <Typography variant="body" className="mt-2">
        PHP 8.5 adds a built-in URI handling library compliant with RFC 3986,
        making URI manipulation more standardized and easier to work with.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #2 Working with URIs
      </Typography>
      <CodeHighlighter
        filename="uri_extension.php"
        code={PHP_8_5_SNIPPETS.uriExtension}
        theme={theme}
      />

      <Typography
        id="array_functions"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        array_first() and array_last()
      </Typography>
      <Typography variant="body" className="mt-2">
        Convenience functions for fetching first or last array elements without
        the need for complex array manipulation or resetting array pointers.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #3 Array convenience functions
      </Typography>
      <CodeHighlighter
        filename="array_functions.php"
        code={PHP_8_5_SNIPPETS.arrayFirstLast}
        theme={theme}
      />

      <Typography
        id="nodiscard"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        #[NoDiscard] Attribute
      </Typography>
      <Typography variant="body" className="mt-2">
        The <InlineCode>#[NoDiscard]</InlineCode> attribute warns developers if
        a return value marked with this attribute is ignored. This is especially
        useful for functions where ignoring the return value could lead to bugs.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #4 NoDiscard attribute
      </Typography>
      <CodeHighlighter
        filename="nodiscard.php"
        code={PHP_8_5_SNIPPETS.noDiscardAttribute}
        theme={theme}
      />

      <Typography
        id="enhanced_clone"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Enhanced clone Syntax
      </Typography>
      <Typography variant="body" className="mt-2">
        You can now modify properties during cloning, making it easier to create
        modified copies of objects without manually setting properties after
        cloning.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #5 Cloning with property modification
      </Typography>
      <CodeHighlighter
        filename="enhanced_clone.php"
        code={PHP_8_5_SNIPPETS.enhancedClone}
        theme={theme}
      />

      <Typography
        id="attributes_constants"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Attributes on Constants
      </Typography>
      <Typography variant="body" className="mt-2">
        PHP 8.5 now allows attributes to be applied to class constants, enabling
        better metadata and documentation capabilities.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #6 Attributes on constants
      </Typography>
      <CodeHighlighter
        filename="attributes_constants.php"
        code={PHP_8_5_SNIPPETS.attributesOnConstants}
        theme={theme}
      />

      <Typography
        id="closures_constants"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Closures in Constant Expressions
      </Typography>
      <Typography variant="body" className="mt-2">
        Closures can now be used in constant expressions, allowing for more
        functional programming patterns at the constant level.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #7 Closures as constants
      </Typography>
      <CodeHighlighter
        filename="closures_constants.php"
        code={PHP_8_5_SNIPPETS.closuresInConstants}
        theme={theme}
      />

      <Typography
        id="intl_improvements"
        variant="h3"
        component="h3"
        className="mt-8 scroll-m-22"
      >
        Intl API Improvements
      </Typography>
      <Typography variant="body" className="mt-2">
        The Internationalization extension has been enhanced with improved list
        formatting capabilities for better localization support.
      </Typography>
      <Typography variant="body" className="font-bold mb-4 mt-5">
        Example #8 Using IntlListFormatter
      </Typography>
      <CodeHighlighter
        filename="intl_improvements.php"
        code={PHP_8_5_SNIPPETS.intlListFormatter}
        theme={theme}
      />

      <Typography
        id="new_functions"
        variant="h2"
        component="h2"
        className="mt-8 scroll-m-22"
      >
        New Functions
      </Typography>
      <Typography variant="body" className="mt-2">
        PHP 8.5 introduces several new functions to improve developer experience
        and code clarity:
      </Typography>

      <div className="overflow-x-auto mt-5">
        <table className="min-w-full border-collapse border border-outline-variant">
          <thead>
            <tr className="bg-surface-container-high">
              <th className="border border-outline-variant px-4 py-2 text-left">
                Function
              </th>
              <th className="border border-outline-variant px-4 py-2 text-left">
                Description
              </th>
              <th className="border border-outline-variant px-4 py-2 text-left">
                Example
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>array_first(array $array): mixed</InlineCode>
              </td>
              <td className="border border-outline-variant px-4 py-2">
                Returns first element
              </td>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>array_first([1,2,3]) // 1</InlineCode>
              </td>
            </tr>
            <tr>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>array_last(array $array): mixed</InlineCode>
              </td>
              <td className="border border-outline-variant px-4 py-2">
                Returns last element
              </td>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>array_last([1,2,3]) // 3</InlineCode>
              </td>
            </tr>
            <tr>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>get_error_handler(): ?callable</InlineCode>
              </td>
              <td className="border border-outline-variant px-4 py-2">
                Returns current error handler
              </td>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>var_dump(get_error_handler());</InlineCode>
              </td>
            </tr>
            <tr>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>get_exception_handler(): ?callable</InlineCode>
              </td>
              <td className="border border-outline-variant px-4 py-2">
                Returns current exception handler
              </td>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>var_dump(get_exception_handler());</InlineCode>
              </td>
            </tr>
            <tr>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>
                  clone(object $obj, array $props = []): object
                </InlineCode>
              </td>
              <td className="border border-outline-variant px-4 py-2">
                Clone and modify
              </td>
              <td className="border border-outline-variant px-4 py-2">
                <InlineCode>clone($user, ['role' =&gt; 'admin']);</InlineCode>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Typography
        id="opcache"
        variant="h2"
        component="h2"
        className="mt-8 scroll-m-22"
      >
        OPcache Changes
      </Typography>
      <Typography variant="body" className="mt-2">
        OPcache is now mandatory in PHP 8.5, but it can be disabled in the
        configuration if needed. To disable OPcache, add the following to your{" "}
        <InlineCode>php.ini</InlineCode>:
      </Typography>
      <pre className="bg-surface-container-high p-4 rounded-lg mt-4 overflow-x-auto">
        <code>opcache.enable = 0</code>
      </pre>

      <Typography variant="body" className="mt-5">
        Additionally, PHP 8.5 introduces support for fatal error backtraces,
        which can be enabled with:
      </Typography>
      <pre className="bg-surface-container-high p-4 rounded-lg mt-4 overflow-x-auto">
        <code>fatal_error_backtraces = On</code>
      </pre>

      <Typography variant="body" className="mt-8">
        For information about deprecated features and migration guidance, please
        refer to the{" "}
        <Link
          to={LINKS.migrationGuide}
          className="text-primary visited:text-tertiary"
        >
          PHP 8.5 Migration Guide
        </Link>
        .
      </Typography>

      <FeedbackVote docHref={LINKS.releaseNotes} className="mt-9" />
    </DocsLayout>
  );
}

export default LatestReleasePage;
