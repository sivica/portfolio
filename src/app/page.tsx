import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { SelectedWork } from "@/components/selected-work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <HowIWork />
      <About />
      <Contact />
    </>
  );
}
