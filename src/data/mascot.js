// Verified 16-bit pixel character poses extracted from Prince Choudhary's sprite sheet.
// Zero magenta keying artifacts; all PNGs share 312x300 crisp nearest-neighbor bounds.

export const MASCOT_BASE = '/assets/mascot/extracted';

export const mascotPoses = {
  // Hero Beat 1 & resting state
  idle: {
    src: `${MASCOT_BASE}/idle-neutral.png`,
    label: 'Ready',
    alt: 'Pixel character standing alert in dark skeleton hoodie',
  },
  idleBlink: {
    src: `${MASCOT_BASE}/idle-blink.png`,
    label: 'Calm',
    alt: 'Pixel character standing with calm closed eyes',
  },
  determined: {
    src: `${MASCOT_BASE}/idle-determined.png`,
    label: 'Focused',
    alt: 'Pixel character standing with determined posture',
  },
  // Hero Beat 2 & Act 2 Discovery
  thinking: {
    src: `${MASCOT_BASE}/thinking-curious.png`,
    label: 'Thinking',
    alt: 'Pixel character thinking with hand on chin',
  },
  reflect: {
    src: `${MASCOT_BASE}/thinking-reflect.png`,
    label: 'Framing',
    alt: 'Pixel character looking upward while framing a problem',
  },
  eureka: {
    src: `${MASCOT_BASE}/thinking-eureka.png`,
    label: 'Clarity',
    alt: 'Pixel character having an insight spark beside a yellow star',
  },
  // Act 3 Journey states
  headphones: {
    src: `${MASCOT_BASE}/headphones-chill.png`,
    label: 'Deep build',
    alt: 'Pixel character wearing headphones in engineering focus',
  },
  effort: {
    src: `${MASCOT_BASE}/strained-effort.png`,
    label: 'Front line',
    alt: 'Pixel character pushing with strained effort during quota sprint',
  },
  approve: {
    src: `${MASCOT_BASE}/approve-thumbsup.png`,
    label: 'Shipping PM',
    alt: 'Pixel character holding checklist and giving thumbs up with gold stars',
  },
  // Act 4 Launch Peak
  celebrate: {
    src: `${MASCOT_BASE}/celebrate-sparks.png`,
    label: 'Launched',
    alt: 'Pixel character jumping in celebration surrounded by gold sparkles',
  },
  // Act 5 Craft
  typing: {
    src: `${MASCOT_BASE}/typing-focused.png`,
    label: 'Crafting',
    alt: 'Pixel character typing intently at a compact keyboard',
  },
  // Act 6 Contact
  happy: {
    src: `${MASCOT_BASE}/happy-hearts.png`,
    label: 'Say hello',
    alt: 'Pixel character smiling warmly with floating hearts',
  },
};

export const actMascotSequence = [
  { id: 'hero', poseKey: 'idle', note: 'Prince · APM' },
  { id: 'discovery', poseKey: 'eureka', note: 'Discovery' },
  { id: 'experience', poseKey: 'approve', note: 'Journey' },
  { id: 'work', poseKey: 'celebrate', note: 'Launched' },
  { id: 'craft', poseKey: 'typing', note: 'Craft' },
  { id: 'contact', poseKey: 'happy', note: "Let's talk" },
];

export function preloadMascotPoses() {
  if (typeof Image === 'undefined') return;
  const seen = new Set();
  Object.values(mascotPoses).forEach((pose) => {
    if (seen.has(pose.src)) return;
    seen.add(pose.src);
    const img = new Image();
    img.src = pose.src;
  });
}
