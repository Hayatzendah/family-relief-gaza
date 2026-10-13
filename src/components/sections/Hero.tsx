import Image from "next/image";
import { campaign, hasAnyContactMethod, hasHeroImage } from "@/content/campaign";
import { publicAssetExists } from "@/lib/public-asset";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const showImage = hasHeroImage() && publicAssetExists(campaign.heroImage);
  const showContactCta = hasAnyContactMethod();

  return (
    <section
      className="border-b border-border"
      aria-labelledby="hero-heading"
    >
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="animate-fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Humanitarian assistance request
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-[3.25rem]"
          >
            {campaign.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            {campaign.heroSupportingText}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/#story">{campaign.primaryCtaLabel}</Button>
            {showContactCta ? (
              <Button href="/#contact" variant="secondary">
                {campaign.secondaryCtaLabel}
              </Button>
            ) : (
              <Button href="/#how-to-help" variant="secondary">
                How to Help
              </Button>
            )}
          </div>
        </div>

        {showImage ? (
          <div className="animate-fade-up animation-delay-200 relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-md border border-border bg-hero-visual lg:mx-0 lg:max-w-none">
            <Image
              src={campaign.heroImage}
              alt={campaign.heroImageAlt || "Campaign photograph"}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
