/* ==========================================================
   MAIN — Comportamentos gerais da página
========================================================== */

(function () {
  "use strict";

  /* Aviso ao tentar sair da página (exit intent nativo).
     Os navegadores mostram uma mensagem padrão de confirmação. */
  var EXIT_WARNING_ENABLED = true;

  if (EXIT_WARNING_ENABLED) {
    window.addEventListener("beforeunload", function (event) {
      event.preventDefault();
      event.returnValue = "";
    });
  }
})();
