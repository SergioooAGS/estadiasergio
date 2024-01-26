
namespace figuras {
       
      const switchElement = d3.select("#figuras");
      let switchState = '';

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

      //BOTONES DE PERIMETRO
      d3.select("#botonF").on("click", () => {
            switchState = '#perimetroRec';
            calcularPerimetro("perimetroRec");
      });

      d3.select("#botonG").on("click", () => {
            switchState = '#perimetroCuad';
            calcularPerimetro("perimetroCuad");
      });

      d3.select("#botonH").on("click", () => {
            switchState = '#perimetroCir';
            calcularPerimetro("perimetroCir");
      });
     
      export function calcularArea(operacion: string) {
            let area: number;
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
                        console.log("PROBLEMA 2")
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


      export function calcularPerimetro(operacion: string){
            let perimetro: number;
            switch (switchState) {
                  case "#perimetroRec": {

                        let areaResultado = (d3.select("#pResultadoRectangulo").property("value"));

                        let base = parseFloat(d3.select("#bRectangulo").property("value"));
                        let alt = parseFloat(d3.select("#aRectangulo").property("value"));

                        let perimetro = 2 * (base + alt);
                        console.log("PROBLEMA 4");
                        d3.select("#txtr4").text("Perimetro: " + perimetro);
                        break;
                  }

                  case "#perimetroCuad": {

                        let areaResultado = (d3.select("#pResultadoCuadrado").property("value"));

                        let lado = parseFloat(d3.select("#plado").property("value"));

                        let perimetro = 4 * lado;
                        console.log("PROBLEMA 5");
                        d3.select("#txtr5").text("Perimetro: " + perimetro);
                        break;
                  }

                  case "#perimetroCir": {

                        let areaResultado = (d3.select("#pResultadoCirculo").property("value"));

                        let rad = parseFloat(d3.select("#pradio").property("value"));

                        let perimetro = (2 *(Math.PI) * rad);
                        console.log("PROBLEMA 6");
                        d3.select("#txtr6").text("Perimetro: " + perimetro);
                        break;
                  }
      }
}
}
