/* Allow cross origin */


$(function(){



  function mostrarPantallaJoc(){
    
    var pageName = "tauler.html";
    document.location.href = pageName;
    
   
  }

    /* Crida inicial */


    alert(info.nom);
    

    $("#jugar").on("click", function(){
      
      info.nom = $("#nom").val();
      var adr = "http://localhost:3000/iniciarjoc/"+nom;

    alert("aaa "+info.nom);
      
    $.ajax({ 
        type: "GET",
        dataType: "json",
        url: adr,
        async: false,
        crossDomain: true,
        success: function(data){        
          /* console.log(data); */
          console.log(data.tauler);

          var pageName = "tauler.html";
         
         
         /*  mostrarPantallaJoc(); */
         
         /*  $("a").append(data.nom); */
        },
        error: function (xhr,status,error){
          alert(status);
        },
     });  
    

  });

});