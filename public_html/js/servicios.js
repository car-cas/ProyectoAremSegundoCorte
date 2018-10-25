/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function requestTasaMonida($) {
    function requestTasa() {
        endpoint = 'live'
        access_key = 'e3f4d12f6fc5e01bffe459d94ff544b4';

        from = 'EUR';
        to = 'GBP';
        amount = '10';
        
        $.ajax({
            method: 'POST',
            url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
            dataType: 'jsonp',
            success: function (json) {

                // access the conversion result in json.result
                alert(json.result);

            }
        });
    }
}(jQuerry));
