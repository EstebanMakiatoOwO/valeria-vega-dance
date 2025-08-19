import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClassesSection from '@/components/ClassesSection';
import ShowsSection from '@/components/ShowsSection';
import PressSection from '@/components/PressSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <ShowsSection />
      <PressSection />
      <ContactSection />
    </div>
  );
};

export default Index;
