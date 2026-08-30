import { motion, useMotionValue, useTransform } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useInView, useCountUp } from './hooks/useMotion';

const bars = [
  { p: 55, c: '#c026d3' },
  { p: 80, c: '#f472b6' },
  { p: 68, c: '#fb923c' },
  { p: 92, c: '#a78bfa' },
];

function SocialIconsSVG() {
  const t = useTheme().theme;
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <motion.path
        d="M100 30 C60 30 30 60 30 100 C30 140 60 170 100 170 C140 170 170 140 170 100 C170 60 140 30 100 30 Z"
        fill="none"
        stroke={t.accent}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M80 70 H90 V90 H80 Z M110 70 H120 V90 H110 Z M80 110 H120 V130 H80 Z"
        fill={t.accent}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="15"
        fill="none"
        stroke={t.accent2}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
    </motion.svg>
  );
}

function FloatingSocialElements() {
  const elements = [
    { x: '15%', y: '20%', delay: 0, size: 40, icon: '📱' },
    { x: '80%', y: '15%', delay: 0.3, size: 35, icon: '💬' },
    { x: '70%', y: '70%', delay: 0.6, size: 30, icon: '❤️' },
    { x: '20%', y: '75%', delay: 0.9, size: 25, icon: '🔔' },
    { x: '50%', y: '10%', delay: 1.2, size: 20, icon: '⚡' },
  ];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y, fontSize: el.size }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0.4, 0.6], 
            scale: [0, 1.1, 0.9, 1],
            y: [0, -10, 5, 0]
          }}
          transition={{ 
            duration: 4, 
            delay: el.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}

function Dashboard() {
  const { theme } = useTheme();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const followers = useCountUp(250000, inView, 2000);
  const reach = useCountUp(4, inView, 2000);
  return (
    <div ref={ref} className="w-full max-w-sm relative z-10">
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  };

  const bgX = useTransform(mouseX, [-50, 50], [-20, 20]);
  const bgY = useTransform(mouseY, [-50, 50], [-20, 20]);
  const textX = useTransform(mouseX, [-50, 50], [-10, 10]);
  const textY = useTransform(mouseY, [-50, 50], [-5, 5]);

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center overflow-hidden" 
      style={{ background: `linear-gradient(135deg, #170b2e, #2a1050, #4a1140)` }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: `radial-gradient(${theme.accent}30 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
      />
      
      <SocialIconsSVG />
      <FloatingSocialElements />
      
      <motion.div 
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2"
        style={{ x: bgX, y: bgY }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ x: textX, y: textY }}
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm"
            style={{ color: theme.accent2 }}
          >
            @ its most shareable
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="text-5xl font-extrabold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-3 text-xl font-semibold"
            style={{ color: theme.accent }}
          >
            {content.role} · {content.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: theme.accent }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See campaigns
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border px-7 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Boost my brand
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="flex justify-center">
          <Dashboard />
        </div>
      </motion.div>
    </section>
  );
}