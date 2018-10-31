/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function requestUrl()
{
    var moneda = document.getElementById("moneda");
    var tipo1 = document.getElementById("despliegue");
    var tipo2 = document.getElementById("despliegue2");
    url = "https://d8yq6vhq43.execute-api.us-east-2.amazonaws.com/prod/mysecondresource";
    var arrUrl = url.split("&");
    var urlObj = {};
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    
    var lista = xmlHttp.responseText;
    lista = JSON.parse(lista)['rates'];
    
    var i=0;
    for(var k in lista){
        tipo1.options[i] = new Option(k);
        tipo2.options[i] = new Option(k);
        i=+1
    }
    /*
    var value = lista[15];
    value = value.split(":");
    value = value[1];

    var respuesta = value.substr(2, value.length - 3);
    respuesta = parseFloat(respuesta * (parseInt(moneda.value)));
    
    document.getElementById("cambio").value = respuesta;
    return value;
    */
   return lista;
}

function getResponse() {
    var t = document.getElementById("tabla");
    
    var moneda = document.getElementById("despleigue3").value;
    
    var monedas = getList();
    
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < monedas.length - 3; i++) {
        
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            if (monedas[i] != moneda) {
                var columna = document.createElement("td");
                var celda;
                if (j == 0) {
                    celda = document.createTextNode(monedas[i]);
                } else {
                    celda = document.createTextNode(requestMoneda(monedas[i], moneda));
                }
                columna.appendChild(celda);
                fila.appendChild(columna);
            }
        }
        tblBody.appendChild(fila);
    }
    
    tabla.appendChild(tblBody);
    t.appendChild(tabla);
    tabla.setAttribute("border", "2");
}

function requestMoneda(moneda1, moneda2) {
    
    var url = "https://d8yq6vhq43.execute-api.us-east-2.amazonaws.com/prod/mysecondresource";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = lista.split("\n");
    var value = lista[15];
    value = value.split(":");
    value = value[1];
    var bal = value.substr(2, value.length - 3);
    bal = parseFloat(bal);
    return bal;
}

