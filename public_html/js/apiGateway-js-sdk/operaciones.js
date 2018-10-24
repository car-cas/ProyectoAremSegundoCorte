/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getResponse() {
    var apigClient = apigClientFactory.newClient();
    var params = {

    };
    var body = {

    };
    var additionalParams = {
        headers: {

        },
        queryParams: {

        }
    };
    apigClient.rootPost(params, body, additionalParams)
            .then(function (result) {
                console.log(result);
            }).catch(function (result) {
        console.log("ERROR");   
    });
}
