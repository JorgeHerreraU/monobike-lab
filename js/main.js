class Main {

    constructor() {
        this.ui = new UI();
        this.services = new Services();
        this.setRegiones();
        this.setComunas();
        this.setProvincias();
        this.resizeCarousel();
    }

    async setRegiones() {
        const regiones = await this.services.getRegiones();
        this.ui.agregarRegiones(regiones);
    }

    setProvincias() {
        $('#region').on('change', async () => {
            const selectedRegion = $('#region option:selected').val();
            const provincias = await this.services.getProvincias(selectedRegion);
            this.ui.agregarProvincias(provincias);
            // Hay que activar manualmente el evento change para que se modifique el tercer combobox
            $('#provincia').trigger('change');
        });
    }

    setComunas() {
        $('#provincia').on('change', async () => {
            const selectedProvincia = $('#provincia option:selected').val();
            const comunas = await this.services.getComunas(selectedProvincia);
            this.ui.agregarComunas(comunas);
        });
    }

    resizeCarousel() {
        $(window).on('resize', () => {
            this.ui.ajustarImagen();
        })
    }
}

const main = new Main();