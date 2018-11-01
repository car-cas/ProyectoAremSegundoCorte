/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getCambioMoneda()
{
    var lista = getvalues();
    var tasa1;
    var tasa2;
    var numero = document.getElementById("moneda");
    var despliegue = document.getElementById("despliegue");
    var despliegue2 = document.getElementById("despliegue2");
    var flag = false;
    if (despliegue.value === '"USD"') {
        flag = true;
    }
    for (var x in lista) {
        if (x === despliegue.value) {
            tasa1 = parseFloat(lista[x]);
        }
        if (x === despliegue2.value) {
            tasa2 = parseFloat(lista[x]);
        }
    }
    var bal;
    if (flag) {
        bal = tasa2 * numero.value;
    } else {
        var temp=(1/tasa1)*tasa2;
        bal = temp*numero.value;
    }
    document.getElementById("cambio").value = bal;
}

function getResponse() {
    var despliegue3 = document.getElementById("despliegue3").value;
    var lista = getList();
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < lista.length - 1; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 2; j++) {
            if (lista[i] != despliegue3) {
                var columna = document.createElement("td");
                var celda;
                var lectura = read(lista[i], despliegue3);
                try {
                    if (j == 0) {
                        celda = document.createTextNode(despliegue3[i]);
                    } else {
                        celda = document.createTextNode(lectura);
                    }
                } catch (e) {

                    if (e instanceof TypeError) {

                    }
                }

                columna.appendChild(celda);
                fila.appendChild(columna);
            }
        }
        tblBody.appendChild(fila);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
}
function read(moneda1, moneda2) {
    var url = "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=" + moneda1 + "&to_symbol=" + moneda2 + "&interval=5min&apikey=Y47LUWHBZVHYZWEG";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = lista.split("\n");
    if (lista[1].startsWith('    "Information"')) {
        var exe = new TypeError('Hello', "someFile.js", 10);
        alert("entro");
        throw exe;
    } else {
        var value = lista[15];
        value = value.split(":");
        value = value[1];
        var bal = value.substr(2, value.length - 3);
        bal = parseFloat(bal);
        return bal;
    }
}