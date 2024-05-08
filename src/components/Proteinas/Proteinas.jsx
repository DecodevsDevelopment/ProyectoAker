import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import React, { useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Proteinas.css";
import image1 from "./assets/citrato-de-magnesio.webp";
import image2 from "./assets/tabla-citrato-de-magnesio.webp";

export const Proteinas = () => {
  const [codigoPostal, setCodigoPostal] = useState("");
  const [costoEnvio, setCostoEnvio] = useState(0);
  const [showCostoEnvio, setShowCostoEnvio] = useState(false);

  const figureRef = useRef(null); // Ref for figure element

  const handleMouseMove = (event) => {
    const figure = figureRef.current;
    const { offsetX, offsetY, offsetWidth, offsetHeight } = figure;

    // Calculate zoom offsets
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    // Style update
    figure.style.backgroundPosition = `${x}% ${y}%`;
  };

  const handleInputChange = (event) => {
    setCodigoPostal(event.target.value.trim());
  };

  const handleCalcularEnvio = () => {
    // Simulate an API call to get shipping cost (fixed value in this example)
    let calculatedCostoEnvio = 50;

    if (codigoPostal === "3000") {
      calculatedCostoEnvio = 0; // Free shipping for this postal code
    }

    setCostoEnvio(calculatedCostoEnvio);
    setShowCostoEnvio(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <article>
          <section>
            <div className='tit1 container col-12 col-md-6 col-xl-6 d-flex justify-content-center'>
              <h1 className='titulo1'>Aker </h1>
            </div>
          </section>

          <section>
            <div className='conteinerTable'>
              <div className='conteinerBox'>
                <div id='carouselExample' className='carousel slide carouselPhoto'>
                  <div className='carousel-inner carouselPhotoInner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                      <figure
                        ref={figureRef}
                        className='zoom'
                        onMouseMove={handleMouseMove}
                        style={{ backgroundImage: `url(https://acdn.mitiendanube.com/stores/001/681/926/products/citrato-48c1f7a8a3f7ffffe217049136708845-1024-1024.webp)` }}
                      >
                        <img
                          src={"https://acdn.mitiendanube.com/stores/001/681/926/products/citrato-48c1f7a8a3f7ffffe217049136708845-1024-1024.webp"}
                          className='image1'
                          alt='Proteina'
                        />
                      </figure>
                    </div>
                    <div className='carousel-item' data-bs-interval='3000'>
                      <figure
                        ref={figureRef}
                        className='zoom'
                        onMouseMove={handleMouseMove}
                        style={{ backgroundImage: `url(https://acdn.mitiendanube.com/stores/001/681/926/products/pancake-keto11-c2b0a8c4b86b838a6116693845118492-1024-1024.webp)` }}
                      >
                        <img
                          src={"https://acdn.mitiendanube.com/stores/001/681/926/products/pancake-keto11-c2b0a8c4b86b838a6116693845118492-1024-1024.webp"}
                          className='image2'
                          alt='Proteina keto'
                        />
                      </figure>
                    </div>
                  </div>
                  <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                  </button>
                  <button className='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                  </button>
                </div>
                <div id='carouselExampleInterval' className='carousel slide carouselDetails' data-bs-ride='carousel'>
                  <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                      <img src={image1} className='image1' alt='...' />
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
                <div className='boxProtein'>
                  <div className='contenedor'>
                    <div className='tabla'>
                      <div className='descripcion'>
                        <h2 className='title3'>Citrato de Magnesio</h2>
                        <p className='price'>Precio</p>
                      </div>
                      <div className='input-group'>
                        <input className='cp' type='text' id='codigo-postal' placeholder='Código postal' value={codigoPostal} onChange={handleInputChange} />
                        <button className='envio' id='calcular-envio' onClick={handleCalcularEnvio}>
                          Calcular envío
                        </button>
                      </div>
                      {showCostoEnvio && (
                        <p id='costo-envio' style={{ display: showCostoEnvio ? "block" : "none", marginBottom: showCostoEnvio ? "0" : "30px" }}>
                          ${costoEnvio}
                        </p>
                      )}
                      <p className='espacio'></p>
                      <form method='post'>
                        <div className='formu'>
                          <div className='quantity'>
                            <label className='textQuantity'>Cantidad</label>
                            <input type='number' min='1' defaultValue='1' className='numberQuantity' />

                            <div className='mediosPago'>
                              <p>Medios de pago:</p>
                              <img src='../img/iconosTarjetas.jpg' alt='Iconos de tarjetas' />
                            </div>
                          </div>
                          <div className='cartButton'>
                            <button className='CartBtn'>
                              <span className='IconContainer'>
                                <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512' fill='rgb(17, 17, 17)' className='cart'>
                                  <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'></path>
                                </svg>
                              </span>
                              <p className='text2'>Add to Cart</p>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='boxProtein2'>
                  <div className='contenedor2'>
                    <div className='tabla2'>
                      <div className='descripcion2'>
                        <h2 className='title4'>Citrato de Magnesio</h2>
                        <p className='price2'>Precio</p>
                      </div>
                      <div className='input-group2'>
                        <input className='cp2' type='text' id='codigo-postal' placeholder='Código postal' />
                        <button className='envio2' id='calcular-envio'>
                          Calcular envío
                        </button>
                      </div>
                      <p id='costo-envio'></p>
                      <form method='post'>
                        <div className='formu2'>
                          <div className='quantity2'>
                            <label className='textQuantity2'>Cantidad</label>
                            <input type='number' min='1' defaultValue='1' className='numberQuantity2' />
                          </div>
                          <div className='cartButton2'>
                            <button className='CartBtn2'>
                              <span className='IconContainer2'>
                                <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512' fill='rgb(17, 17, 17)' className='cart'>
                                  <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'></path>
                                </svg>
                              </span>
                              <p className='text3'>Add to Cart</p>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className='boxTextPho'>
                  <div className='boxPhoto'>
                    <img src={image1} className='photoCitrato' alt='Imagen Proteina' />
                    <img src={image2} className='photoCitrato2' alt='Descripcion proteina' />
                  </div>
                  <p className='TextProtein'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt at minima sint, nulla illo rerum ad suscipit laborum ducimus ipsam cum quod reiciendis
                    cupiditate, perferendis commodi rem dolor eius. Ipsum, quidem repudiandae. Velit sit corrupti cum quasi temporibus dicta ipsa placeat quas optio, rem odio ut
                    corporis consequuntur at nostrum voluptatum quae praesentium quod hic tenetur ipsum? Minus, optio!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};
