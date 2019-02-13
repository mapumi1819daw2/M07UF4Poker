$(function(){



    /* Crida inicial */

    $("#jugar").on("click", function(){
      var nom = $("#nom").val();
      var adr = "http://localhost:3000/iniciarjoc/"+nom;
      
     /*  $.get(url, function(data, status){
              alert(JSON.parse(data));
      }); */

      $.ajax({ 
        type: "GET",
        dataType: "json",
        url: adr,
        
        success: function(data){        
          alert(data);
        },
        async: false,
     });

     
    

  });
});