$(function () {

    var apostes = [];
    var idApostes = [];

    function enviaAposta(aposta) {
        
        var adr = "http://localhost:3000/moureJugador/aposta";

        $.ajax({
            type: "POST",
            dataType: "json",
            data: aposta,
            url: adr,
            async: true,
            crossDomain: true,
            success: function (data) {

                console.log(data);
                
   
            },
            error: function (xhr, status, error) {
                console.log("status: " + status + "\nError " + error);
            },
        });
    }


    /* Seleccionem una carta o fitxa */
    $(".clicable").on("click", function () {
        var id = $(this).attr("id");
        console.log("Click: " + id);

        var color = $(this).css('background-color'); // Comprovem el color de fons
        var aposta = $(this).text();

        console.log("color: " + color);
        if (color == "rgba(0, 0, 0, 0)") {
            $(this).css('background-color', "green");
            apostes.push(aposta);
            idApostes.push(id);
            console.log(apostes);
        }
        else {

            /* Esborrem la fitxa deseleccionada */
            var pos = apostes.indexOf(aposta);
            delete apostes[pos];

            $(this).css('background-color', "rgba(0, 0, 0, 0)");
        }

    });


    /* Click apostar */
    $("#apostar").on("click", function () {
        if (apostes.length == 0) {
            alert("Has de seleccionar alguna fitxa");
        }

        else {

            /* NO GESTIONAT ERRORS DE CLICS EN APOSTAR */
            var apostat = 0 * 1;

            /* Calculem l'aposta */

            apostes.forEach(myFunction);

            function myFunction(value, index, array) {
                apostat += value * 1;

            }

            var aposta = {
                nom : $("#jo").text(),
                quantitat : apostat,
            }


            enviaAposta(aposta);


            /* idApostes.forEach(amagaSpan);

            function amagaSpan(value, index, array) {
               
                $(value).attr("hidden", "true");
    
            } */

            console.log("Total aposta: " + apostat);

        }
    });

    $("#tirar").on("click", function () {

    });

});