class Services {
    constructor() { }

    getRegiones() {
        return $.get('https://duoc.salvarado.cl/api/Region');
    }

    getProvincias(region_id) {
        return $.get(`https://duoc.salvarado.cl/api/Provincia/Region/${region_id}`);
    }

    getComunas(provincia_id) {
        return $.get(`https://duoc.salvarado.cl/api/Comuna/Provincia/${provincia_id}`);
    }
}


