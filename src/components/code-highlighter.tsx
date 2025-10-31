import React, { useEffect, useRef, useState } from "react";

import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-php";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-javascript";

import "prismjs/themes/prism.css";
import "prismjs/themes/prism-okaidia.css";
import { cn } from "@/utils/cn";
import Button from "./button";

type Theme = "light" | "dark";

type CodeHighlighterProps = {
  code: string;
  showLines?: boolean;
  theme: Theme;
  filename?: string;
  wrap?: boolean;
  className?: string;
};

export const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  showLines = false,
  theme,
  filename,
  className,
  wrap = true,
}) => {
  const codeRef = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, theme]);

  const handleCopy = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      } catch {}
    }
  };

  const renderWithLineNumbers = (src: string) => {
    const lines = src.replace(/\t/g, "  ").split("\n");
    return (
      <div className="flex font-mono text-xs sm:text-sm min-w-0">
        <div
          className="select-none text-right pr-2 sm:pr-4 tabular-nums opacity-60 shrink-0"
          style={{ minWidth: 32 }}
        >
          {lines.map((_, i) => (
            <div key={i} className="leading-5">
              {i + 1}
            </div>
          ))}
        </div>
        <pre
          className="m-0 flex-1 overflow-x-auto min-w-0"
          style={{ background: "transparent" }}
        >
          <code
            ref={(el) => {
              codeRef.current = el;
            }}
            className={`language-php block ${
              wrap ? "whitespace-pre-wrap" : "whitespace-pre"
            }`}
          >
            {src}
          </code>
        </pre>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "w-full max-w-full rounded-lg sm:rounded-xl p-2 sm:p-3 bg-surface-container text-on-surface-container overflow-hidden",
        className
      )}
    >
      <div className="flex justify-between items-start sm:items-center gap-2 mb-2">
        <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs opacity-85 flex-wrap">
          {filename && (
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-opacity-10 truncate max-w-[150px] sm:max-w-none">
              {filename}
            </span>
          )}
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-surface-container-highest">
            PHP
          </span>
        </div>
        <Button
          variant="ghost"
          size="xs"
          color="secondary"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <div className="overflow-x-auto custom-scroll overflow-y-hidden max-w-full">
        {showLines ? (
          renderWithLineNumbers(code)
        ) : (
          <pre className="m-0 overflow-x-auto text-xs sm:text-sm">
            <code
              ref={(el) => {
                codeRef.current = el;
              }}
              className={`language-php block ${
                wrap ? "whitespace-pre-wrap" : "whitespace-pre"
              }`}
            >
              {code}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default CodeHighlighter;
