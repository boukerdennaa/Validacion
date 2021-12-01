document.addEventListener("input", () => {
		
let total = 10;
let valor = document.querySelector("input");
let respuesta = document.querySelector('#counter-character');
let cantidad = valor.value.length;
let btn = document.querySelector("#send-button");

 respuesta.textContent = cantidad;
 if(cantidad > total){
    valor.classList.add("red");
 } else{
    valor.classList.remove("red");
 }

btn.addEventListener("click", () => {
    let mensaje = document.querySelector(".form-error");
    console.log(mensaje);
    if(cantidad > total){
        valor.classList.add("active");
     } else{
        
     }
     });
 });



