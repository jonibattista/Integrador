      
        function calcularPrecio() {
          var x = 200; // Precio base
          var total = 0;
          var categoria = document.getElementById("categoria").value;
          
          if (categoria === 'estudiante') {
            var cant = parseInt(document.getElementById("cantidad").value);
            total = x * cant * 0.2; // Aplica el descuento del 80% para estudiantes
            var mensaje = "Total a pagar: $" + total;
            document.getElementById("total").innerHTML = mensaje;
          } else {
            if(categoria==='trainee'){
            var cant = parseInt(document.getElementById("cantidad").value);
            total = x * cant * 0.5; // Aplica el descuento del 50% para estudiantes
            var mensaje = "Total a pagar: $" + total;
            document.getElementById("total").innerHTML = mensaje;
            } else {
              if (categoria==='junior'){
                var cant = parseInt(document.getElementById("cantidad").value);
                total = x * cant * 0.85; // Aplica el descuento del 15% para estudiantes
                var mensaje = "Total a pagar: $" + total;
                document.getElementById("total").innerHTML = mensaje;
              }
            }
          }
        }
function borrar(){
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("total").innerHTML="Total a pagar: $";
}      
