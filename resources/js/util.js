$(document).ready(function () {
  /**
   * Funcion que permite crear una animacion suave o smooth scrolling
   * a los enlaces dentro de la pagina
   */
  $('a[href^="#prueba"]').click(function () {
    /**
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
     */
    $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
    return false;
  });
});