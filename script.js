/* Allow cross origin */

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
   


    var tamany = partida.jugadors;

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
          alert(status);
        },
     });  
    

  });

});