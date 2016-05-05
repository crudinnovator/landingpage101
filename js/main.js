
$(document).ready(function () {

    $('#features .blue-circle').waypoint(function () {
            $(this.element).addClass('animated fadeInUp')
        },{
            offset:'300'
        }
    );

    $('#about .blue-circle').waypoint(function () {
            $('#about .blue-circle').addClass('animated fadeInUp')
        },{
            offset:'300'
        }
    );

    $('#download div.phone img').waypoint(function () {
        $(this.element).addClass('animated fadeInRight')
    },{
        offset:'300'
    });

    $('#download .platforms > div').waypoint(function () {
        $(this.element).addClass('animated fadeInUp')
    },{
        offset:'300'
    });

    $('.feature-image img').waypoint(function () {
        $('.feature-image').addClass('animated rubberBand')
    },{
            offset:'80'
        }
    );
});

smoothScroll.init({
    speed:700,
    easing:'easeInOutQuad',
    updateURL:false,
    offset:0
});
