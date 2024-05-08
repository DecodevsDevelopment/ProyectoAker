import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import carrito from "./assets/carrito.png";
import { Modal } from "../Modal/Modal.jsx";

import "./Navbar.css";
export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCartClick = () => {
    setShowModal(true); // Make sure this is setting the state to true
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top w-100 bg-body-secundary'>
        <div className='container-fluid'>
          <Link to='/ProyectoAker/' className='navbar-brand'>
            <img src={logo} className='logo' alt='Imagen del logo de Aker' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon '></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <form className='search' role='search'>
              <input className='form-control me-1' type='search' placeholder='Search' aria-label='Search' />
              <div className='icon'>
                <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
                </svg>
              </div>
            </form>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/ProyectoAker/Somos' className='nav-link'>
                  Somos
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/ProyectoAker/Productos' className='nav-link'>
                  Productos
                </Link>
              </li>
              <li>
                <Link to='/ProyectoAker/Contacto' className='nav-link'>
                  Contacto
                </Link>
              </li>
            </ul>

            <div className='card-button-navbar'>
              <div>
                <a onClick={handleCartClick}>
                  <img src={carrito} className='carrito' alt='imagen carrito' />
                </a>
              </div>
              <p className='mostrar'>1</p>
            </div>
          </div>
        </div>
      </nav>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
