import AppFooter from "@/components/app-footer";
import Navbar from "../components/navbar";

function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh w-dvw relative max-w-full bg-background text-on-background">
      <Navbar />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}

export default LandingLayout;
