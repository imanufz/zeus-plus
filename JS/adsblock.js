 // Función para bloquear redirecciones no deseadas
  function blockRedirect() {
    // Cancelar la redirección si no está siendo iniciada por el usuario
    if (!window.event.isTrusted) {
      window.event.preventDefault();
      window.event.returnValue = "";
    }
  }

  // Añadir evento "beforeunload" para detectar redirecciones
  window.addEventListener("beforeunload", blockRedirect);
