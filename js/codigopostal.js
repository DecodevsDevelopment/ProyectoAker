const codigoPostalInput = document.getElementById('codigo-postal');
const calcularEnvioButton = document.getElementById('calcular-envio');
const costoEnvioParrafo = document.getElementById('costo-envio');

calcularEnvioButton.addEventListener('click', () => {
  const codigoPostal = codigoPostalInput.value.trim();

  // Simular una consulta de API para obtener el costo de envío
  // (en este ejemplo se utiliza un valor fijo)
  let costoEnvio = 50;

  if (codigoPostal === 'C1000') {
    costoEnvio = 20; // Envío gratuito para este código postal
  }

  costoEnvioParrafo.textContent = `Costo de envío: $${costoEnvio}`;
});
