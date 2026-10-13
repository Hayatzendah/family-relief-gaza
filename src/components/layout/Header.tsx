"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { campaign, hasAnyContactMethod } from "@/content/campaign";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const showContact = hasAnyContactMethod();

  const navLinks = [
    { href: "/#story", label: "Our Story" },
    { href: "/#how-help-used", label: "How Help Is Used" },
    { href: "/#transparency", label: "Transparency" },
    ...(showContact ? [{ href: "/#contact", label: "Contact" }] : []),
  ];

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link
          href="/"
          className="font-serif text-base text-foreground transition-colors hover:text-accent sm:text-lg"
        >
          {campaign.logoText}
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button href="/#how-to-help" className="ml-1">
            How to Help
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block animate-fade-in" : "hidden",
        )}
        hidden={!open}
      >
        <Container className="flex flex-col gap-1 py-4" as="nav" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent-soft"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 px-3 pb-2">
            <Button href="/#how-to-help" className="w-full" onClick={closeMenu}>
              How to Help
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
