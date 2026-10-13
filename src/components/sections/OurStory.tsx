import { campaign } from "@/content/campaign";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OurStory() {
  const paragraphs = campaign.storyParagraphs.filter(
    (paragraph) => paragraph.trim().length > 0,
  );

  return (
    <section
      id="story"
      className="scroll-mt-24 border-b border-border py-16 sm:py-20"
      aria-labelledby="story-heading"
    >
      <Container>
        <SectionHeading
          id="story-heading"
          eyebrow="Our Story"
          title={campaign.storyTitle}
          description={campaign.storyIntro}
        />

        <div className="mt-10 max-w-3xl space-y-5">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-foreground-muted sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
