$( function() {
    $( "#checkIn" ).datepicker();
    $( "#checkOut" ).datepicker();
    $('.level-slider').slick({
        dots: true, infinite : true,
        slidesToShow: 2, slidesToScroll: 1,
        arrows: false, speed: 1000,
        autoplay: true, autoplaySpeed: 20000,
        responsive: [{breakpoint :768, settings: {slidesToShow: 1, slidesToScroll: 1,}} ]
    });
    const videoToggle = () => {
        video = $('.level-video').get(0);
        const playBtn = $('.video-control-play');
        const pauseBtn = $('.video-control-pause');
        if(video.paused){
            video.play();
            playBtn.hide();
            pauseBtn.show();

        }else{
            video.pause();
            playBtn.show();
            pauseBtn.hide();
        }
    }

    $('.video-control-play').click(function(){videoToggle();})

    $('.video-control-pause').click(function(){videoToggle();})
});