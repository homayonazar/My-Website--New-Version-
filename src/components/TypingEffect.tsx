import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypingEffect() {
  const el = useRef(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    typedInstance.current = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer", "UI/UX Designer", "SEO Optimiser"],
      typeSpeed: 150,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="typing text-2xl font-semibold text-[var(--skin)]"
    ></span>
  );
}

export default TypingEffect;