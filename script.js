/* Allow cross origin */


var tauler = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",

];


var rival = [
  "r1",
  "r2",
];


var propies = [
  "m1",
  "m2"
];


var n = "";



$(function () {


  function mostrarFitxes(data){

    var id = "";

    var cont = 1 * 1;

    console.log("MostraFitxes");

     function myFunction(value, index, array) {



      if (value.nom == n) {
       console.log("fitxes "+value.nom);

        /* Recorrem l'array de cartes */
       for (var i = 0; i < 3; i++) {


          console.log(value.fitxes[i]);
          

          for (var x = 0; x < 2; x++) {
          
              id = "#f" + cont++;
              
              var fitxa = value.fitxes[i][x];
              console.log(" fitxa JO" + value.fitxes[i][x]);
              console.log("ID JO " + id);

              $(id).text(fitxa);
            
          }
        }

      }

    }


    data.jugadors.forEach(myFunction);

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


  function mostraTauler(data) {

    /* Ocultem elements */
    $("#nom").attr("hidden", true);
    $("#jugar").attr("hidden", true);

    $("#jo").attr("hidden", false);


    n = $("#jo").text();


    /* Mostrem tauler i cartes */


    $("#tauler").attr("hidden", false);
    $("#cartesRival").attr("hidden", false);
    $("#cartesPropies").attr("hidden", false);
    $("#fitxes").attr("hidden", false);




    console.log(data);

    function myFunction(value, index, array) {

      if (value.nom != n) {
        $("#nomRival").text(value.nom);
      }
      else {
        $("#jo").text(value.nom);
      }
    }

    data.jugadors.forEach(myFunction);



    var tamany = data.jugadors;

    var carta = "";

    /* Mostrem les cartes al taulell */

    /*    alert(typeof(data.tauler[2][1])); */

    var cont = 1;

    for (var i = 0; i < 5; i++) {



      if (data.tauler[i] == undefined) continue;

      /* console.log("Tauler "+data.tauler[i]); */

      var t = data.tauler[i][1].length;

      for (var x = 0; x < t; x++) {
        /* console.log( "carta "+data.tauler[i][1][x]); */



        /* Verifiquem que no es un espai null */
        if (data.tauler[i][1][x] != undefined) {
          /* console.log(data.tauler[i][1][x]); */

          /* Id de l'element on el mostrarem */
          id = "#c" + cont++;
          console.log("id " + id);

          var baralla = data.tauler[i][0];

          var carta = assignaBaralla(baralla);



          carta += data.tauler[i][1][x];

          console.log("baralla " + baralla);
          console.log(" Carta " + data.tauler[i][1][x]);

          $(id).text(carta);

        }
      }


    }

  }



  function mostrarCartesPropies(data) {

    var id = "";

    var cont = 1 * 1;



    function myFunction(value, index, array) {



      if (value.nom == n) {
        $("#jo").text(value.nom);

        /* Recorrem l'array de cartes */
        for (var i = 0; i < 4; i++) {

          var t = value.cartes[i][1].length;

          for (var x = 0; x < t; x++) {
            if (value.cartes[i][1][x] != undefined) {

              id = "#m" + cont++;

              var baralla = value.cartes[i][0];

              var carta = assignaBaralla(baralla);

              console.log("JO carta " + carta);

              carta += value.cartes[i][1][x];

              console.log("baralla JO" + baralla);
              console.log(" Carta JO" + value.cartes[i][1][x]);
              console.log("ID JO " + id);

              $(id).text(carta);
            }
          }
        }




      }

    }

    data.jugadors.forEach(myFunction);


  }


  /* Crida inicial */

  $("#jugar").on("click", function () {

    var nom = $("#nom").val();

    /* Guardem el nostree nom */
    $("#jo").append(nom);
    var adr = "http://localhost:3000/iniciarjoc/" + nom;

    $("#id").attr("class", nom);

    $.ajax({
      type: "GET",
      dataType: "json",
      url: adr,
      async: true,
      crossDomain: true,
      success: function (data) {
        /* cridaAjaxMostraRival("http://localhost:3000/mostraRival"); */
        console.log("Tauler :\n");
        console.log(data.tauler);



        mostraTauler(data);
        mostrarCartesPropies(data);
        mostrarFitxes(data);

        /* var pageName = "tauler.html";
        document.location.href = pageName; */
        /*  $("a").append(data.nom); */
      },
      error: function (xhr, status, error) {
        console.log("status: " + status + "\nError " + error);
      },
    });


  });

});