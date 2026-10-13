import { campaign, hasUpdates } from "@/content/campaign";
import { formatDisplayDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Updates() {
  if (!hasUpdates()) {
    return null;
  }

  const updates = campaign.updates.filter(
    (update) =>
      update.id.trim() &&
      update.date.trim() &&
      update.title.trim() &&
      update.body.trim(),
  );

  if (updates.length === 0) {
    return null;
  }

  return (
    <section
      id="updates"
      className="scroll-mt-24 border-b border-border py-16 sm:py-20"
      aria-labelledby="updates-heading"
    >
      <Container>
        <SectionHeading
          id="updates-heading"
          eyebrow="Updates"
          title="Campaign updates"
        />

        <div className="relative mt-10 max-w-3xl space-y-0 border-l border-border pl-8">
          {updates.map((update) => (
            <article key={update.id} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
                aria-hidden
              />
              <time
                dateTime={update.date}
                className="text-xs font-semibold uppercase tracking-wide text-accent"
              >
                {formatDisplayDate(update.date)}
              </time>
              <h3 className="mt-2 font-serif text-xl text-foreground">
                {update.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                {update.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
