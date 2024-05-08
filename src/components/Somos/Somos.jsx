import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Banner } from "../Principal/Principal";

import "./Somos.css";
export const Somos = () => {
  return (
    <>
      <Navbar />
      <article className='arti1'>
        <section>
          <div className='tit1 container col-12 col-md-6 col-xl-6 d-flex justify-content-center'>
            <h1 className='titulo1'>Aker </h1>
          </div>

          <main>
            <Banner texto='Envíos gratis en compras mayores a $39.500' />
          </main>
          <div>
            <h2 className='somosTitulo'>Elevando el valor de la proteína del huevo</h2>
            <hr className='hr' />
            <p className='somosParrafo'>
              En Aker, nos apasiona la proteína del huevo. Creemos en su potencial para nutrir y fortalecer a las personas, por eso nos dedicamos a separar la clara del huevo de
              manera experta, extrayendo el máximo valor proteico de la parte más beneficiosa. Desafiamos nuestros limites constantemente con el objetivo de inspirar a cada persona
              a trazar su propio recorrido de cambio de vida con la nutricion y la experiecnia adecuada. Somos transparentes respecto a nuestro conocimiento y experiencia
              empoderando a todos los atletas y deportistas ocasionales para que obtengan la nutricion e inspiracion que necesitan, no solo para conseguir sus objetivos, sino para
              superarlos. Desde nuestros inicios nos dedicamos a potenciar las capacidades de neustra comunidad. Decidimos cambiar las reglas del juego, crear productos
              transparentes, sin ingredientes innecesarios, que sean fiables para todos, desde atletas a personas con alimentacion saludable. Asi iniciamos neustra msion de
              transformar y mejorar el estilo de vida de nuestra comunidad creando habitos saludables.
            </p>
            <img src='../img/' className='...' />
            <h3 className='somosTitulo2'>Nuestra misión:</h3>
            <ul className='somosTexto'>
              <li>
                Optimizar el potencial de la proteína del huevo: Utilizamos tecnología de punta y procesos meticulosos para separar la clara del huevo con precisión, maximizando el
                rendimiento de proteínas de alta calidad.
              </li>
              <li>
                Ofrecer productos proteicos puros y versátiles: Brindamos a nuestros clientes claras de huevo frescas, congeladas y deshidratadas, ideales para una amplia gama de
                aplicaciones culinarias y nutricionales.
              </li>
              <li>
                {" "}
                Promover la salud y el bienestar: Ayudamos a las personas a alcanzar sus objetivos de salud y fitness proporcionándoles una fuente de proteína natural, limpia y
                altamente biodisponible.
              </li>
            </ul>

            <h3 className='somosTitulo2'>En Aker, nos enorgullecemos de:</h3>
            <ul className='somosTexto'>
              <li>
                Nuestra experiencia: Contamos con un equipo de expertos en ciencias de la alimentación y tecnología de alimentos, dedicados a desarrollar y perfeccionar nuestros
                procesos de separación de clara de huevo.
              </li>
              <li>
                Nuestro compromiso con la calidad: Implementamos estrictos controles de calidad en todas las etapas de producción para garantizar que nuestros productos proteicos
                sean consistentemente puros, seguros y de alta calidad.
              </li>
              <li>
                Nuestra pasión por la innovación: Constantemente buscamos nuevas formas de mejorar nuestros procesos y desarrollar productos proteicos innovadores que satisfagan
                las necesidades de nuestros clientes.
              </li>
            </ul>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};
