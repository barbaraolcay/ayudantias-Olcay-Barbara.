$(document).ready(function(){
    var zonas = $(".tama");
    zonas.mouseenter(function(){
        $(this).css("background-color", "coral")
    });
    $("#click").click(function(){
        $("#imagenes").toggle();
    });

    $("#cambiar").click(function(){
        $("#cambiar").attr("#titulo","OTRO TEXTO");

    });

});