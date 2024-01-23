
namespace figuras {

        export function BtnCk() {
            d3.select('#BtnCk').dispatch('click');
        }   

        export function calcularArea() {
            
// let areaResultado = d3.select("#areaResultadoRectangulo")
               let areaResultado = d3.select(("#areaResultadoRectangulo"))[""][""].value;

               let b = parseFloat(d3.select("#baseRectangulo").property("value"));            
               let h = parseFloat(d3.select("#alturaRectangulo").property("value"));
               
               let area = b * h;

               //let a = parseInt( (<HTMLInputElement>document.getElementById("baseRectangulo")).value);
               //let h = parseInt((<HTMLInputElement>document.getElementById("alturaRectangulo")).value);
               
               areaResultado.html("" + area);
           }
        }