var producto = []
var precio = []
function colores() {
  var color = document.getElementById("temas").value
  var bootswatch = document.getElementById("bootswatch")
  bootswatch.href = color + ".css"
}
//definir funcion y esperarparametros
function creargutter() {
  var articulo = document.getElementById("articulo").value;
  var cantidad = document.getElementById("cantidad").value;
  // alert(articulo)
  // alert(cantidad)
  var cuerpo = document.getElementById("cuerpo");
  var falsodiv = document.getElementById("gutter");
  cuerpo.removeChild(falsodiv);
  switch (articulo) {
    case "moviles": producto = ["", "Samsung Galaxy A54 ", "Samsung Galaxy S23 Ultra ", "Iphone 13", "iphone 12 mini", "Motorola Edge 30 Ultra ", " Motorola Razr 40 Ultra"]; break;
    case "computacion": producto = ["", " Samsung Galaxy Book3 Pro 360", "Samsung Monitor Odysssey Ark", " Apple MacBook Air M2", "Apple iMac M1", "Lenovo ThinkPad X12 Detachable", " Lenovo ThinkPad T14"]; break;
    case "accesorios": producto = ["", "Apple AirPods Max", "Apple Watch SE", "Samsung Galaxy Buds2", "Samsung Galaxy Tab 8", "MotoBuds 250", "Morola XT200"]; break;
  }
  switch (articulo) {
    case "moviles": precio = ["", "$203.999", "$559.999", "$569.803", "$793.999", "$549.990", "$349.999", "$549.999"]; break;
    case "computacion": precio = ["", "$1.094.999", "$1.629.999", "$819.999", "$1.399.999", "$800.000", "$958.799"]; break;
    case "accesorios": precio = ["", "$399.999", "$179.999", "$49.999", "$134.999", "$34.999", "$24.399"]; break;
  }

  //primer div del gutter
  var cuerpo = document.getElementById("cuerpo");
  var div1 = document.createElement("div");
  div1.id = ("gutter");
  //div1.innerHTML = "hola si"
  div1.className = "container px-4 text-center";
  cuerpo.appendChild(div1);

  var refdiv1 = document.getElementById("gutter");
  var row = document.createElement("div");
  row.id = ("divdos");
  // row.innerHTML = "hola tambiens"
  row.className = "row gx-5";
  refdiv1.appendChild(row);


  for (var i = 1; i <= cantidad; i++) {

    var refrow = document.getElementById("divdos");
    var div3 = document.createElement("div");
    div3.id = "divtres" + i;
    div3.className = "col-4 mx-auto";
    refrow.appendChild(div3);



    var card = document.getElementById("divtres" + i);
    var divcard1 = document.createElement("div");
    divcard1.id = "div1card" + i;
    divcard1.className = "card text-white bg-secondary mb-3";
    divcard1.style = "max-width: 20rem;";
    card.appendChild(divcard1);

    //creamos la etiqueta imagen
    var div = document.getElementById("div1card" + i);
    var imagen = document.createElement("img");
    imagen.src = "/img/comprar/" + articulo + i + ".png";
    imagen.className = "card-img-top";
    // imagen.style="width: 350px; width: 350px;";
    imagen.alt = "...";
    div.appendChild(imagen);


    //creamos segundo div
    var refdiv = document.getElementById("div1card" + i);
    var div3 = document.createElement("div");
    div3.className = "card-body";
    div3.id = "div2" + i;
    // div3.innerHTML="etiqueta div 2"
    refdiv.appendChild(div3);

    var titulo = document.getElementById("div2" + i);
    var h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = producto[i]
    //h5.innerHTML="etiqueta h5 que deberia estar adentro del div2"
    titulo.appendChild(h5);

    var parrafo = document.createElement("p");
    parrafo.className = "card-text";
    parrafo.textContent = precio[i]
    //  parrafo.innerHTML="algo locos"
    refdiv.appendChild(parrafo);

    var etiquetaA = document.createElement("a");
    //etiquetaA.href = "#"
    etiquetaA.className = "btn btn-primary";
    etiquetaA.innerHTML = "ver mas"
    refdiv.appendChild(etiquetaA);
  }
}

//listado de productos
function elementos() {
  var articulo = ["Samsung Galaxy A54 ", "Samsung Galaxy S23 Ultra ", "Iphone 13", "iphone 12 mini", "Motorola Edge 30 Ultra ", " Motorola Razr 40 Ultra", " Samsung Galaxy Book3 Pro 360", "Samsung Monitor Odysssey Ark", " Apple MacBook Air M2", "Apple iMac M1", "Lenovo ThinkPad X12 Detachable", " Lenovo ThinkPad T14", "Apple AirPods Max", "Apple Watch SE", "Samsung Galaxy Buds2", "Samsung Galaxy Tab 8", "MotoBuds 250", "Morola XT200"]
  var precio = ["$203.999", "$559.999", "$569.803", "$793.999", "$549.990", "$349.999", "$549.999", "$1.094.999", "$1.629.999", "$819.999", "$1.399.999", "$800.000", "$958.799", "$399.999", "$179.999", "$49.999", "$134.999", "$34.999", "$24.399"]
  for (var i = 0; i < articulo.length; i++) {
    var lista = document.getElementById("tabla");
    var tr = document.createElement("tr");
    //tr.innerHTML="funciona"
    tr.id = "tr1" + i;
    lista.appendChild(tr);

    var contenedorth = document.getElementById("tr1" + i);
    var th = document.createElement("th");
    //th.innerHTML="funciona"
    th.className = "row";
    th.textContent = i;
    contenedorth.appendChild(th);

    var contenedortd = document.getElementById("tr1" + i)
    var td1 = document.createElement("td")
    //td1.innerHTML="funciona"
    td1.textContent = articulo[i]
    contenedortd.appendChild(td1)

    var contenedortd2 = document.getElementById("tr1" + i)
    var td2 = document.createElement("td")
    //td2.innerHTML="funciona"
    td2.textContent = precio[i]
    contenedortd2.appendChild(td2)
  }

}
elementos()




