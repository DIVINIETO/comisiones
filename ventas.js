const VENTAS_BASES = 5;


function calcularComision(numeroVentas, PrecioProductos) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASES) {
        let ventasExtras = numeroVentas - VENTAS_BASES;
        comision = ventasExtras * (PrecioProductos * 0.1);

    }
    return comision;
}

function calcular() {

    // Recuperamos propiedades 

    // let componenteSueldoBase = document.getElementById("txtSueldoBase");
    // let componenteVentas = document.getElementById("txtVentas");
    // let componentePrecio = document.getElementById("txtPrecio");

    // Recuperamos el valor de las cajas de texto

    // let sueldoBaseStr = componenteSueldoBase.value;

    let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    let numeroVentasStr = recuperarTexto("txtVentas");
    let precioProductoStr = recuperarTexto("txtPrecio");

    // let numeroVentasStr = componenteVentas.value;
    // let precioProductoStr = componentePrecio.value;

    // Convertimos el texto a numero

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVenta = parseFloat(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);

    let comision = calcularComision(numeroVenta, precioProducto);

    let total = sueldoBase + comision;

    // let spSueldoBase = document.getElementById("spSueldoBase");
    // let spComision = document.getElementById("spComision");
    // let spTotal = document.getElementById("spTotal");

    // spSueldoBase.textContent = sueldoBase;
    // spComision.textContent = comision;
    // spTotal.textContent = total;

    mostrarSpam("spSueldoBase", sueldoBase);
    mostrarSpam("spComision", comision);
    mostrarSpam("spTotal", total);


}