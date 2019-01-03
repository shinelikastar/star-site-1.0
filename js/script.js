$(document).ready(function(){
    $('#name').hover(function(){
        $(this).toggleClass('highlight');
    });

    $('#dragon-on1').hover(function(){
        $(this).toggleClass('highlight');
    });


    // $(function() {
    //     $('#name').hover(function() { 
    //         $('#appear').fadeIn(); 
    //     }, function() { 
    //         $('#appear').fadeOut(); 
    //     });
    // });

    $('#name').draggable();
        var bounce = $('#bounce');
        runIt();
        function runIt(){
            bounce.animate({top:'+=10'}, 750);
            bounce.animate({top:'-=10'}, 750, runIt);
        }   
});