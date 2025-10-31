import Button from "@/components/button";
import LogoSquare from "@/components/icons/logo-square";
import ThemeSwitch from "@/components/theme-switch";
import LangIcon from "./icons/lang-icon";
import { Dropdown } from "./dropdown";
import { Menu } from "./menu";
import { MenuItem } from "./menu-item";
import { GitHub } from "./icons/github-icon";
import NavbarToggle from "./navbar-toggle";
import React from "react";
import { Kbd } from "./kbd";
import { SearchIcon } from "./icons/search-icon";
import { useBreakpointCondition } from "react-tw-breakpoints";
import { cn } from "@/utils/cn";
import { LINKS } from "@/consts/links";

interface MainLink {
  text: string;
  href: string;
}

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const isTablet = useBreakpointCondition({ lessThan: "lg" });

  const MainLinks: MainLink[] = [
    {
      text: "Downloads",
      href: "#",
    },
    {
      text: "Docs",
      href: "#",
    },
    {
      text: "Get Involved",
      href: "#",
    },
    {
      text: "PHP 8.5",
      href: "#",
    },
  ];

  return (
    <div className="px-2 py-1 md:px-4 md:py-2 bg-primary-container sticky top-0 z-20">
      <header role="banner" aria-label="PHP" />
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="flex justify-between items-center"
      >
        <div className="flex items-center">
          <NavbarToggle
            isOpen={isOpen}
            size="sm"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="md:hidden"
          />
          <a href={LINKS.home} role="img" className="mx-2 lg:mx-8 md:px-4">
            <LogoSquare
              size={48}
              className="text-on-primary-container"
              aria-label="PHP Logo"
            />
          </a>
          <ul
            className={cn(
              "gap-2 lg:gap-4",
              "hidden md:flex md:flex-row",
              isOpen &&
                "flex flex-col absolute translate-y-[24%] md:translate-y-0 top-0 left-0 w-full bg-primary-container p-4 z-10 md:static md:flex-row md:bg-transparent md:p-0"
            )}
          >
            {MainLinks.map((link, idx) => (
              <Button
                key={idx}
                size="sm"
                href={link.href}
                color="surface"
                textAlign="left"
                variant="light"
                text={link.text}
                className="py-3"
              />
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex gap-1 items-center">
            {isTablet ? (
              <Button variant="light" color="surface" size="xs">
                <SearchIcon />
              </Button>
            ) : (
              <Button
                variant="bordered"
                color="surface"
                size="xs"
                startContent={<SearchIcon size={16} />}
                endContent={<Kbd>K</Kbd>}
                className="ps-3 px-1 min-w-42 cursor-text border-surface-tint/50 active:scale-100"
              >
                Search...
              </Button>
            )}
            <Dropdown
              trigger={
                <Button
                  size="sm"
                  startContent={<LangIcon size={24} />}
                  color="surface"
                  variant="light"
                >
                  En
                </Button>
              }
              content={
                <Menu position="bottomEnd">
                  <MenuItem>English</MenuItem>
                  <MenuItem>Español</MenuItem>
                  <MenuItem>Français</MenuItem>
                  <MenuItem>Deutsch</MenuItem>
                  <MenuItem>中文</MenuItem>
                  <MenuItem>日本語</MenuItem>
                  <MenuItem>한국어</MenuItem>
                  <MenuItem>Русский</MenuItem>
                  <MenuItem>Sangheli</MenuItem>
                </Menu>
              }
            />
            <ThemeSwitch size="sm" />
            <Button
              size="xs"
              color="surface"
              variant="light"
              href="#"
              target="_blank"
            >
              <GitHub />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
