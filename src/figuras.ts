
namespace figuras {

        export function calcularArea() {
               
               let areaResultado = d3.select("#areaResultadoRectangulo")
               let b = parseInt( (<HTMLInputElement>document.getElementById("baseRectangulo")).value);
               let h = parseInt((<HTMLInputElement>document.getElementById("alturaRectangulo")).value);
               let area = b * h;
               areaResultado.html("" + area);
           }
        }