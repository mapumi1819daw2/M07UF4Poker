$(function () {

    var apostes = [];

    /* Seleccionem una carta o fitxa */
    $("span").on("click", function () {
        var id = $(this).attr("id");
        alert(id);
    });


    /* Click apostar */
    $("#apostar").on("click", function () {
        if (apostes.length == 0) {
            alert("Has de seleccionar alguna fitxa");
        }

        else {

        }
    });

    $("#tirar").on("click", function () {

    });

});