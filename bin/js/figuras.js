"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = require("d3");
var figuras;
(function (figuras) {
    function areaRectangulo() {
        let areaResultado = d3.select("#areaResultadoRectangulo");
        let b = parseInt(document.getElementById("baseRectangulo").value);
        let h = parseInt(document.getElementById("alturaRectangulo").value);
        let area = b * h;
        areaResultado.html("" + area);
    }
    figuras.areaRectangulo = areaRectangulo;
})(figuras || (figuras = {}));
//# sourceMappingURL=figuras.js.map