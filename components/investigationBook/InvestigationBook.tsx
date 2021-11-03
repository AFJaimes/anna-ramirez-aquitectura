import React, { useRef, useEffect, FunctionComponent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import css from "./InvestigationBook.module.css";

type InvestigationBookProps = {
  link: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
};

const InvestigationBook: FunctionComponent<InvestigationBookProps> = ({
  link,
  title,
  subtitle,
  alt,
  image,
  children,
}) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const subtitleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
      },
      opacity: 0,
      x: "-100%",
      scaleX: 0,
      ease: "power1",
      delay: 0.4,
    });
    gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
      },
      opacity: 0,
      y: "-100%",
      ease: "power1",
      delay: 0.8,
    });
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
      },
      opacity: 0,
      y: 50,
      ease: "power1",
    });
  }, []);

  return (
    <a
      href={link}
      title={title}
      target="_blank"
      rel="noopener noreferrer noindex nofollow"
      className={`${css.root} relative flex p-4`}
    >
      <div
        ref={imageRef}
        className={`${css.magazine} relative z-20 shadow-xl`}
        style={{ width: "25vw", maxWidth: 500 }}
      >
        <img src={image} alt={alt} className="shadow" />
      </div>
      <div className="relative md:w-2/4 w-9/12 flex flex-col pt-3 md:pt-7">
        <div
          ref={titleRef}
          className={`${css.title} p-3 bg-white font-bold rounded-r-lg capitalize text-secondary z-10 shadow`}
        >
          {title}
        </div>
        <div
          ref={subtitleRef}
          className="uppercase p-2 text-center text-secondary font-bold mx-1 bg-secondary rounded-b-lg shadow"
        >
          {subtitle || children}
        </div>
      </div>
    </a>
  );
};
export default InvestigationBook;
