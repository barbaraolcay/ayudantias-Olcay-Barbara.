$(document).ready(function(){
    var zonas = $(".tama");
    zonas.mouseenter(function(){
        $(this).css("background-color", "coral")
    });

    $("#click").click(function(){
        $("#imagenes").toggle();
    });

    $("#cambiar").click(function(){
        $("#titulo").text("Lugares de Chile: los mejores paisajes de todos los tiempos");
    });
    
});