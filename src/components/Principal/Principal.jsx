import prote1 from "./assets/sliderprote1.webp";
import prote2 from "./assets/slideprote2.webp";
import prote3 from "./assets/slideprote3.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Principal.css";

AOS.init();
export const Banner = ({ texto }) => {
  return (
    <div className='banner'>
      <p className='textBanner'>{texto}</p>
    </div>
  );
};
const Card = ({ text }) => {
  return (
    <div className='card cardInfo' data-aos='zoom-out' data-aos-duration='1000'>
      <div className='card-img imgCard'></div>
      <p className='textBox'> {text} </p>
    </div>
  );
};

export const Principal = () => {
  return (
    <>
      <Navbar />
      <article className='arti1'>
        <section>
          <div className='tit1 container col-12 col-md-6 col-xl-6'>
            <h1 className='titulo1'>Aker </h1>
          </div>

          <main>
            <Banner texto='Envíos gratis en compras mayores a $39.500' />
          </main>

          <div id='carouselExampleInterval' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active' data-bs-interval='3000'>
                <img src={prote1} className='img1 d-block w-100' alt='Imagen Carousel Uno' />
              </div>
              <div className='carousel-item' data-bs-interval='3000'>
                <img src={prote2} className='img2 d-block w-100' alt='Imagen Carousel Dos' />
              </div>
              <div className='carousel-item' data-bs-interval='3000'>
                <img src={prote3} className='img3 d-block w-100' alt='Imagen Carousel Tres' />
              </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </section>

        <section id='teAyudamos' className='text-center text-white'>
          <div className='container containerParallax'>
            <div className='row'>
              <div className='col-12'>
                <h2 className='display-4 fontIndex'>¡Seguinos para conocer más recetas y hábitos saludables!</h2>
                <a href='#'></a>
              </div>
            </div>
          </div>
        </section>

        <section className='cards'>
          <Card text='Explore the myriad of trails through the mountaineous. Choose the difficulty appropriate to your fitness level.' />
          <Card text='Explore the myriad of trails through the mountaineous. Choose the difficulty appropriate to your fitness level.' />
          <Card text='Explore the myriad of trails through the mountaineous. Choose the difficulty appropriate to your fitness level.' />
          <Card text='Explore the myriad of trails through the mountaineous. Choose the difficulty appropriate to your fitness level.' />
        </section>
      </article>
      <Footer />
    </>
  );
};
