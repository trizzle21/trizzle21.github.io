$(document).ready(function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#initial").hide();
        $("#hidden").show("slow");
        $("#footer").show("slow");
    } else {
    $("#hidden").hide();
    $("#footer").hide();
    $("#hello").mouseenter(function(){ 
        $("#initial").hide();
        $("#hidden").show("slow");
        $("#footer").show("slow");
    });
    };
});

$(document).ready(function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $("#information").css("height", "1000px" )  ;
        
    }
});