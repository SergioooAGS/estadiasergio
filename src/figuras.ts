import { area } from "d3";
import d3 = require("d3");

namespace figuras {

        export function areaRectangulo() {
               let areaResultado = d3.select("#areaResultadoRectangulo")
               let b = parseInt((<HTMLInputElement>document.getElementById("baseRectangulo")).value);
               let h = parseInt((<HTMLInputElement>document.getElementById("alturaRectangulo")).value);
               let area = b * h;
               areaResultado.html("" + area);
           }
        }