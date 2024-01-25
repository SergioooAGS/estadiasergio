var figuras;
(function (figuras) {
    {
        d3.select("#botonD").on("click"), () => {
            figuras.calcularArea;
        };
        let areaResultado = (d3.select("#areaResultadoCuadrado").property("value"));
        let l = parseFloat(d3.select("#lado").property("value"));
        let area = l * l;
        d3.select("#txtr2").text("Area: " + area);
    }
})(figuras || (figuras = {}));
//# sourceMappingURL=fig2.js.map