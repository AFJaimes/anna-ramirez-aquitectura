import { gsap } from "gsap";
import { useEffect } from "react";

const Studies = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0, defaults: { duration: 0.3 } });
    tl.from(".date", { y: "-100%", opacity: 0 }).to(
      ".date",
      {
        y: 0,
        opacity: 1,
        ease: "power1",
      },
      "<-=0.2"
    );
    tl.from(".title", { x: "-100%", opacity: 0 }).to(
      ".date",
      { x: 0, opacity: 1, ease: "power1" },
      "<-=0.2"
    );
    tl.from(".university", { y: "-100%", opacity: 0 }).to(
      ".date",
      { y: 0, opacity: 1, ease: "power1" },
      "<-=0.2"
    );
  }, []);

  return (
    <>
      <h2 className="uppercase text-3xl font-bold text-center mb-4 text-center md:text-right">
        estudios
      </h2>
      <div className="flex flex-col text-center md:text-right overflox-hidden">
        <span className={`relative text-secondary font-black text-2xl date`}>
          2018
        </span>
        <b className="title">
          Diplomado: Gestión del Cambio climático Territorial.
        </b>
        <span className="university mb-4">
          Universidad Cooperativa de Colombia, Colombia.
        </span>

        <span className="text-secondary font-black text-2xl date">2016</span>
        <b className="title">
          Magister en hábitad sustentable y eficiencia energética.
        </b>
        <span className="university mb-4">
          UNIVERSIDAD DEL BIO BIO Concapción, Chile.
        </span>

        <span className="text-secondary font-black text-2xl date">2015</span>
        <b className="title">Diplomado: Edificios Sustentables.</b>
        <span className="university mb-4">
          UNIVERSIDAD DEL BIO BIO Concapción, Chile.
        </span>

        <span className="text-secondary font-black text-2xl date">2015</span>
        <b className="title">Diplomado: Diseño Urbano Sustentable.</b>
        <span className="university mb-4">
          UNIVERSIDAD DEL BIO BIO Concapción, Chile.
        </span>

        <span className="text-secondary font-black text-2xl date">2014</span>
        <b className="title">Diplomado: Viviendas Sustentables.</b>
        <span className="university mb-4">
          UNIVERSIDAD DEL BIO BIO Concapción, Chile.
        </span>

        <span className="text-secondary font-black text-2xl date">2008</span>
        <b className="title">Pregardo de Arquitectura.</b>
        <span className="university mb-4">
          UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </span>
      </div>
    </>
  );
};

export default Studies;
