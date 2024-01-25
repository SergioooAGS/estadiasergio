var figuras;
(function (figuras) {
    d3.select("#botonC").on("click", () => {
        calcularArea();
    });
    function calcularArea() {
    }
    figuras.calcularArea = calcularArea;
})(figuras || (figuras = {}));
//# sourceMappingURL=figuracircle.js.map