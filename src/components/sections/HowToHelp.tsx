import { MessageCircle } from "lucide-react";
import { hasAnyContactMethod } from "@/content/campaign";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowToHelp() {
  const contactConfigured = hasAnyContactMethod();

  return (
    <section
      id="how-to-help"
      className="scroll-mt-24 border-b border-border bg-background-elevated py-16 sm:py-20"
      aria-labelledby="how-to-help-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            id="how-to-help-heading"
            eyebrow="How to help"
            title="Supporting this request"
            description="This website does not currently process payments or accept donations online. Help, if offered, should be arranged directly with the organizer once public contact details are available."
          />

          <div className="rounded-md border border-border bg-background p-6 sm:p-8">
            <div className="mb-4 inline-flex rounded-md bg-accent-soft p-2.5 text-accent">
              <MessageCircle className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-serif text-xl text-foreground">
              No online donations on this site
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
              Payment buttons, donation checkout, and transfer details are not
              published here. Please verify any assistance method directly with
              the organizer before sending support.
            </p>
            {contactConfigured ? (
              <div className="mt-6">
                <Button href="/#contact">Go to Contact</Button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
