import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container_main mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg hover:text-accent-foreground transition-colors"
        >
          Movies
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="text-sm hover:text-accent-foreground transition-colors"
          >
            All Movies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
