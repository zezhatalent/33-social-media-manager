import Navbar from './components/Navbar';
import Hero from './Hero';
import BackgroundFx from './components/BackgroundFx';
import { TickerMarquee, AboutSection, Services, StatCounters, MeterSkills, IconSkillTiles, Timeline, Education, Projects, CertGrid, Awards, Hobbies, TestimonialSection, ContactShell, BlogSection, FAQSection, EnhancedTimeline, SkillsDetailedGrid, ContactMethodsGrid } from './components/Sections';
import { content } from './content';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <Navbar content={content} />
      <Hero />
      <TickerMarquee items={content.ticker ?? [content.role, content.tagline]} />
      <AboutSection content={content} />
      <Services content={content} />
      <StatCounters content={content} />
      <MeterSkills content={content} />
      <IconSkillTiles content={content} />
      <SkillsDetailedGrid content={content} />
      <EnhancedTimeline content={content} />
      <Timeline content={content} />
      <Education content={content} />
      <Projects content={content} />
      <CertGrid content={content} />
      <Awards content={content} />
      <Hobbies content={content} />
      <BlogSection content={content} />
      <FAQSection content={content} />
      <TestimonialSection content={content} />
      <ContactMethodsGrid content={content} />
      <ContactShell content={content} />
    </div>
  );
}
