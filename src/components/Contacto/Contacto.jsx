import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Validation } from "./Validation";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contacto.css";
AOS.init();

export const Contacto = () => {
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    apellido: "",
    mensaje: "",
  });

  const [isValid, setIsValid] = useState(true);
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let localIsValid = true;
    const newErrorMessages = {};

    // Validate form fields
    if (!formData.email || !isValidEmail(formData.email)) {
      localIsValid = false;
      newErrorMessages.email = "El campo de email es obligatorio o no es un email válido";
    }

    if (!formData.nombre) {
      localIsValid = false;
      newErrorMessages.nombre = "El campo de nombre es obligatorio";
    }

    if (!formData.apellido) {
      localIsValid = false;
      newErrorMessages.apellido = "El campo de apellido es obligatorio";
    }

    if (!formData.mensaje) {
      localIsValid = false;
      newErrorMessages.mensaje = "El campo de mensaje es obligatorio";
    }

    setErrorMessages(newErrorMessages);
    setIsValid(localIsValid);

    if (localIsValid) {
      // Simulate form submission (replace with actual API call)
      console.log("Form submitted with data:", formData);

      // Show success Sweet Alert using Validation component
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Tu mensaje ha sido enviado correctamente.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form data
      setFormData({
        email: "",
        nombre: "",
        apellido: "",
        mensaje: "",
      });
    } else {
      // Optional: Show basic error alert using Swal (without Sweet Alert UI)
      Swal.fire({
        title: "Error de validación",
        text: "Verifique los campos ingresados.",
        icon: "error",
        confirmButtonButtonText: "Cerrar",
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <main>
        <article>
          <section>
            <div className='container'>
              <div className='col-12 col-md-12 col-xl-12 formularioContacto' data-aos='zoom-out'>
                <form id='form' target='_blank' className='formulario' action='https://formsubmit.co/nicoeei@gmail.com' method='POST' onSubmit={handleSubmit}>
                  <h1 className='title'>Contactanos</h1>
                  <div className='inputContainer'>
                    <input type='email' className='input' id='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                    <label htmlFor='email' className='label'>
                      Email
                    </label>
                    <div className='error-message'>{errorMessages.email}</div>
                  </div>

                  <div className='inputContainer'>
                    <input type='text' className='input' id='nombre' name='nombre' placeholder='Nombre' value={formData.nombre} onChange={handleChange} />
                    <label htmlFor='nombre' className='label'>
                      Nombre
                    </label>
                    <div className='error-message'>{errorMessages.nombre}</div>
                  </div>

                  <div className='inputContainer'>
                    <input type='text' className='input' id='apellido' name='apellido' placeholder='Apellido' value={formData.apellido} onChange={handleChange} />
                    <label htmlFor='apellido' className='label'>
                      Apellido
                    </label>
                    <div className='error-message'>{errorMessages.apellido}</div>
                  </div>

                  <div className='inputContainer'>
                    <textarea
                      name='mensaje'
                      id='mensaje'
                      cols='10'
                      rows='5'
                      className='input'
                      placeholder='Escribe un comentario'
                      maxLength='160'
                      value={formData.mensaje}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor='mensaje' className='label'>
                      Escribe un comentario
                    </label>
                    <div className='error-message'>{errorMessages.mensaje}</div>
                  </div>
                  <input type='submit' id='mandar' className='submitBtn' onClick={handleSubmit} value='Enviar' />
                  <input type='hidden' name='_template' value='table' />
                  <input type='hidden' name='_next' value='http://127.0.0.1:5500/pages/contacto.html' />
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};
