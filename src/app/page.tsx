import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { ClassesSection } from "@/components/ClassesSection";
import { GivingSection } from "@/components/GivingSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MissionSection />
        <ClassesSection />
        <GivingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
