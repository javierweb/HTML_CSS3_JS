
$(window).scroll(function()
        {
            if ($(this).scrollTop() > 2){
                 $('#menu').addClass("fixed").fadeIn();
                 $('#container').addClass("margen").fadeIn();
                
            }
            else {
                $('#menu').removeClass("fixed");
                $('#container').removeClass("margen");
                
            }
        });

$('a.smooth').live('click', function(e) {  
e.preventDefault();
var link = $(this);  
var anchor  = link.attr('href');  
$('html, body').stop().animate({  
    scrollTop: $(anchor).offset().top - ($('#menu').height()+21)
}, 1500, 'easeOutBack');  
});  
