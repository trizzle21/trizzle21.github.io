$(document).ready(function(){
    $("#hidden").hide();
    $("#footer").hide();
    $("#hello").mouseenter(function(){ 
        $("#initial").hide();
        $("#hidden").show("slow");
        $("#footer").show("slow");
    });
});