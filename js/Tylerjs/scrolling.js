$(document).ready(function(){
    $('section [data-type="background"]').each(function(){
        var $loc = $(this);     
    }); 
    $(window).scroll(function(){
        var vertPos = $loc.data('speed');
        var coor = '50%' + vertPos + 'px';
        $loc.css({ backgroundPosition: coor });
    });
});
