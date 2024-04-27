
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const mensajeInput = document.getElementById('mensaje');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Validar campo de email
  if (!emailInput.value) {
    showError(emailInput, 'El campo de email es obligatorio');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Ingrese un email válido');
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  // Validar campo de nombre
  if (!nombreInput.value) {
    showError(nombreInput, 'El campo de nombre es obligatorio');
    isValid = false;
  } else {
    showSuccess(nombreInput);
  }

  // Validar campo de apellido
  if (!apellidoInput.value) {
    showError(apellidoInput, 'El campo de apellido es obligatorio');
    isValid = false;
  } else {
    showSuccess(apellidoInput);
  }

  // Validar campo de mensaje
  if (!mensajeInput.value) {
    showError(mensajeInput, 'El campo de mensaje es obligatorio');
    isValid = false;
  } else {
    showSuccess(mensajeInput);
  }

  if (isValid) {
    // Enviar el formulario utilizando FormSubmit
    form.submit();
    Swal.fire({
      title: '¡Mensaje enviado!',
      text: 'Tu mensaje ha sido enviado correctamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
});

function showError(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector('small');
  small.textContent = message;
  inputContainer.classList.add('error');
}

function showSuccess(input) {
  const inputContainer = input.parentElement;
  inputContainer.classList.remove('error');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}