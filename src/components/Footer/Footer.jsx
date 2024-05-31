import iconoWp from "./assets/iconowp.webp";
import iconoIg from "./assets/Insta.webp";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid container__footer'>
          <div className='box__footer'>
            <div className='boxRedes'>
              <h2>Redes Sociales</h2>
              <div className='redes'>
                <a href='https://www.instagram.com/ovorexnutricion/' target='_blank'>
                  <img src={iconoIg} className='iconoinsta' alt='Imagen Instagram' />
                </a>

                <a href='https://wa.me/5493426131604?text=Escribiendo desde el codigo' target='_blank'>
                  <img src={iconoWp} className='iconowp' alt='Imagen Whatsapp' />
                </a>
              </div>
            </div>
            <div className='maps'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.6023598029531!2d-60.6931119378467!3d-31.63880913705797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9516244604b%3A0xd7d258089419e831!2sFeria%20La%20Verdecita!5e0!3m2!1ses!2sar!4v1713461973161!5m2!1ses!2sar'
                width='600'
                height='200'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                allowFullScreen=''
              ></iframe>
            </div>
          </div>
        </div>
        <div className='box__copyright'>
          <hr />
          <p>
            Copyright
            <b> Aker </b>- 2024. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
