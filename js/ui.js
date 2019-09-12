class UI {
    constructor() {
        this.ajustarImagen();
        this.animarScroll();
    }

    // Ajustar tamaño de la imagen de acuerdo al viewport
    ajustarImagen() {
        $('.img-fluid').height($(window).height()).width($(window).width());
    }

    // Animar boton subscribe hacia el anchor del formulario
    animarScroll() {
        $("a.scrolldown").click(function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
        });
    }

}