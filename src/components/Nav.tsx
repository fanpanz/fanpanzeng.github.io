import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold">
          Fanpan Zeng
        </Link>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            About Me
          </Link>
          <Link
            href="/Projects"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
          <Link
            href="/Blog"
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Blog
          </Link>
          <a href="mailto:fanpanzeng@gmail.com">Contact</a>
        </div>
      </div>
    </nav>
  );
}
