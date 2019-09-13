// Instanciar Clase UI (User Interface)
const ui = new UI();
// Instanciar Clase Services
const services = new Services();

// Obtener regiones y agregarlas en el formulario
async function setRegiones() {
    const regiones = await services.getRegiones();
    ui.agregarRegiones(regiones);
}

setRegiones();

// Obtener la region seleccionada y agregar las provincias en el formulario
function setProvincias() {
    $('#region').change(async () => {
        const selectedRegion = $('#region option:selected').val();
        const provincias = await services.getProvincias(selectedRegion);
        ui.agregarProvincias(provincias);
    })
}

setProvincias();