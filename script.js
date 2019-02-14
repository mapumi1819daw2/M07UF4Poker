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



$(function(){


  function mostraTauler(data){

    /* Ocultem elements */
    $("#nom").attr("hidden", true);
    $("#jugar").attr("hidden", true);

    $("#jo").attr("hidden", false);


    var n = $("#jo").text();
   

    /* Mostrem tauler i cartes */
    
   
    $("#tauler").attr("hidden", false);
    $("#cartesRival").attr("hidden", false);
    $("#cartesPropies").attr("hidden", false);
   


    var tamany = data.jugadors;

    var carta = "";

    /* Mostrem les cartes al taulell */

 /*    alert(typeof(data.tauler[2][1])); */

 var cont = 1;

    for(var i =0; i< 5; i++){

      

      if(data.tauler[i] == undefined) continue;

      /* console.log("Tauler "+data.tauler[i]); */

        var t = data.tauler[i][1].length;

       /*  console.log("tamany "+t);
 */
        

          for(var x= 0; x< t; x++){
            /* console.log( "carta "+data.tauler[i][1][x]); */

           

            /* Verifiquem que no es un espai null */
              if(data.tauler[i][1][x]!= undefined){
                /* console.log(data.tauler[i][1][x]); */

                /* Id de l'element on el mostrarem */
                id = "#c"+cont++;
                console.log("id "+ id);

                var baralla = data.tauler[i][0];

                /* Seleccionem la baralla de la carta */
                switch(baralla){
                  case 0:
                    carta = "♥";
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

                carta += data.tauler[i][1][x];

                console.log("baralla "+ baralla);
                console.log(" Carta "+data.tauler[i][1][x]);
              
                $(id).text(carta);

              }
          }
        
      
      

      
      
        
    }


    for(var i=0; i<tamany; i++){

      
    }



    



  }
    /* Crida inicial */

    $("#jugar").on("click", function(){
      
      var nom = $("#nom").val();

      /* Guardem el nostree nom */
      $("#jo").append(nom);
      var adr = "http://localhost:3000/iniciarjoc/"+nom;

      $("#id").attr("class", nom);
      
    $.ajax({ 
        type: "GET",
        dataType: "json",
        url: adr,
        async: false,
        crossDomain: true,
        success: function(data){        
          /* console.log(data); */
          console.log(data.tauler);


          mostraTauler(data);

          /* var pageName = "tauler.html";
          document.location.href = pageName; */
         /*  $("a").append(data.nom); */
        },
        error: function (xhr,status,error){
          console.log(status);
        },
     });  
    

  });

});