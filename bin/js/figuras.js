var figuras;
(function (figuras) {
    function BtnCk() {
        d3.select('#BtnCk').dispatch('click');
    }
    figuras.BtnCk = BtnCk;
    function calcularArea() {
        // let areaResultado = d3.select("#areaResultadoRectangulo")
        let areaResultado = d3.select(("#areaResultadoRectangulo"))[""][""].value;
        let b = parseFloat(d3.select("#baseRectangulo").property("value"));
        let h = parseFloat(d3.select("#alturaRectangulo").property("value"));
        let area = b * h;
        //let a = parseInt( (<HTMLInputElement>document.getElementById("baseRectangulo")).value);
        //let h = parseInt((<HTMLInputElement>document.getElementById("alturaRectangulo")).value);
        areaResultado.html("" + area);
    }
    figuras.calcularArea = calcularArea;
})(figuras || (figuras = {}));
//# sourceMappingURL=figuras.js.map