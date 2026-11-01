import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#183c32]/10 bg-[#f7f8f2] text-[#183c32]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <Link href="/" className="text-3xl font-extrabold tracking-tight">
          kindred<span className="text-[#e99839]">.</span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-semibold">
          <Link
            href="/events"
            className="transition hover:text-[#a45c14]"
          >
            Upcoming Events
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-[#183c32] px-5 py-3 text-white transition hover:bg-[#285847]"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}