/* ==========================================================
   CTA DELAY — Exibe o botão Hotmart no minuto 8:20 da VSL
   O contador só avança depois que a pessoa dá play: o evento
   "timeupdate" do smartplayer (VTurb) dispara apenas com o
   vídeo em reprodução.
========================================================== */

(function () {
  "use strict";

  var DISPLAY_TIME_SECONDS = 8 * 60 + 20; // 8:20
  var MAX_ATTEMPTS = 30; // ~30s aguardando o player carregar

  var cta = document.querySelector(".video-section__cta");
  if (!cta) return;

  var displayed = false;

  function showCta() {
    if (displayed) return;
    displayed = true;
    cta.classList.add("is-visible");
  }

  function watchProgress(attempt) {
    // Aguarda a lib do VTurb registrar a instância do player
    if (
      typeof smartplayer === "undefined" ||
      !smartplayer.instances ||
      !smartplayer.instances.length
    ) {
      if (attempt >= MAX_ATTEMPTS) return;
      return setTimeout(function () {
        watchProgress(attempt + 1);
      }, 1000);
    }

    var player = smartplayer.instances[0];

    player.on("timeupdate", function () {
      if (displayed) return;
      if (player.video && player.video.currentTime >= DISPLAY_TIME_SECONDS) {
        showCta();
      }
    });
  }

  watchProgress(0);
})();
