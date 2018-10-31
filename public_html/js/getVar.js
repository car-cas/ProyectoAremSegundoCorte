/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getVar()
{
    var numero = document.getElementById("moneda");
    var moneda1 = document.getElementById("despliegue");
    var moneda2 = document.getElementById("despliegue2");
    var lista = getvalues();
    var tasa1;
    var tasa2;
    var flag = false;
    if (moneda1.value === '"USD"') {
        flag = true;
    }
    for (var i = 0; i < lista.length - 1; i++) {
        var x = lista[i][0].toString();
        x = x.substring(4, x.length);
        if (x === moneda1.value) {

            var temp = lista[i][1];
            temp = temp.toString().substring(0, temp.length - 2);
            tasa1 = parseFloat(lista[i][1]);
        }
        if (x === moneda2.value) {

            var temp = lista[i][1];
            temp = temp.toString().substring(0, temp.length - 2);

            tasa2 = parseFloat(lista[i][1]);
        }
    }
    var bal;
    if (flag) {
        bal = tasa2 * numero.value;
    } else {
        temp=(1/tasa1)*tasa2;
        bal = temp*numero.value;
    }
    document.getElementById("cambio").value = bal;
}
