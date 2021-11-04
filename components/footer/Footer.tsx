import { FunctionComponent } from "react";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-green text-white p-7 grid gap-4 md:grid-cols-3">
      <div className="flex flex-col">
        <b className="mb-2">Correos:</b>
        <a
          href="mailto:agramirezc@unal.edu.co"
          title="enviar correo a agramirezc@unal.edu.co"
          target="_blank"
          rel="noopener noreferrer noindex nofollow"
        >
          agramirezc@unal.edu.co
        </a>
        <a
          href="mailto:annagramirez@hotmail.com"
          title="enviar correo a annagramirez@hotmail.com"
          target="_blank"
          rel="noopener noreferrer noindex nofollow"
        >
          annagramirez@hotmail.com
        </a>
      </div>
      <div className="flex flex-col">
        <b className="mb-2">Redes: </b>
        <div>
          <a
            href="https://www.linkedin.com/in/anna-gabriela-ramirez/"
            title="visitar perfil de linkedin de anna ramirez"
            className="pt-1 relative"
            style={{ width: 20 }}
            target="_blank"
            rel="noopener noreferrer noindex nofollow"
          >
            <Image
              src="/linkedin.png"
              alt="perfil de linkedin"
              width={20}
              height={20}
              layout="fixed"
            />
          </a>
          <a
            href="https://wa.me/573187488798?text=Me%2C%20interesa%2C%20comunicarme%2C%20con%2C%20usted"
            title="enviar un mensaje al whatsapp de anna ramirez"
            className="pt-1 relative ml-2"
            style={{ width: 20 }}
            target="_blank"
            rel="noopener noreferrer noindex nofollow"
          >
            <Image
              src="/whatsapp.png"
              alt="whatsapp de anna ramirez"
              width={20}
              height={20}
              layout="fixed"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <b className="mb-2">Celular:</b>
        <a
          href="tel:+573187488798"
          target="_blank"
          rel="noopener noreferrer noindex nofollow"
          title="click para llamar al numero de anna ramirez"
        >
          +57 3187488798
        </a>
      </div>
    </footer>
  );
};

export default Footer;
