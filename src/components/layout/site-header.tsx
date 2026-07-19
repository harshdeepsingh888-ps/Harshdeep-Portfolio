const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex min-h-20 w-full max-w-[88rem] items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#top"
          aria-label="Return to the top of the homepage"
          className="flex items-center gap-3"
        >
          <span className="font-mono text-sm font-semibold tracking-[-0.04em] text-foreground">
            HS
          </span>

          <span className="h-1 w-1 rounded-full bg-accent" />
        </a>

        <nav aria-label="Primary navigation">
          <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/Harshdeep-Singh-Resume.pdf"
          className="inline-flex min-h-10 items-center justify-center border-b border-muted px-1 text-sm text-foreground transition-colors duration-200 hover:border-accent hover:text-accent-soft"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}