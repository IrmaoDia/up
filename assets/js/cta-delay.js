/* ==========================================================
   CTA DELAY — Revelações programadas pela linha do tempo da VSL
   - 7:38 → texto de vagas (contador sobe devagar de 42 até 47)
   - 8:20 → botão Hotmart
   O contador só avança depois que a pessoa dá play: o evento
   "timeupdate" do smartplayer (VTurb) dispara apenas com o
   vídeo em reprodução.
========================================================== */

(function () {
  "use strict";

  var SPOTS_TIME_SECONDS = 7 * 60 + 38; // 7:38 — texto de vagas
  var CTA_TIME_SECONDS = 8 * 60 + 20;   // 8:20 — botão Hotmart
  var MAX_ATTEMPTS = 30;                // ~30s aguardando o player carregar

  /* Contador de vagas: 42 → 47, de forma lenta */
  var SPOTS_START = 42;
  var SPOTS_END = 47;
  var SPOTS_MIN_DELAY_MS = 18000; // intervalo mínimo entre incrementos
  var SPOTS_MAX_DELAY_MS = 35000; // intervalo máximo entre incrementos

  var cta = document.querySelector(".video-section__cta");
  var spots = document.querySelector(".video-section__spots");
  var spotsCount = document.getElementById("spots-count");

  var ctaDisplayed = false;
  var spotsDisplayed = false;

  function showCta() {
    if (ctaDisplayed || !cta) return;
    ctaDisplayed = true;
    cta.classList.add("is-visible");
  }

  function showSpots() {
    if (spotsDisplayed || !spots) return;
    spotsDisplayed = true;
    spots.classList.add("is-visible");
    startSpotsCounter();
  }

  function startSpotsCounter() {
    if (!spotsCount) return;
    var current = SPOTS_START;

    function scheduleNext() {
      if (current >= SPOTS_END) return;
      var delay =
        SPOTS_MIN_DELAY_MS +
        Math.random() * (SPOTS_MAX_DELAY_MS - SPOTS_MIN_DELAY_MS);

      setTimeout(function () {
        current += 1;
        spotsCount.textContent = current;
        scheduleNext();
      }, delay);
    }

    scheduleNext();
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
      if (ctaDisplayed && spotsDisplayed) return;
      if (!player.video) return;

      var time = player.video.currentTime;

      if (time >= SPOTS_TIME_SECONDS) showSpots();
      if (time >= CTA_TIME_SECONDS) showCta();
    });
  }

  watchProgress(0);
})();
