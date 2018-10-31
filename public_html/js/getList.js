/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getList()
{
    getapi();
    var menu = document.getElementById("moneda1");
    var menu2 = document.getElementById("moneda2");
    var menu3 = document.getElementById("moneda3");
    var url = "https://openexchangerates.org/api/latest.json?app_id=5a2f8324b0c64f47b759a8686685b9c1"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = lista.split("\n");
    lista = lista.slice(6, lista.length - 2);
    var i;
    for (i = 0; i < lista.length; i++) {
        var temp = lista[i].split(":");
        menu.options[i] = new Option(temp[0]);
        menu2.options[i] = new Option(temp[0]);
        menu3.options[i] = new Option(temp[0]);
    }
    return lista;
}
function getvalues()
{
    var menu = document.getElementById("moneda1");
    var menu2 = document.getElementById("moneda2");
    var menu3 = document.getElementById("moneda3");
    var url = "https://openexchangerates.org/api/latest.json?app_id=5a2f8324b0c64f47b759a8686685b9c1"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = lista.split("\n");
    lista = lista.slice(6, lista.length - 2);
    var i;
    for (i = 0; i < lista.length; i++) {
        var temp = lista[i].split(":");
        lista[i] = temp;
    }
    return lista;
}

