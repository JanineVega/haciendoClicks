var contador=0;
var contenedor=document.getElementById("contenedor");
var cuandoSeHagaClick = function(){
  contador+=1;

  var divContenedor = document.createElement("div");
	divContenedor.classList.add("div-contenedor");
  var pContenedor = document.createElement("p");
	pContenedor.innerHTML ="Haz hecho " + contador + " <br> Click";
	divContenedor.appendChild(pContenedor);

	contenedor.appendChild(divContenedor);
//alert("click" + contador);
}
document.getElementById("click").addEventListener("click",cuandoSeHagaClick);
