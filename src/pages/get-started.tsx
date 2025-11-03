import CodeHighlighter from "@/components/code-highlighter";
import DocLinkSection from "@/components/docs/doc-link-section";
import FeedbackVote from "@/components/feedback-vote";
import InlineCode from "@/components/inline-code";
import Typography from "@/components/typography";
import { LINKS } from "@/consts/links";
import { GETTING_STARTED_SNIPPETS } from "@/docs/content/getting-started";
import { useTheme } from "@/hooks/use-theme";
import DocsLayout from "@/layouts/docs-layout";
import { Link } from "react-router-dom";

function GetStartedPage() {
  const { theme } = useTheme();

  function AsideContent() {
    return (
      <>
        <Typography variant="subtitle">On this page</Typography>
        <hr className="my-2 border-outline-variant" />
        <DocLinkSection
          headingId="what_is_php"
          label="What is PHP and what can it do?"
        />
        <DocLinkSection headingId="what_can_php_do" label="What can PHP do?" />
      </>
    );
  }

  return (
    <DocsLayout
      title="Get Started"
      description="Learn how to get started with PHP New Docs."
      activeNavKey="What is PHP"
      nextPage={{ title: "Version history", href: "#" }}
      asideContent={<AsideContent />}
    >
      <Typography
        id="what_is_php"
        variant="h1"
        component="h1"
        className="scroll-m-22"
      >
        What is PHP and what can it do?
      </Typography>
      <hr className="my-3 border-outline-variant" />
      <Typography variant="h2" component="h2" className="mt-6">
        What is PHP?
      </Typography>
      <Typography variant="body" className="mt-2">
        <abbr className="cursor-help" title="PHP: Hypertext Preprocessor">
          PHP
        </abbr>{" "}
        (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used
        open source general-purpose scripting language that is especially suited
        for web development and can be embedded into HTML.
      </Typography>
      <Typography variant="body" className="my-5">
        Nice, but what does that mean? An example:
      </Typography>
      <Typography variant="body" className="font-bold mb-4">
        Example #1 An introductory example
      </Typography>
      <CodeHighlighter
        filename="getting_started.php"
        code={GETTING_STARTED_SNIPPETS.helloWorld}
        theme={theme}
      />
      <Typography variant="body" className="mt-4">
        Instead of lots of commands to output HTML (as seen in C or Perl), PHP
        pages contain HTML with embedded code that does something (in this case,
        output <InlineCode>Hi, I'm a PHP script!</InlineCode>). The PHP code is
        enclosed in special{" "}
        <Link to="#" className="text-primary visited:text-tertiary">
          start and end processing instructions &lt;?php and ?&gt;
        </Link>{" "}
        that allow jumping in and out of PHP mode.
      </Typography>
      <Typography variant="body" className="my-5">
        What distinguishes PHP from something like client-side JavaScript is
        that the code is executed on the server, generating HTML which is then
        sent to the client. The client would receive the results of running that
        script, but would not know what the underlying code was. A web server
        can even be configured to process all HTML files with PHP, and then
        there's no way that users can tell that PHP is being used.
      </Typography>
      <Typography variant="body" className="my-5">
        The best part about using PHP is that it is extremely simple for a
        newcomer, but offers many advanced features for a professional
        programmer. Don't be afraid to read the long list of PHP's features.
        With PHP, almost anyone can get up and running and be writing simple
        scripts in no time at all.
      </Typography>
      <Typography variant="body" className="my-5">
        Although PHP's development is focused on server-side scripting, much
        more can be done with it. Read on, and see more in the{" "}
        <Link
          to="#what_can_php_do"
          className="text-primary visited:text-tertiary"
        >
          What can PHP do?
        </Link>
        section, or go right to the introductory tutorial to jump straight to
        learning about web programming.
      </Typography>
      <Typography
        id="what_can_php_do"
        variant="h2"
        component="h2"
        className="my-8 scroll-m-22"
      >
        What can PHP do?
      </Typography>
      <Typography variant="body" className="my-5">
        Anything. PHP is mainly focused on server-side scripting, so it can do
        anything any other CGI program can do, such as collect form data,
        generate dynamic page content, or send and receive cookies. But PHP can
        do much more.
      </Typography>
      <Typography variant="body" className="my-5">
        There are two main areas where PHP scripts are used.
      </Typography>
      <ul className="list-disc">
        <li className="ms-8">
          Server-side scripting. This is the most widely used and main target
          field for PHP. Three things are needed to make this work: the PHP
          parser (CGI or server module), a web server, and a web browser. All
          these can run on a local machine in order to just experiment with PHP
          programming. See the installation instructions section for more
          information.
        </li>
        <li className="ms-8">
          Command line scripting. A PHP script can be run without any server or
          browser, only the PHP parser is needed to use it this way. This type
          of usage is ideal for scripts regularly executed using cron (on Unix
          or macOS) or Task Scheduler (on Windows). These scripts can also be
          used for simple text processing tasks. See the section about Command
          line usage of PHP for more information.
        </li>
      </ul>
      <Typography variant="body" className="my-5">
        PHP can be used on all major operating systems, including Linux, many
        Unix variants (including HP-UX, Solaris and OpenBSD), Microsoft Windows,
        macOS, RISC OS, and probably others. PHP also has support for most of
        the web servers today. This includes Apache, IIS, and many others. And
        this includes any web server that can utilize the FastCGI PHP binary,
        like lighttpd and nginx. PHP works as either a module, or as a CGI
        processor.
      </Typography>
      <Typography variant="body" className="my-5">
        So with PHP, developers have the freedom of choosing an operating system
        and a web server. Furthermore, they also have the choice of using
        procedural programming or object-oriented programming (OOP), or a
        mixture of them both.
      </Typography>

      <Typography variant="body" className="my-5">
        PHP is not limited to outputting HTML. PHP's abilities include
        outputting rich file types, such as images or PDF files, encrypting
        data, and sending emails. It can also output easily any text, such as
        JSON or XML. PHP can autogenerate these files, and save them in the file
        system, instead of printing it out, forming a server-side cache for
        dynamic content.
      </Typography>

      <Typography variant="body" className="my-5">
        One of the strongest and most significant features in PHP is its support
        for a wide range of databases. Writing a database-enabled web page is
        incredibly simple using one of the database specific extensions (e.g.,
        for mysql), or using an abstraction layer like PDO, or connect to any
        database supporting the Open Database Connection standard via the ODBC
        extension. Other databases may utilize cURL or sockets, like CouchDB.
      </Typography>

      <Typography variant="body" className="my-5">
        PHP also has support for talking to other services using protocols such
        as LDAP, IMAP, SNMP, NNTP, POP3, HTTP, COM (on Windows) and countless
        others. It can also open raw network sockets and interact using any
        other protocol. PHP has support for the WDDX complex data exchange
        between virtually all Web programming languages. Talking about
        interconnection, PHP has support for instantiation of Java objects and
        using them transparently as PHP objects.
      </Typography>

      <Typography variant="body" className="my-5">
        PHP has useful text processing features, which includes the Perl
        compatible regular expressions (PCRE), and many extensions and tools to
        parse and access XML documents. PHP standardizes all of the XML
        extensions on the solid base of libxml2, and extends the feature set
        adding SimpleXML, XMLReader and XMLWriter support.
      </Typography>

      <Typography variant="body" className="my-5">
        And many other interesting extensions exist, which are categorized both
        alphabetically and by category. And there are additional PECL extensions
        that may or may not be documented within the PHP manual itself, like »
        XDebug.
      </Typography>

      <Typography variant="body" className="my-5">
        This page is not enough to list all the features and benefits PHP can
        offer. Read on in the sections about installing PHP, and see the
        function reference part for explanation of the extensions mentioned
        here.
      </Typography>
      <FeedbackVote docHref={LINKS.getStarted} className="mt-9" />
    </DocsLayout>
  );
}

export default GetStartedPage;
