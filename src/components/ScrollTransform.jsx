import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function ScrollTransform({ className, children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // scroll position from current
  const [hookedYPostion, setHookedYPosition] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <div ref={ref} className={className}>
      {children?.(hookedYPostion)}
    </div>
  );
}
