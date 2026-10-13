import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowHelpUsed } from "@/components/sections/HowHelpUsed";
import { HowToHelp } from "@/components/sections/HowToHelp";
import { OurStory } from "@/components/sections/OurStory";
import { StoryPhotos } from "@/components/sections/StoryPhotos";
import { Transparency } from "@/components/sections/Transparency";
import { Updates } from "@/components/sections/Updates";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurStory />
      <StoryPhotos />
      <HowHelpUsed />
      <Transparency />
      <HowToHelp />
      <Updates />
      <Contact />
    </>
  );
}
