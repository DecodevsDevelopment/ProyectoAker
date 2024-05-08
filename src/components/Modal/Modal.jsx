import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Modal3 from "react-bootstrap/Modal";
import "./Modal.css";

const ContainerCarro = () => {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };
  return (
    <div className='boxCarrito'>
      <img src='../img/citrato-de-magnesio.webp' className='imgCarrito' />
      <p className='textCarrito'>Protenia</p>
      <div className='quantityCarrito'>
        <label className='textQuantityCarrito'>Cantidad</label>
        <input type='number' min='1' value={cantidad} onChange={handleCantidadChange} className='numberQuantityCarrito' />
      </div>
      <p></p>
      <p></p>
    </div>
  );
};

export const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const closeButtonRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;

    const closeButton = closeButtonRef.current;

    if (modal && closeButton) {
      // Agrega los event listeners aquí
      closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        onClose();
      });

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
          onClose();
        }
      });
    }

    // Muestra el modal si isOpen es true
    if (isOpen) {
      modal.style.display = "flex";
    }

    // Limpieza del efecto al desmontar el componente
    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", () => {
          modal.style.display = "none";
          onClose();
        });
      }

      if (modal) {
        window.removeEventListener("click", (event) => {
          if (event.target === modal) {
            modal.style.display = "none";
            onClose();
          }
        });
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div id='ventanaModal' className='modal' ref={modalRef}>
        <div className='contenido-modal'>
          <span className='cerrar' ref={closeButtonRef} onClick={onClose}>
            &times;
          </span>
          <div className='modal-carro'>
            <h2>Carrito</h2>
          </div>
          <div className='boxCarro'>
            <ContainerCarro />
            <ContainerCarro />
            <ContainerCarro />
          </div>
          <div className='buy'>
            <button className='buttonBuy2' ref={closeButtonRef} onClick={onClose}>
              Seguir comprando
            </button>
            <button className='buttonBuy'> Comprar </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Modal2 = ({ show, handleClose }) => {
  return (
    <>
      <Modal3 show={show} onHide={handleClose}>
        <Modal3.Header closeButton>
          <Modal3.Title className='titFiltro'>Filtrado</Modal3.Title>
        </Modal3.Header>
        <Modal3.Body>
          <div className='filtroContenedor2'>
            <h5 className='catFiltro'>Categorias </h5>
            <ul>
              <li className='listFiltro'>
                <a href='./contacto.html'>Protenias</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Keto</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Pro</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Veggan</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Foods</a>
              </li>
            </ul>
          </div>
          <div className='filtroContenedor2'>
            <h5 className='catFiltro'>Gustos </h5>
            <ul>
              <li className='listFiltro'>
                <a href='./contacto.html'>Protenias</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Chocolate</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Frutilla</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Vainilla</a>
              </li>
              <li className='listFiltro'>
                <a href=''>Americana</a>
              </li>
            </ul>
          </div>
        </Modal3.Body>
        <Modal3.Footer></Modal3.Footer>
        {/* <Modal3.Body>
          <div className='modal fade' id='exampleModal' tabIndex='1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='filtroContenedor2'>
                  <h5 className='catFiltro'>Categorias </h5>
                  <ul>
                    <li className='listFiltro'>
                      <a href='./contacto.html'>Protenias</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Keto</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Pro</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Veggan</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Foods</a>
                    </li>
                  </ul>
                </div>
                <div className='filtroContenedor2'>
                  <h5 className='catFiltro'>Gustos </h5>
                  <ul>
                    <li className='listFiltro'>
                      <a href='./contacto.html'>Protenias</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Chocolate</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Frutilla</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Vainilla</a>
                    </li>
                    <li className='listFiltro'>
                      <a href=''>Americana</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal3.Body> */}
      </Modal3>
    </>
  );
};
