
function mostrarproductos (){
    const productos = {
        dulces: "chocolate",
        snacks: "Papas fritas"
        }
    let seleccion = prompt("Desea comprar algo")
while (seleccion != "si" && seleccion != "no"){
    alert ("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar si o no")
}

if (seleccion == "si"){
    console.log(productos);
    let producto = prompt("Agrega un producto")

    switch(producto){

     case "dulces":
        alert("elegiste chocolate");
        break;
    case "snacks":
        alert("elegiste papas fritas");
        break;    
    }
}
else {
    alert("Vuelve mas tarde");
}
}
mostrarproductos();






