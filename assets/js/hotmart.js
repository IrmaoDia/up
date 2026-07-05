/* ==========================================================
   HOTMART — Sales Funnel Widget
   Inicializa o botão/checkout da Hotmart no container
   #hotmart-sales-funnel. Depende da lib carregada no HTML:
   https://checkout.hotmart.com/lib/hotmart-checkout-elements.js
========================================================== */

(function initHotmartSalesFunnel() {
  if (typeof checkoutElements === "undefined") {
    console.warn("Hotmart: checkoutElements não disponível.");
    return;
  }

  checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
})();
