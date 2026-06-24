$(document).ready(function(){

    $('input[name="username"]').focus()

    $('input').keypress(function(e){
        if(e && e.keyCode == 13) {
            $('input[name="BtnLogin"]').trigger('click')
         }

         console.log('submitted');
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        autoplay:true,
        autoplaySpeed: 700,
        autoplayHoverPause:true
    })

    $('.next').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel', [500]);
    })

    $('.prev').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel', [500]);
    })
})