$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:false,
        autoWidth:false,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            601:{
                items:2
            },
            801:{
                items:2
            },
            1001:{
                items:3
            },
            1300:{
                items:4
            },
            1500:{
                items:4
            }
        }
    })

});