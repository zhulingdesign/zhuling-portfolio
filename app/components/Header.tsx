"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full bg-white">

      {/* Hero — only show on homepage */}
      {isHome && (
        <section className="relative h-[300px] w-full overflow-hidden sm:h-[340px] md:h-[380px] lg:h-[420px]">
          <Image
            src="/home/home-hero.webp"
            alt="Ling Zhu – Digital Product Designer"
            fill
            priority
            className="object-cover object-center"
          />
        </section>
      )}

      {/* Global Navigation */}
      <nav className="mx-auto flex w-full max-w-[1400px] justify-end gap-14 px-6 py-6 md:px-10">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-[18px] text-neutral-900"
              : "text-[18px] text-neutral-400 hover:text-neutral-900"
          }
        >
          Work
        </Link>

        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "text-[18px] text-neutral-900"
              : "text-[18px] text-neutral-400 hover:text-neutral-900"
          }
        >
          About
        </Link>
      </nav>

    </header>
  );
}