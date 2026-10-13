import {
  campaign,
  hasAccountabilityInfo,
  hasFundDeliveryInfo,
  hasOrganizerName,
  isConfiguredText,
} from "@/content/campaign";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TransparencyItem = {
  title: string;
  body: string;
};

export function Transparency() {
  const items: TransparencyItem[] = [];

  if (hasOrganizerName()) {
    items.push({
      title: "Who organizes this campaign",
      body: campaign.organizerName,
    });
  }

  if (isConfiguredText(campaign.beneficiaryDescription)) {
    items.push({
      title: "Who this request is intended to help",
      body: campaign.beneficiaryDescription,
    });
  }

  if (hasFundDeliveryInfo()) {
    items.push({
      title: "How assistance is intended to reach the family",
      body: campaign.fundDeliveryDescription,
    });
  }

  if (hasAccountabilityInfo()) {
    items.push({
      title: "Updates and accounting",
      body: campaign.accountabilityDescription,
    });
  }

  return (
    <section
      id="transparency"
      className="scroll-mt-24 border-b border-border py-16 sm:py-20"
      aria-labelledby="transparency-heading"
    >
      <Container>
        <SectionHeading
          id="transparency-heading"
          eyebrow="Transparency"
          title="About this request"
          description="This page shares a humanitarian assistance request for Abdullah and his family. The website does not currently process payments or accept donations online. It does not claim independent verification, tax-deductible status, charitable registration, or guaranteed delivery of funds."
        />

        {items.length > 0 ? (
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {item.title}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-foreground-muted">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Container>
    </section>
  );
}
