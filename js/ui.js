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

    // Funcion recibe las regiones y las agrega en la lista del formulario
    agregarRegiones(regiones) {

        // Declarar variables que almacenarán el id y el nombre de la region
        let id_region;
        let nombre_region;
        // Recorremos las regiones con un loop
        regiones.forEach(element => {
            // Asignar id y nombre de la region a las variables
            id_region = element.region_id;
            nombre_region = element.region_nombre;

            $('#region').append(`<option value="${id_region}">${nombre_region}</option>`);

        });
    }

    agregarProvincias(provincias) {

        // Limpiar combobox
        $('#provincia').html("");

        let id_provincia;
        let nombre_provincia;

        provincias.forEach(element => {
            id_provincia = element.provincia_id;
            nombre_provincia = element.provincia_nombre;
            $('#provincia').append(`<option value="${id_provincia}">${nombre_provincia}</option>`);
        });
    }

    agregarComunas(comunas) {

        // Limpiar combobox
        $('#comuna').html("");

        let id_comuna;
        let nombre_comuna;

        comunas.forEach(element => {
            id_comuna = element.comuna_id;
            nombre_comuna = element.comuna_nombre;
            $('#comuna').append(`<option value="${id_comuna}">${nombre_comuna}</option>`);
        });
    }

}