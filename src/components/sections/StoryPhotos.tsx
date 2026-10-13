import Image from "next/image";
import { campaign } from "@/content/campaign";
import { publicAssetExists } from "@/lib/public-asset";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StoryPhotos() {
  const photos = campaign.storyPhotos.filter(
    (photo) =>
      photo.src.trim().length > 0 &&
      photo.alt.trim().length > 0 &&
      publicAssetExists(photo.src),
  );

  if (photos.length === 0) {
    return null;
  }

  return (
    <section
      id="photos"
      className="scroll-mt-24 border-b border-border bg-background-elevated py-16 sm:py-20"
      aria-labelledby="photos-heading"
    >
      <Container>
        <SectionHeading
          id="photos-heading"
          eyebrow="Photographs"
          title="Moments from the family’s journey"
          description="These photographs were shared by the family."
        />

        <div className="mt-10 grid list-none gap-6 sm:grid-cols-2">
          {photos.map((photo) => {
            const isPortrait = photo.id === "family";

            return (
              <figure
                key={photo.id}
                className="overflow-hidden rounded-md border border-border bg-background"
              >
                <div
                  className={
                    isPortrait
                      ? "relative aspect-[3/4] bg-hero-visual"
                      : "relative aspect-[4/5] bg-hero-visual sm:aspect-[4/3]"
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={
                      isPortrait
                        ? "object-contain p-1"
                        : "object-cover object-top"
                    }
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                {photo.caption.trim() ? (
                  <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-foreground-muted">
                    {photo.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
