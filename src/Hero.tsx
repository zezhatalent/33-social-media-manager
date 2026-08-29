import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useInView, useCountUp } from './hooks/useMotion';

const bars = [
  { p: 55, c: '#c026d3' },
  { p: 80, c: '#f472b6' },
  { p: 68, c: '#fb923c' },
  { p: 92, c: '#a78bfa' },
];

function Dashboard() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const followers = useCountUp(250000, inView, 2000);
  const reach = useCountUp(4, inView, 2000);
  return (
    <div ref={ref} className="w-full max-w-sm">
      <div className="rounded-2xl border p-5" style={{ borderColor: theme.border, background: theme.surface, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs" style={{ color: theme.muted }}>engagement</span>
          <motion.span
            className="font-mono text-lg font-bold"
            style={{ color: theme.accent2 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            +340%
          </motion.span>
        </div>
        <div className="mt-4 flex h-28 items-end gap-3">
          {bars.map((b, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t"
              style={{ background: `linear-gradient(180deg, ${b.c}, ${b.c}66)` }}
              initial={{ height: 0 }}
              animate={inView ? { height: `${b.p}%` } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: 'easeOut' }}
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border p-3" style={{ borderColor: theme.border, background: theme.bg }}>
            <span className="block text-[10px] uppercase" style={{ color: theme.muted }}>Followers</span>
            <motion.span className="text-xl font-bold" style={{ color: theme.text }}>
              {followers.toLocaleString()}
            </motion.span>
          </div>
          <div className="rounded-xl border p-3" style={{ borderColor: theme.border, background: theme.bg }}>
            <span className="block text-[10px] uppercase" style={{ color: theme.muted }}>Reach/mo</span>
            <motion.span className="text-xl font-bold" style={{ color: theme.text }}>
              {reach}M+
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="hero" className="relative flex min-h-screen items-center" style={{ background: `linear-gradient(135deg, #170b2e, #2a1050, #4a1140)` }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: `radial-gradient(${theme.accent}30 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm"
            style={{ color: theme.accent2 }}
          >
            @ its most shareable
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
            >
              See campaigns
            </a>
            <a
              href="#contact"
              className="rounded-full border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Boost my brand
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
