$('.navbar-toggler').click(function(){
    $('.navbar-collapse').show();
    $('.navbar-toggler').hide();
});
$('.close').click(function(){
    $('.navbar-collapse').hide();
    $('.navbar-toggler').show();
});

    $(window).scroll(function(){
        var topPos = $(this).scrollTop();
        if(window.innerWidth >= 1000){
        $('.full').hide();
        $('.min').show();
        $('.navbar-nav').addClass('mr');
        $('.btn-scroll').show();
       
        if (topPos < 100) {
            $('.full').show();
            $('.min').hide();
            $('.btn-scroll').hide();
            $('.navbar-nav').removeClass('mr');
        }
    }
            var curent = 0;
    for(var i=0; i <= 270; i= i + 10) { 
        if(window.innerWidth >= 800){
        if(topPos > i) {
            $('.promo').css('backgroundPosition', '0px ' + curent + 'px');
            }
        curent = curent - 20;
        } else {
             if(topPos > i) {
            $('.promo').css('backgroundPosition', '0px ' + curent + 'px');
            }
        curent = curent - 5;
        }
    }
        });
        var title = document.querySelectorAll('.title-new');
        title.forEach(function(item){
            console.log(item.length);
            if(item.innerHTML.length > 95) {
                var curent = item.innerHTML;
                
                item.innerHTML = curent.substr(0, 93) + ' ...';
            }
        });
    


