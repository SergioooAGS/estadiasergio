var figuras;
(function (figuras) {
    const switchElement = d3.select("#figuras");
    let switchState = '#cuadrado';
    d3.select("#botonC").on("click", () => {
        switchState = '#rectangulo'; //funcion arrow =
        calcularArea("rectangulo");
    });
    d3.select("#botonD").on("click", () => {
        switchState = '#cuadrado';
        calcularArea("cuadrado");
    });
    d3.select("#botonE").on("click", () => {
        switchState = '#circulo';
        calcularArea("circulo");
    });
    function calcularArea(operacion) {
        let area;
        switch (switchState) {
            case "#rectangulo": {
                let areaResultado = (d3.select("#areaResultadoRectangulo").property("value"));
                let b = parseFloat(d3.select("#baseRectangulo").property("value"));
                let h = parseFloat(d3.select("#alturaRectangulo").property("value"));
                let area = b * h;
                console.log("PROBLEMA 1");
                d3.select("#txtr1").text("Area: " + area);
                break;
            }
            case "#cuadrado": {
                let areaResultado = (d3.select("#areaResultadoCuadrado").property("value"));
                let l = parseFloat(d3.select("#lado").property("value"));
                let area = l * l;
                console.log("PROBLEMA 2");
                d3.select("#txtr2").text("Area: " + area);
                break;
            }
            case "#circulo": {
                let areaResultado = (d3.select("#areaResultadoCirculo").property("value"));
                let radio = parseFloat(d3.select("#radio").property("value"));
                let area = ((Math.PI * radio) * 2);
                console.log("PROBLEMA 3");
                d3.select("#txtr3").text("Area: " + area);
                break;
            }
        }
    }
    figuras.calcularArea = calcularArea;
})(figuras || (figuras = {}));
//# sourceMappingURL=figuras.js.map