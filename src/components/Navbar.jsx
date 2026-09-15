import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const CV_URL =
  "https://drive.google.com/file/d/1fEkscZjsG1Wjg51o6-Ege_FoCak8k0CD/view?usp=sharing";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    cn(
      "text-sm transition-colors duration-300",
      isActive
        ? "text-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    );

  const mobileLinkClass = ({ isActive }) =>
    cn(
      "transition-colors duration-300",
      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
    );

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-4 bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <NavLink
          to="/"
          className="font-mono font-semibold text-lg tracking-tight text-foreground"
        >
          rizky<span className="text-primary">.</span>fadhilah
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <span className="relative inline-block pb-1.5">
                  {item.name}
                  {isActive && (
                    <Motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0 h-[2px] rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm px-4 py-2"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center md:hidden"
            >
              <Motion.div
                className="flex flex-col items-center space-y-8 text-xl"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              >
                {navItems.map((item) => (
                  <Motion.div
                    key={item.to}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={mobileLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </Motion.div>
                ))}
                <Motion.a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  Resume
                </Motion.a>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
