
namespace figuras {
       // export function BtnCk() {
         //   d3.select('#BtnCk').on('click')
     //   }   
    //  d3.select("#botonC").on("click", function(){
    //     calcularArea();
    //  });

  d3.select("#botonC").on("click", ()=>{
        calcularArea();
  });
        export function calcularArea() {
            
            
               
               
               let areaResultado = (d3.select("#areaResultadoRectangulo").property("value"))  ;

               let b = parseFloat(d3.select("#baseRectangulo").property("value"));            
               let h = parseFloat(d3.select("#alturaRectangulo").property("value"));
               
               let area = b * h;
               console.log("area");
               d3.select("#txtr1").text("Area: " + area);
           
        }
    }
