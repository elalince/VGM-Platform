
export function showNav() {

    const navbarBtn = document.querySelector( '.navbar-btn');
    const navbarList = document.querySelector( '.navbar');
    const navbarLink = document.querySelectorAll( '.navbar__item');

    $(navbarBtn).on('click', function() {
        $(navbarBtn).toggleClass('navbar-btn_close')
        $(navbarList).toggleClass('navbar_open')
    });
    $(navbarLink).on('click', function() {
        $(navbarBtn).removeClass('navbar-btn_close')
        $(navbarList).removeClass('navbar_open')
    });
}
export function scrollTo () {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}


export function vendorsSlider() {
    const slider = new Swiper('.providers-slider', {
        direction: 'horizontal',
        slidesPerView: '1',
        slidesToScroll: 1,
        loop: true,
        simulateTouch: true,
        autoplay: false,
        speed: 3000,
        allowTouchMove: true,
        spaceBetween: 15,
        pagination: {
            el: '.providers-slider__pagination',
            clickable: true,
        },
        breakpoints: {
           992: {
               slidesPerView: '4',
               spaceBetween: 30,
            },
            768: {
                slidesPerView: '3',
                spaceBetween: 30,
            }
        }
    });
}
export function storiesSlider() {
    const slider = new Swiper('.stories-slider', {
        direction: 'horizontal',
        effect: 'fade',
        slidesPerView: '1',
        slidesToScroll: 1,
        loop: true,
        simulateTouch: true,
        autoplay: false,
        speed: 300,
        allowTouchMove: true,
        pagination: {
            el: '.stories-slider__pagination',
            clickable: true,
        },
    });
}

export function popupForm() {

    const demoPopupBtns = document.querySelectorAll( '.popup-btn_request');
    const orderPopupBtns = document.querySelectorAll( '.popup-btn_order');
    const popup = document.querySelector( '.popup');
    const popupClose = document.querySelector( '.popup__close-link');
    const body = document.querySelector( 'body');

    for (let demoPopupBtn of demoPopupBtns) {
        $(demoPopupBtn).on('click', function() {
            $(popup).addClass('open popup_demo')
            $(body).addClass('noscroll')
        });
    }
    for (let orderPopupBtn of orderPopupBtns) {
        $(orderPopupBtn).on('click', function() {
            $(popup).addClass('open popup_order')
            $(body).addClass('noscroll')
        });
    }

    $(popupClose).on('click', function() {
        $(popup).removeClass('open popup_demo popup_order')
        $(body).removeClass('noscroll')
    });

}

export function progressBar() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $(".to-top").removeClass("hidden");
        } else {
            $(".to-top").addClass("hidden");
        }
    });
    $(".to-top").click(function () {
        $("body,html").animate({ scrollTop: 0 });
        document.querySelector("._mob-header-js").classList.remove("_hide");
    });

    progressBarNew()

    function progressBarNew() {
        const circle = document.getElementById("bar");
        const circle2 = document.querySelector("#svg circle");
        const progressBar = document.querySelector(".progress-bar");

        let progressBarWidth = +window.getComputedStyle(progressBar, null).width.replace("px", "");
        let r = progressBarWidth / 2;
        let c = Math.PI * (r * 2);

        circle.style.strokeDasharray = `${c}`;

        function progressBarMove() {
            let scroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = Math.round((scroll / height) * 100);
            if (isNaN(scrolled)) {
                scrolled = 100;
            } else {

                if (scrolled < 0) {
                    scrolled = 0;
                }
                if (scrolled > 100) {
                    scrolled = 100;
                }

                let pct = ((100 - scrolled) / 100) * c;

                circle.style.strokeDashoffset = `${pct}`;
                progressBar.setAttribute("data-pct", scrolled);
            }
        }

        window.addEventListener("scroll", progressBarMove);
    }
}


