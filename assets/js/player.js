/* ==========================================================
   PLAYER — Carregamento do VTurb SmartPlayer (ConverteAI)
   Mantém o embed isolado do restante da lógica da página.
========================================================== */

(function loadVturbPlayer() {
  var PLAYER_SRC =
    "https://scripts.converteai.net/b4d92c20-2920-493b-982b-7f8dd3923ccb/players/6a4ab6779fb73f80a475dc05/v4/player.js";

  var script = document.createElement("script");
  script.src = PLAYER_SRC;
  script.async = true;
  document.head.appendChild(script);
})();
