import InvestigationBook from "@anna/components/investigationBook/InvestigationBook";
import { FunctionComponent } from "react";

const Investigacion: FunctionComponent = () => {
  return (
    <>
      <h2 className="uppercase text-4xl font-black text-center text-secondary bg-yellow py-3">
        investigacion
      </h2>
      <div className="grid md:grid-cols-2 justify-items-center">
        <InvestigationBook
          title="Participación Ficha: Colegios Bajos en Carbono Constructores de paz."
          link="http://www.2016-2019.narino.gov.co/inicio/files/SalaDePrensa/Ambiental/PORTAFOLIO_DE_PROYECTOS_EN_GESTIN_DEL_CAMBIO_CLIMTICO_TERRITORIAL_DE_NARIO_NARIO_ACTA_POR_EL_CLIMA-comprimido_reduce.pdf"
          subtitle="PAG.37"
          image="/revista-1.png"
          alt="portafolio de proyectos en gestion del cambio climatico territorial de nariño"
        />
        <InvestigationBook
          title="Análisis de comportamiento higro-térmico en edificio diseñado con principios de sostenibilidad y su verificación en software de simulación."
          link="http://ibpsa.com.ar/wp-content/uploads/2019/12/actas-IBPSA-LATAM-2019.pdf"
          image="/revista-2.png"
          alt="ACTAS DEL VI CONGRESO LATINOAMERICANO DE SIMULACIÓN DE EDIFICIOS"
        >
          <p>
            Juan David Giraldo Gallego <br />
            Anna Gabriela Ramirez
          </p>
        </InvestigationBook>
        <InvestigationBook
          title="Evaluación postocupacional del confort lumínico en edificios de oficina"
          link="https://revistas.uniandes.edu.co/doi/10.18389/dearq20.2017.10"
          subtitle="Anna Gabriela Ramírez / Beatriz Piderit"
          image="/revista-3.png"
          alt="de-arq 20 mujeres en la arquitectura"
        />
        <InvestigationBook
          title="DESIGN OF A NEARLY ZERO-ENERGY HOME WITH EXTREME COLLABORATION IN BIM"
          link="https://www.proceedings.blucher.com.br/article-details/35509"
          subtitle="Nope Bernal, Alberto; Ramírez, Anna Gabriela; García Alvarado, Rodrigo; Forcael Durán, Eric"
          image="/revista-4.png"
          alt="sigradi 2020"
        />
        <InvestigationBook
          title="Potencial de ahorro energético del estándar Passivhaus en climas tropicales cálidos húmedos"
          link="http://geolatitud.geoinvestigacion.gob.ec/ojs/ojs/index.php/congreso-idi/article/view/74"
          subtitle="Anna Ramírez / Jairo Posada"
          image="/revista-5.png"
          alt="de-arq 20 mujeres en la arquitectura"
        />
        <InvestigationBook
          title="Evaluación postocupacional del confort lumínico en edificios de oficina"
          link="https://cms.passivehouse.com/media/persons/accreditedtraining/programme/11CEPH.pdf"
          subtitle="Autor(es): Posada Jairo, Ramírez Anna"
          image="/revista-6.png"
          alt="programa 11va conferencia passivhaus"
        />
      </div>
    </>
  );
};

export default Investigacion;
