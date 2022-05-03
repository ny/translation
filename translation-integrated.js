document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('nysds-banner');
  document.body.appendChild(div);
  var closeclose = document.getElementById("nysds-close");
      if(closeclose){
      closeclose.addEventListener("click", closetranslate);
      function closetranslate () {
      document.getElementById("nysds-hide-this").style.display = "none";
      }
  }
}, false);

class nysdsBanner extends HTMLElement {
constructor() {
  super();
}
connectedCallback() {
  this.render();
}
render() {
  //<sl:translate_html>
  this.innerHTML = "<article id=\"nysds-hide-this\" class=\"nysds-static-banner\">\n      <div class=\"nysds-static-wrap\"> \n          <div class=\"nysds-disclaimer\"> This website has been translated using automated translation technology. \n          No automated translation is perfect, nor is it intended to replace human translators. \n          Some pages or content may not be accurately translated due to the limitations of the translation software. \n          <a href=\"https:\/\/www.ny.gov\/web-translation-services\">Read the Full Disclaimer<\/a>\n          <\/div>\n          <button id=\"nysds-close\" class=\"nysds-close-button nysds-close-icon\" aria-labelledby=\"close-button-label\">\n              <span class=\"sr-only\" id=\"close-button-label\">Close this notification banner<\/span>\n          <\/button>\n      <\/div>\n  <\/article>";
  //</sl:translate_html>
}
 
}
customElements.define("nysds-banner", nysdsBanner);
