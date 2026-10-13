import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy | Family Relief — Gaza",
  description:
    "Privacy information for the Family Relief — Gaza website, including what is and is not collected on these pages.",
};

export default function PrivacyPage() {
  return (
    <section
      className="border-b border-border py-16 sm:py-20"
      aria-labelledby="privacy-heading"
    >
      <Container className="max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Privacy
        </p>
        <h1
          id="privacy-heading"
          className="font-serif text-4xl leading-tight text-foreground sm:text-5xl"
        >
          Privacy information
        </h1>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted sm:text-lg">
          This page explains what these website pages do and do not collect.
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground-muted">
          <section>
            <h2 className="font-serif text-2xl text-foreground">
              Forms and trackers
            </h2>
            <p className="mt-3">
              These pages do not include contact forms, newsletter signups,
              payment forms, advertising cookies, or analytics tools added by
              the site itself.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              How contact works
            </h2>
            <p className="mt-3">
              If a public email address or social media link is published and
              you choose to use it, that communication happens through the
              service you use. Those services have their own privacy practices.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">
              Hosting and technical logs
            </h2>
            <p className="mt-3">
              Like most websites, the hosting provider may record standard
              technical information such as IP address, browser type, and
              requested pages for security and reliability. Exact logging
              practices depend on the host used to publish the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">Payments</h2>
            <p className="mt-3">
              This website does not process donations or payments. No payment
              information is collected through these pages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground">Questions</h2>
            <p className="mt-3">
              For questions about this page or the campaign, please return to the{" "}
              <Link
                href="/"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                home page
              </Link>{" "}
              and use a published contact method when one is available.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
