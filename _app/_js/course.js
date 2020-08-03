//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend popup.js

$(document).ready(function () {
    /* Якорь */
    $("a[href='#course-plan']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });

    $(function () {
        // var img1 = $('.main-img-1');
        // window.addEventListener('mousemove', function (e) {
        //     let x = e.clientX / window.innerWidth;
        //     let y = e.clientY / window.innerHeight;
        //     img1.css('transform', 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)');
        // });
        var img2 = $('.main-img-2');
        window.addEventListener('mousemove', function (e) {
            var x = e.clientX / window.innerWidth;
            var y = e.clientY / window.innerHeight;
            img2.css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');
        });
        var img3 = $('.main-img-3');
        window.addEventListener('mousemove', function (e) {
            var x = e.clientX / window.innerWidth;
            var y = e.clientY / window.innerHeight;
            img3.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        });
    });

    $(window).scroll(function (e) {
        var aa = $(this).scrollTop() * -1;
        $('.name-title-img, .divider-img').animate({ left: aa + 'px' }, 10);
    });

    /* Видео */
    $(".video-wrapper-rev img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&modestbranding=1&mute=1&showinfo=0&rel=0" allowfullscreen></iframe>')
    });
    $(function () {
        $('#video-revs .owl-prev, #video-revs .owl-next').click(function () {
            $('.video-wrapper-rev iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            });
            $(".video-wrapper-rev img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?modestbrandig=1&mute=1&showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>');
            });
        });
    })
    $('#video-revs, #text-revs').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        nav: true,
        navText: ["←", "→"],
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            360: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
});
    /*Конец документа*/
