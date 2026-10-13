import { Mail, Share2 } from "lucide-react";
import {
  campaign,
  hasContactEmail,
  hasSocialUrl,
  hasAnyContactMethod,
  hasOrganizerName,
} from "@/content/campaign";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  if (!hasAnyContactMethod()) {
    return null;
  }

  const emailReady = hasContactEmail();
  const socialReady = hasSocialUrl();

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Contact the organizer"
          description="Private phone numbers, personal addresses, and account credentials are never published here."
        />

        <div className="mt-10 max-w-2xl rounded-md border border-border bg-background-elevated p-6 sm:p-8">
          {hasOrganizerName() ? (
            <p className="mb-4 text-base leading-relaxed text-foreground-muted">
              Organizer:{" "}
              <span className="font-medium text-foreground">
                {campaign.organizerName}
              </span>
            </p>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            {emailReady ? (
              <Button href={`mailto:${campaign.contactEmail}`}>
                <Mail className="h-4 w-4" aria-hidden />
                Email the organizer
              </Button>
            ) : null}
            {socialReady ? (
              <Button href={campaign.socialUrl} variant="secondary" external>
                <Share2 className="h-4 w-4" aria-hidden />
                {campaign.socialLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
