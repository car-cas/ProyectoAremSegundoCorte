/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getCambioMoneda()
{
    var lista = getvalues();
    var tasa1,tasa2;
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
    var calculo;
    if (flag) {
        calculo = tasa2 * numero.value;
    } else {
        calculo = ((1 / tasa1) * tasa2) * numero.value;
    }
    document.getElementById("cambio").value = bal;
}

function getResponse() {

    var despliegue = document.getElementById("despliegue3").value;
    if (!exists(despliegue)) {
        var lista = getList();
        var tabla = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");
        for (var k in lista) {
            var fila = document.createElement("tr");
            for (var j = 0; j < 2; j++) {
                if (k !== despliegue) {
                    var columna = document.createElement("td");
                    var celda;
                    try {
                        if (j == 0) {
                            celda = document.createTextNode(k);
                        } else {
                            celda = document.createTextNode(read(k, despliegue, lista));
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
    }
}
function exists(despliegue) {
    var temp = document.getElementById("tabla");
    if (temp.getElementsByTagName("tbody").length !== 0) {
        var lista = getList();
        var tblBody = document.createElement("tbody");
        for (var moneda in despliegue) {
            var fila = document.createElement("tr");
            for (var j = 0; j < 2; j++) {
                if (k !== despliegue) {
                    var columna = document.createElement("td");
                    var celda;
                    try {
                        if (j == 0) {
                            celda = document.createTextNode(moneda);
                        } else {
                            celda = document.createTextNode(read(moneda, despliegue, lista));
                        }
                    } catch (e) {

                    }

                    columna.appendChild(celda);
                    fila.appendChild(columna);
                }
            }
            tblBody.appendChild(fila);


        }
        var tabla = document.getElementById("tabla");
        var body = tabla.getElementsByTagName("tbody")[0];
        body.parentNode.replaceChild(tblBody, body);
    }
    return (temp.getElementsByTagName("tbody").length !== 0);
}


function read(moneda, moneda2, lista) {
    var res;
    if (moneda.value === '"USD"') {
        res = parseFloat(lista[moneda2]);
    } else {
        var cal;
        cal = 1 / parseFloat(lista[moneda]);
        res = cal * parseFloat(lista[moneda2]);
    }
    return res;
}