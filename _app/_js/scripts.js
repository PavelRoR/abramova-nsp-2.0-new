//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
/*@prepros-prepend jquery.event.frame.js*/
/*@prepros-prepend jquery.parallax.min.js*/
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend popup.js

$(document).ready(function () {
    $(function () {
        var img1 = $('.main-img-1');
        window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            img1.css('transform', 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)');
        });
        var img2 = $('.main-img-2');
        window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            img2.css('transform', 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)');
        });
        var img3 = $('.main-img-3');
        window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            img3.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        });
    });
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this),
            switch_title = $('.switch-title'),
            switch_text = $('.switch-text'),
            currDate = new Date(),
            startDate = new Array(
                new Date("June 24 2020 18:30 UTC+3"),
                new Date("June 25 2020 18:30 UTC+3"),
                new Date("June 26 2020 18:30 UTC+3")),
            endDate = new Array(
                new Date("June 24 2020 21:00 UTC+3"),
                new Date("June 25 2020 21:00 UTC+3"),
                new Date("June 26 2020 21:00 UTC+3")),
            rooms = new Array(
                'https://pruffme.com/landing/u8937/tmp1592562341',
                'https://pruffme.com/landing/u8937/tmp1592562341',
                'https://pruffme.com/landing/u8937/tmp1592562341');

        function roomSwitch() {
            $('.form-main').addClass('switch-form');
            switch_title.html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР?<br>ЖДЕМ ТОЛЬКО ВАС!').css('lineHeight', '1.2');
            switch_text.removeClass('hide').html('<span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span>');
            button.text('Зайти!');
        }
        if ((currDate > startDate[0] && currDate < endDate[0]) || (currDate > startDate[1] && currDate < endDate[1]) || (currDate > startDate[2] && currDate < endDate[2])) {
            roomSwitch();
        }
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                if (currDate > startDate[0] && currDate < endDate[0]) {
                    window.open(rooms[0]);
                }
                if (currDate > startDate[1] && currDate < endDate[1]) {
                    window.open(rooms[1]);
                }
                if (currDate > startDate[2] && currDate < endDate[2]) {
                    window.open(rooms[2]);
                }
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    $('.button-up').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        mainClass: 'mfp-fade'
    });
    // var w_height = $(this).height();
    // var slide_width = $('.name-title-container').width();
    // var slide_left = slide_width / w_height;
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
