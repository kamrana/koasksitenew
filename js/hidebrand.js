
$( document ).ready(function() {
                    
    $(document).scroll(function(){
                       
                    var n = $(window).scrollTop();
                    if (n > 50) {
                        $('.navbar-brand').show();
                    } else {
                        $('.navbar-brand').hide();
                    }
   });
});
