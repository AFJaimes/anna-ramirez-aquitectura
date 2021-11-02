import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef, useEffect } from "react";
import Navigation from "@anna/components/navigation/Navigation";
import AnimatedContainer from "@anna/components/animatedContainer/AnimatedContainer";
import Footer from "@anna/components/footer/Footer";

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
              layout="responsive"
              alt="Arquitecta Anna Ramirez"
              objectFit="contain"
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
            <h2 className="uppercase text-3xl font-bold text-center mb-4 text-center md:text-right">
              perfil
            </h2>
            <p className="uppercase text-yellow font-bold text-center text-4xl text-center md:text-right pb-10">
              ANNA GABRIELA RAMIREZ CUASTUZA
            </p>
            <h2 className="uppercase text-3xl font-bold text-center mb-4 mt-10 text-center md:text-right">
              estudios
            </h2>
            <div className="flex flex-col text-center md:text-right">
              <p className="mb-4">
                <span className="text-secondary font-black text-2xl">2016</span>
                <br />
                <b>Magister en hábitad sustentable y eficiencia energética.</b>
                <br />
                UNIVERSIDAD DEL BIO BIO Concapción, Chile.
              </p>
              <p>
                <span className="text-secondary font-black text-2xl">2008</span>
                <br />
                <b>Pregardo de Arquitectura.</b>
                <br />
                UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
              </p>
            </div>
          </AnimatedContainer>
        </div>
        <AnimatedContainer>
          <h2 className="uppercase text-4xl font-black text-center text-secondary py-3 bg-yellow">
            proyectos
          </h2>
          2016 Magister en hábitad sustentable y eficiencia energética.
          UNIVERSIDAD DEL BIO BIO Concapción, Chile. 2008 Pregardo de
          Arquitectura. UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </AnimatedContainer>
        <AnimatedContainer className="bg-secondary">
          <h2 className="uppercase text-4xl font-black text-center text-secondary bg-yellow">
            sustentabilidad
          </h2>
          2016 Magister en hábitad sustentable y eficiencia energética.
          UNIVERSIDAD DEL BIO BIO Concapción, Chile. 2008 Pregardo de
          Arquitectura. UNIVERSIDAD NACIONAL DE COLOMBIA Bogotá, Colombia.
        </AnimatedContainer>
        <AnimatedContainer>
          <h2 className="uppercase text-4xl font-black text-center text-secondary bg-yellow">
            investigacion
          </h2>
          Participación Ficha:Colegios Bajos en Carbono Constructores de paz.
          PAG.37
          http://www.2016-2019.narino.gov.co/inicio/files/SalaDePrensa/Ambiental/PORTAFOLIO_DE_PROYECTOS_EN_GESTIN_DEL_CAMBIO_CLIMTICO_TERRITORIAL_DE_NARIO_NARIO_ACTA_POR_EL_CLIMA-comprimido_reduce.pdf
        </AnimatedContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
