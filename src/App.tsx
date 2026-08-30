import Navbar from './components/Navbar';
import Hero from './Hero';
import BackgroundFx from './components/BackgroundFx';
import { TickerMarquee, AboutSection, Services, StatCounters, MeterSkills, IconSkillTiles, Timeline, Education, Projects, CertGrid, Awards, Hobbies, TestimonialSection, ContactShell, BlogSection, FAQSection, EnhancedTimeline, SkillsDetailedGrid, ContactMethodsGrid, WaveDivider } from './components/Sections';
import { content } from './content';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <Navbar content={content} />
      <Hero />
      <WaveDivider />
      <TickerMarquee items={content.ticker ?? [content.role, content.tagline]} />
      <AboutSection content={content} />
      <WaveDivider flip />
      <Services content={content} />
      <WaveDivider />
      <StatCounters content={content} />
      <WaveDivider flip />
      <MeterSkills content={content} />
      <WaveDivider />
      <IconSkillTiles content={content} />
      <WaveDivider flip />
      <SkillsDetailedGrid content={content} />
      <WaveDivider />
      <EnhancedTimeline content={content} />
      <WaveDivider flip />
      <Timeline content={content} />
      <WaveDivider />
      <Education content={content} />
      <WaveDivider flip />
      <Projects content={content} />
      <WaveDivider />
      <CertGrid content={content} />
      <WaveDivider flip />
      <Awards content={content} />
      <WaveDivider />
      <Hobbies content={content} />
      <WaveDivider flip />
      <BlogSection content={content} />
      <WaveDivider />
      <FAQSection content={content} />
      <WaveDivider flip />
      <TestimonialSection content={content} />
      <WaveDivider />
      <ContactMethodsGrid content={content} />
      <WaveDivider flip />
      <ContactShell content={content} />
    </div>
  );
}