/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getVarsUrl()
{
    var numero = document.getElementById("moneda");
    var moneda1 = document.getElementById("despliegue");
    var moneda2 = document.getElementById("despliegue2");
    url = "https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=" + moneda1.value + "&to_symbol=" + moneda2.value + "&interval=5min&apikey=Q8EQ7DDSA3ZMYPYM";
    var arrUrl = url.split("&");
    var urlObj = {};
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);

    var lista = xmlHttp.responseText;
    lista = lista.split("\n");
    var value = lista[15];
    value = value.split(":");
    value = value[1];

    var bal = value.substr(2, value.length - 3);
    bal = parseFloat(bal * (parseInt(numero.value)));
    document.getElementById("cambio").value = bal;
    return value;
}
