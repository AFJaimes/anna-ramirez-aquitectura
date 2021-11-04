import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef, useEffect } from "react";
import Navigation from "@anna/components/navigation/Navigation";
import AnimatedContainer from "@anna/components/animatedContainer/AnimatedContainer";
import Footer from "@anna/components/footer/Footer";
import Investigacion from "@anna/components/investigacion/Investigacion";
import Studies from "@anna/components/studies/Studies";

const Home: NextPage = () => {
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
      <Navigation />
      <main>
        <div className="grid md:grid-cols-2 items-center">
          <AnimatedContainer className="bg-primary relative p-7">
            <Image
              src="/anna-ramirez.png"
              alt="Arquitecta Anna Ramirez"
              layout="responsive"
              width="100%"
              height="100vw"
            />
            <p className="text-xl text-justify mt-6">
              Arquitecta con habilidades para el desarrollo de proyectos
              arquitectónicos a nivel de diseño urbano, proyectual y
              tecnológico. Énfasis en arquitectura sostenible, aplicación de
              estrategias de bioclimática en edificios de mediana y alta
              complejidad. Interés en la enseñanza de la arquitectura y su
              relación con el clima y el entorno natural.
            </p>
          </AnimatedContainer>
          <AnimatedContainer className="bg-secondary h-full p-7 flex flex-col justify-center">
            <h1 className="uppercase text-yellow font-bold text-center text-4xl text-center md:text-right pb-10">
              ANNA GABRIELA RAMIREZ CUASTUZA
            </h1>
            <Studies />
          </AnimatedContainer>
        </div>
        {/*
           <AnimatedContainer>
          <h2 className="uppercase text-4xl font-black text-center text-secondary py-3 bg-yellow">
            experiencia
          </h2>
        </AnimatedContainer>
          */}
        <AnimatedContainer>
          <Investigacion />
        </AnimatedContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
