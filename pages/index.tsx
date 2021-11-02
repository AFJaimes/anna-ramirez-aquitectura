import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  return (
    <div className={`font-body ${styles.container} text-primary bg-primary`}>
      <Head>
        <title>Anna Ramirez Arquitectura</title>
        <meta
          name="description"
          content="Exceptional designing for exceptional spaces"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1 className="uppercase text-7xl font-black text-center mb-4">
          perfil
        </h1>
        <h2 className="uppercase text-4xl font-black text-center text-secondary my-3">
          ANNA GABRIELA RAMIREZ CUASTUZA
        </h2>
        <div className="grid gap-4 md:grid-cols-2 items-center p-7">
          <div className=" relative">
            <Image
              src="/anna-ramirez.png"
              layout="responsive"
              alt="Arquitecta Anna Ramirez"
              objectFit="contain"
              width="100%"
              height="100vw"
            />
          </div>
          <p className="text-lg text-justify font-black ">
            Arquitecta con habilidades para el desarrollo de proyectos
            arquitectónicos a nivel de diseño urbano, proyectual y tecnológico.
            Énfasis en arquitectura sostenible, aplicación de estrategias de
            bioclimática en edificios de mediana y alta complejidad. Interés en
            la enseñanza de la arquitectura y su relación con el clima y el
            entorno natural.
          </p>
        </div>
        <div className="bg-secondary p-7">
          <h2 className="uppercase text-4xl font-black text-center text-secondary my-3">
            estudios
          </h2>
          2016 Magister en hábitad sustentable y eficiencia energética.
          UNIVERSIDAD DEL BIO BIO Concapción, Chile. 2008 Pregardo de
          Arquitectura. UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </div>
        <div className="bg-primary p-7">
          <h2 className="uppercase text-4xl font-black text-center text-secondary my-3">
            proyectos
          </h2>
          2016 Magister en hábitad sustentable y eficiencia energética.
          UNIVERSIDAD DEL BIO BIO Concapción, Chile. 2008 Pregardo de
          Arquitectura. UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </div>
        <div className="bg-secondary p-7">
          <h2 className="uppercase text-4xl font-black text-center text-secondary my-3">
            sustentabilidad
          </h2>
          2016 Magister en hábitad sustentable y eficiencia energética.
          UNIVERSIDAD DEL BIO BIO Concapción, Chile. 2008 Pregardo de
          Arquitectura. UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </div>
        <div className="bg-primary p-7">
          <h2 className="uppercase text-4xl font-black text-center text-secondary my-3">
            investigacion
          </h2>
          2016 Magister en hábitad sustentable y eficiencia energética.
          UNIVERSIDAD DEL BIO BIO Concapción, Chile. 2008 Pregardo de
          Arquitectura. UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </div>
      </main>
      <footer className="bg-green text-white p-7">Correo: agramirezc@unal.edu.co - annagramirez@hotmail.com
Linkindin: https://www.linkedin.com/in/anna-gabriela-ramirez/
Celular: +57 3187488798</footer>
    </div>
  );
};

export default Home;
