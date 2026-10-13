import Link from "next/link";
import { campaign, hasAnyContactMethod } from "@/content/campaign";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { href: "/#story", label: "Our Story" },
    { href: "/#transparency", label: "Transparency" },
    { href: "/privacy", label: "Privacy" },
    ...(hasAnyContactMethod()
      ? [{ href: "/#contact", label: "Contact" }]
      : []),
  ];

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-md">
          <p className="font-serif text-lg text-foreground">{campaign.logoText}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A request for humanitarian assistance for Abdullah Refaat alghefary
            and his family. This website does not currently process payments or
            accept donations online.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-border py-5">
        <p className="text-xs text-foreground-muted">
          © {year} {campaign.logoText}. Publishing this page does not mean that
          fundraising, medical evacuation, or payment processing has been
          approved.
        </p>
      </Container>
    </footer>
  );
}
