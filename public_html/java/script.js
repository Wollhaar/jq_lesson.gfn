$(document).ready(function () {
    $('#fadeout').click(function () {
        $('#box1').fadeOut(3000);
        $('#box2').fadeOut(3000, 'linear');
    });
    $('#fadein').click(function () {
        $('#box1').fadeIn(5000);
        $('#box2').fadeIn(5000, 'linear');
    });


    $('#hide').click(function () {
        
        $('#box3').hide();
    });
    $('#show').click(function () {
        $('#box3').show();
    });

        $('#start').click(function () {
        
        $('#box6').fadeOut('normal', function (){
            $('#box5').fadeOut('normal', function (){
               $('#box4').fadeOut(); 
            });
        });
    });
    $('#place').click(function () {
        $('#box6').fadeIn('normal', function (){
            $('#box5').fadeIn('normal', function (){
                $('#box4').fadeIn();
            });
        });
    });
    $('#slideup').click(function () {
        $('#box7, #box8').slideUp();
    });
    $('#slidedown').click(function () {
        $('#box7, #box8').slideDown();
        
    });
    
    $('#box9').on('mouseover', function () {
        $('#box9').addClass('color');
    });
    $('#box9').on('mouseout', function () {
        $('#box9').removeClass('color');
        
    });
    $('#box5').mouseover(function () {
        /*
            $(this).animate({left: 0, top: 0}, 1000, function (){
                $(this).animate({left: 100, top: -100}, 1000, function (){
                    $(this).animate({left: 200, top: 0}, 1000);
                });
            });
        */
       $(this).animate({left: 0, top: 0}).animate({left: 200, top: -100}).animate({left: 400, top: 0})
               .animate({left: 200, top: -100}).animate({left: 0, top: 0});
    });
    
    
    $('#race').click(function () {
        $('#box11').animate({left: 600}, 2000);
        $('#box12').animate({left: 600}, 2000, 'linear');
    });
    $('#-').click(function () {
        $('#box11').attr('style', '');
        $('#box12').attr('style', '');
    });
});
