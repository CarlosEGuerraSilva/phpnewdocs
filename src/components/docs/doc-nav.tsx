import { MenuItem } from "@/components/menu-item";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

interface SidebarSection {
  label: string;
  items: string[];
}

interface SidebarData {
  sidebar: SidebarSection[];
}

interface DocNavProps {
  data: SidebarData;
  activeKey?: string;
  onItemClick?: (item: string) => void;
}

const STORAGE_KEY = "doc-nav-expanded";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocNav({ data, activeKey, onItemClick }: DocNavProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return new Set(parsed);
      } catch {
        return new Set();
      }
    }
    return new Set();
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized && activeKey) {
      const sectionWithActiveKey = data.sidebar.find((section) =>
        section.items.includes(activeKey)
      );

      if (
        sectionWithActiveKey &&
        !expandedSections.has(sectionWithActiveKey.label)
      ) {
        setExpandedSections((prev) => {
          const next = new Set(prev);
          next.add(sectionWithActiveKey.label);
          return next;
        });
      }
      setIsInitialized(true);
    }
  }, [activeKey, data.sidebar, expandedSections, isInitialized]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(expandedSections))
      );
    }
  }, [expandedSections]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const handleItemClick = (item: string) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <nav className="w-full">
      <ul className="space-y-1">
        {data.sidebar.map((section) => {
          const isExpanded = expandedSections.has(section.label);
          return (
            <li key={section.label} className="list-none">
              <button
                onClick={() => toggleSection(section.label)}
                className={cn(
                  "flex items-center w-full px-4 py-2 text-sm font-medium",
                  "rounded-md transition-colors duration-200",
                  "hover:bg-surface-container text-on-surface",
                  "focus:outline-none focus:ring-2 focus:ring-primary/50"
                )}
              >
                <ChevronDownIcon
                  className={cn(
                    "me-2 transition-transform duration-200",
                    isExpanded ? "rotate-0" : "-rotate-90"
                  )}
                />
                <span className="flex-1 text-start">{section.label}</span>
              </button>

              {isExpanded && (
                <ul className="mt-1 ms-4 space-y-0.5">
                  {section.items.map((item) => {
                    const isActive = activeKey === item;
                    return (
                      <MenuItem
                        key={item}
                        variant={isActive ? "solid" : "light"}
                        color={isActive ? "primary" : "default"}
                        size="sm"
                        onClick={() => handleItemClick(item)}
                        className={cn("text-sm", isActive && "font-medium")}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DocNav;
