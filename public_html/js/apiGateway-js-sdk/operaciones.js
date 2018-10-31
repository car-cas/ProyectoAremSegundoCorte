/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getapi() {
    var apigClient = apigClientFactory.newClient();
    var params = {
    };
    var body = {
    };
    var additionalParams = {
        headers: {
            "Accept": "*/*",
            "Authorizacion": "",
            "content-type": "application/json; charset=UTF-8"
        },
        queryParams: {
        }
    };
    apigClient.jsonratesGet(params,body,additionalParams)
    .then(function(result){
        console.log(result);
    }).catch( function(result){
        console.log("error");
    });
}


