var figuras;
(function (figuras) {
    function calcularArea() {
        let areaResultado = d3.select("#areaResultadoRectangulo");
        let b = parseInt(document.getElementById("baseRectangulo").value);
        let h = parseInt(document.getElementById("alturaRectangulo").value);
        let area = b * h;
        areaResultado.html("" + area);
    }
    figuras.calcularArea = calcularArea;
})(figuras || (figuras = {}));
//# sourceMappingURL=figuras.js.map