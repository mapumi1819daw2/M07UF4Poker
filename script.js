/* Allow cross origin */

$(function(){



    /* Crida inicial */

    $("#jugar").on("click", function(){
      
      var nom = $("#nom").val();
      var adr = "http://localhost:3000/iniciarjoc/"+nom;
      
    $.ajax({ 
        type: "GET",
        dataType: "json",
        url: adr,
        async: false,
        crossDomain: true,
        success: function(data){        
          alert(data.nom);
        },
        error: function (xhr,status,error){
          alert(status);
        }
     });  
    

  });

});