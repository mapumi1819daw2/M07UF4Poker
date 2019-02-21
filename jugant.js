$(function () {

    var apostes = [];
    var idApostes = [];

    var torn = 1;

    /* Funció que mostra les cartes al tauler
    data : partida */
    function mostraTauler(data) {


        /* Mostrem les etiquetes HTML  del div Tauler ocultes fins ara */
        switch (torn) {
            case 2:
                $("#c4").attr("hidden", false);

                break;

            case 3:
                $("#c5").attr("hidden", false);
                $("#estat").text("Partida Finalitzada!");
                $("#apostar").attr("hidden", true);
                break;
        }

        

        var carta = "";

        /* Mostrem les cartes al taulell */

        var cont = 1 * 1;



        for (var i = 0; i < 5; i++) {


            if (data[i] == undefined) continue;

            /* console.log("Tauler "+data.tauler[i]); */

            var t = data[i][1].length;

            for (var x = 0; x < t; x++) {
                /* console.log( "carta "+data.tauler[i][1][x]); */


                /* Verifiquem que no es un espai null */
                if (data[i][1][x] != undefined) {
                    /* console.log(data.tauler[i][1][x]); */


                    /* Id de l'element on el mostrarem */
                    id = "#c" + cont++;
                    console.log("id " + id);

                    var baralla = data[i][0];

                    var carta = assignaBaralla(baralla);



                    carta += data[i][1][x];

                    console.log("baralla " + baralla);
                    console.log(" Carta " + data[i][1][x]);

                    $(id).text(carta);

                }
            }


        }

    }

    function assignaBaralla(baralla) {

        /* Seleccionem la baralla de la carta */

        var carta = "";
        switch (baralla) {
            case 0:
                carta = "♥"; //&hearts;  ♥
                break;
            case 1:
                carta = "♦";
                break;
            case 2:
                carta = "♠";
                break;
            default:
                carta = "♣";
                break;

        }

        return carta;

    }

    function demanarCarta(dir) {

        $.ajax({
            type: "GET",
            dataType: "json",
            url: dir,
            async: false,
            crossDomain: true,
            success: function (data) {

                console.log(data);

                mostraTauler(data);


            },
            error: function (xhr, status, error) {
                console.log("status: " + status + "\nError " + error);
            },
        });

    }

    function enviaAposta(aposta) {

        var adr = "http://localhost:3000/moureJugador/aposta";

        $.ajax({
            type: "POST",
            dataType: "json",
            data: aposta,
            url: adr,
            async: false,
            crossDomain: true,
            success: function (data) {

                /* Esborrem del 'array les fitxes seleccionades per apostar
                 */
                apostes.forEach(myFunction);

                function myFunction(value, index, array) {

                    delete apostes[index];
                }
                console.log(data);

                /* Si rebem okei del servidor demanen una carta més */


                if (data.valor == true) {
                    console.log("Aposta feta");
                    torn++;
                    console.log(torn);
                    var addr = "http://localhost:3000/obtenirCarta/" + torn;
                    demanarCarta(addr);
                }


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
        } else {

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
        } else {

            /* NO GESTIONAT ERRORS DE CLICS EN APOSTAR */
            var apostat = 0 * 1;

            /* Calculem l'aposta */

            apostes.forEach(myFunction);

            function myFunction(value, index, array) {
                apostat += value * 1;

            }



            var aposta = {
                nom: $("#jo").text(),
                quantitat: apostes,
            };



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