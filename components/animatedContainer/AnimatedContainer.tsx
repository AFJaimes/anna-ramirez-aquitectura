import React, { useRef, useEffect, FunctionComponent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type AnimatedContainerProps = {
  className?: string;
};

const AnimatedContainer: FunctionComponent<AnimatedContainerProps> = ({
  children,
  className,
}) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const divRef = useRef();
  useEffect(() => {
    gsap.from(divRef.current, {
      scrollTrigger: {
        trigger: divRef.current,
      },
      opacity: 0,
      paddingTop: 100,
      ease: "power1",
    });
  }, []);

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
};
export default AnimatedContainer;
