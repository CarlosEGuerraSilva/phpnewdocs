import { useTheme } from "@/hooks/use-theme";
import MoonIcon from "@/components/icons/moon-icon";
import SunIcon from "@/components/icons/sun-icon";
import Button from "@/components/button";
import { ButtonProps } from "@/components/button";

function ThemeSwitch({ ...props }: ButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      type="button"
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      aria-pressed={theme === "dark"}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      variant="light"
      color="surface"
      {...props}
    >
      {theme === "light" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
    </Button>
  );
}

export default ThemeSwitch;
