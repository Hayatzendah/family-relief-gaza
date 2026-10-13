import {
  HeartHandshake,
  Plane,
  ShoppingBasket,
  Stethoscope,
} from "lucide-react";
import { getEnabledCategories } from "@/content/campaign";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  medical: Stethoscope,
  living: HeartHandshake,
  food: ShoppingBasket,
  travel: Plane,
} as const;

export function HowHelpUsed() {
  const categories = getEnabledCategories();

  if (categories.length === 0) {
    return null;
  }

  return (
    <section
      id="how-help-used"
      className="scroll-mt-24 border-b border-border bg-background-elevated py-16 sm:py-20"
      aria-labelledby="how-help-used-heading"
    >
      <Container>
        <SectionHeading
          id="how-help-used-heading"
          eyebrow="Intended use"
          title="How help will be used"
          description="Assistance is intended for the needs below. Actual expenses depend on the family’s circumstances and on any arrangements that become safely and lawfully available. No fundraising target, donation total, or spending percentage is shown here."
        />

        <div className="mt-10 grid list-none gap-6 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon =
              iconMap[category.id as keyof typeof iconMap] ?? HeartHandshake;

            return (
              <article
                key={category.id}
                className="rounded-md border border-border bg-background p-6"
              >
                <div className="mb-4 inline-flex rounded-md bg-accent-soft p-2.5 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {category.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
