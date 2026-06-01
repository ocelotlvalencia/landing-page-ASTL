import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-copy > *", {
  y: 0,
  opacity: 1,
  duration: 0.85,
  stagger: 0.08,
  ease: "power3.out",
  delay: 0.15
});

gsap.to(".hero-visual", {
  y: 0,
  opacity: 1,
  duration: 0.9,
  ease: "power3.out",
  delay: 0.35
});

const typeCodeLine = (line, delay, onComplete) => {
  const output = line.querySelector(".code-output");
  const text = line.dataset.codeText || "";

  gsap.delayedCall(delay, () => {
    let index = 0;
    output.textContent = "";

    const typeNextCharacter = () => {
      output.textContent = text.slice(0, index);
      index += 1;

      if (index <= text.length) {
        gsap.delayedCall(0.018 + Math.random() * 0.026, typeNextCharacter);
      } else if (onComplete) {
        onComplete();
      }
    };

    typeNextCharacter();
  });

  return delay + text.length * 0.026 + 0.22;
};

const codeLines = gsap.utils.toArray(".code-line");

const runCodeAnimation = () => {
  codeLines.forEach((line) => {
    const output = line.querySelector(".code-output");
    output.textContent = "";
  });

  gsap.set(".code-modules", { opacity: 0, y: 12 });

  let typingDelay = 0.2;

  codeLines.forEach((line, index) => {
    const isLastLine = index === codeLines.length - 1;
    typingDelay = typeCodeLine(line, typingDelay, isLastLine
      ? () => {
          gsap.to(".code-modules", {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            onComplete: () => {
              gsap.delayedCall(2.2, runCodeAnimation);
            }
          });
        }
      : null);
  });
};

gsap.delayedCall(0.65, runCodeAnimation);

gsap.utils.toArray(".reveal").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 24,
    duration: 0.75,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%"
    }
  });
});
