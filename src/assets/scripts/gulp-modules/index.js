const SCREEN_WIDTH = window.screen.width;

/**
 * Блок история фиксация левой части при скролле
 */
let fixedBlock = document.querySelector('.history-block__left');
let fixedBlockWidth = getComputedStyle(fixedBlock).width;
let unfixedBlock = document.querySelector('.history-block__right');
let historyLayout = document.querySelector('.history-block');

function historyBlockFixing() {
    var scroll = historyLayout.getBoundingClientRect();
    if (SCREEN_WIDTH < 769) return;
    if (scroll.y < 80) {
        fixedBlock.style.position = 'fixed';
        fixedBlock.style.top = '0';
        fixedBlock.style.width = fixedBlockWidth;
        fixedBlock.style.zIndex = -1;
        fixedBlock.querySelector('.block-title').classList.add('overflowed');
        // unfixedBlock.style.marginLeft = fixedBlockWidth;
    } else {
        fixedBlock.style.position = 'static';
        unfixedBlock.style.marginLeft = '';
        fixedBlock.querySelector('.block-title').classList.remove('overflowed');

    }
}
window.addEventListener("scroll", function(event) {
    historyBlockFixing();
    putSmoke();
    firstScreenLetterEffect();
    // screen3ImageEffect();
    screen4LettersDecor();
    screen6LettersDecor();
    screen7LettersDecor();
    screen8LettersDecor();


    console.log(document.querySelector('.screen2').getBoundingClientRect());



});

let screen3GlitchOnFocus = () => {
    let element = document.querySelector('.screen3__image');
    element.addEventListener('mouseenter', function(evt) {
        evt.target.classList.remove('focused');
    });
    element.addEventListener('mouseout', function(evt) {
        evt.target.classList.add('focused');
    });
};
screen3GlitchOnFocus();
let screen3ImageEffect = function() {
    let parent = document.querySelector('.screen3'),
        element = document.querySelector('.screen3__image');
    if (parent.getBoundingClientRect().bottom * 0.75 < document.documentElement.clientHeight) {
        element.classList.add('focused');
    } else {
        element.classList.remove('focused');
    }
    if (parent.getBoundingClientRect().bottom < (document.documentElement.clientHeight * 0.3)) {
        element.classList.remove('focused');
    }
}
let screen4LettersDecor = function() {
    if (SCREEN_WIDTH < 768) {
        screen4LettersDecor = function() {
            return false;
        }
        return false;
    }
    // document.querySelector('.screen4__decor-right').style.transition = `.5s`;
    document.querySelector('.screen4__decor-right').style.top = `-10%`;
    document.querySelector('.screen4__decor-left').style.bottom = `15%`;
    if (document.querySelector('.screen4').getBoundingClientRect().bottom * 0.75 < document.documentElement.clientHeight) {
        document.querySelector('.screen4__decor-right').style.top = `0`;
        document.querySelector('.screen4__decor-left').style.bottom = `0`;
    }
}

let screen6LettersDecor = function() {
    if (SCREEN_WIDTH < 768) {
        screen4LettersDecor = function() {
            return false;
        }
        return false;
    }
    // document.querySelector('.screen4__decor-right').style.transition = `.5s`;
    document.querySelector('.screen6__decor-right').style.top = `-15%`;

    if (document.querySelector('.screen6').getBoundingClientRect().bottom * 0.75 < document.documentElement.clientHeight) {
        document.querySelector('.screen6__decor-right').style.top = `0`;
    }
}

let screen7LettersDecor = function() {
    let parent = document.querySelector('.screen7'),
        element = document.querySelector('.screen7__decor-left');
    if (parent.getBoundingClientRect().bottom * 0.75 < document.documentElement.clientHeight) {
        element.style.top = `17%`;
    } else {
        element.style.top = `10%`;
    }
    if (parent.getBoundingClientRect().bottom < (document.documentElement.clientHeight * 0.3)) {
        element.style.top = `3%`;
    }
}
let screen8LettersDecor = function() {
    if (SCREEN_WIDTH < 768) {
        screen4LettersDecor = function() {
            return false;
        }
        return false;
    }
    // document.querySelector('.screen4__decor-right').style.transition = `.5s`;
    document.querySelector('.screen8__decor').style.top = `-15%`;

    if (document.querySelector('.screen8').getBoundingClientRect().bottom * 0.75 < document.documentElement.clientHeight) {
        document.querySelector('.screen8__decor').style.top = `0`;
    }
}
let firstScreenLetterEffect = function() {
    if (SCREEN_WIDTH < 768) {
        firstScreenLetterEffect = function() {
            return false;
        }
        return false;
    }
    document.querySelector('.main-screen__logo').style.transition = `1s`;
    document.querySelector('.main-screen__logo').style.transform = `translateY(-10%)`;
    if (document.querySelector('.screen2').getBoundingClientRect().bottom * 0.75 < document.documentElement.clientHeight) {
        document.querySelector('.main-screen__logo').style.transform = `translateY(0%)`;

    }
}

/**
 * Слайдер арендаторов
 */
function navigationDecor($navigator, nextSlide, slidesCount) {
    // console.log(slidesCount, nextSlide);

    $navigator.querySelector('.slider-navigation__load-line-active').style.width = (100 / +slidesCount * (+nextSlide + 1)) + '%';
}
$('.screen4__slides-container').on('init', function(event, slick) {
    $('.screen4   .all').html(slick.slideCount);
    $('.screen4   .current').html('1');
    $('.screen4 .slider-navigation__all').html(slick.slideCount);
    // $('.screen4 .slider-navigation__all').html($('.screen4__slides-container img').length / 2 - 1);
    // console.log(slick);
    $('.slick-track')[0].style.position = 'relative';
    if (SCREEN_WIDTH > 481) {

        $('.slick-track')[0].style.left = - +$('.screen4 .slick-slide')[0].style.width.replace(/px/, '') * 0.05 * 2 - 50 + 'px';
    }
});
navigationDecor($('.screen4 .slider-navigation')[0], 1, 100);
let arendaSlider = $('.screen4__slides-container').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '50px',
    cssEase: 'cubic-bezier(0.620, 0.000, 0.805, 0.685)',
    focusOnSelect: true,
    speed: 1000,
    prevArrow: $('.screen4 .arrow.arrow-prev'),
    nextArrow: $('.screen4 .arrow.arrow-next'),
    slide: '.screen4 .slide',
    responsive: [{
            breakpoint: 1720,
            settings: {
                slidesToShow: 0.95,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 480,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]


});
arendaSlider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    $('.screen4  .current').html('' + (nextSlide + 1));
    $('.screen4 .slider-navigation__current').html((nextSlide + 1));
    navigationDecor($('.screen4 .slider-navigation')[0], nextSlide, slick.slideCount);
    // console.log(slick);
});

/**
 * Обводка svg елемента 
 */
function simulatePathDrawing(path, strokeWidth = '3') {
    if (path.done) return;
    // var path = document.querySelector('.squiggle-animated path');
    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
        'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 1.5s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    path.style.strokeWidth = strokeWidth;
    path.style.stroke = '#F7F7F7';
    path.done = true;
}

var chars = $('.squiggle-animated path').on('mouseover', function(e) {
    if (e.target.closest('.squiggle-animated').classList.toString().match(/main-screen/)) {
        simulatePathDrawing(this, 3)
    } else {
        simulatePathDrawing(this)
    }
})


/**
 * Слайдер проектов
 */


let projectSlider = $('.projects-slider-js').on('init', function(event, slick) {
    // console.log(slick);

    $('.screen7   .all').html(slick.slideCount);
    $('.screen7   .current').html('1');
    $('.screen7 .slider-navigation__all').html(slick.slideCount);

    document.querySelector('.screen7').style.setProperty('--full-height', slick.listHeight + 'px');
    document.querySelector('.screen7').style.setProperty('--part-height', (slick.listHeight * 0.65) + 'px');
    document.querySelector('.screen7').style.setProperty('--track-height', (slick.$slideTrack[0].clientHeight) + 'px');


});
navigationDecor($('.screen7 .slider-navigation')[0], 1, 100);
$('.projects-slider-js').slick({
    slidesToShow: 1,
    cssEase: 'ease-in',
    prevArrow: $('.screen7 .arrow.arrow-prev'),
    nextArrow: $('.screen7 .arrow.arrow-next'),
    variableWidth: true,
    infinite: false,
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 480,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
projectSlider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    $('.screen7  .current').html('' + (nextSlide + 1));
    $('.screen7 .slider-navigation__current').html((nextSlide + 1));
    navigationDecor($('.screen7 .slider-navigation')[0], nextSlide, slick.slideCount);
    // console.log(slick);
    // $('.screen7 .slick-current .slide-img')[0].style.height = slick.listHeight * 0.8 + 'px';
});
projectSlider.on('afterChange', (slick, currentSlide) => {
    // console.log('NEXT');

    // $('.projects-slider-js .slick-current')[0].nextSibling.querySelector('.slide-img').style.height = slick.listHeight * 0.8 + 'px';

});

/**smoke */

function putSmoke() {
    var canvas = document.getElementById('smoke');
    if (canvas.played == true) return;
    var ctx = canvas.getContext('2d')
    canvas.width = +getComputedStyle(canvas).width.replace('px', '');
    canvas.height = +getComputedStyle(canvas).height.replace('px', '');
    var party = SmokeMachine(ctx, [255, 255, 255])
    party.start() // start animating
    party.addSmoke(200, canvas.height, 255) // wow we made smoke
    setTimeout(function() {
        party.stop() // stop animating
        party.addSmoke(230, canvas.height, 255)
        party.addSmoke(230, canvas.height, 255)
        for (var i = 0; i < 10; i++) {
            party.step(10) // pretend 10 ms pass and rerender
        }
        // canvas.addEventListener('mouseover', function(evt) {
        party.start();
        // });
        // setTimeout(function() {
        //     party.start()
        // }, 1000)
    }, 500);
    canvas.played = true;
}



/**перенос поля навигации слайдера для планшета и телефона */
if (SCREEN_WIDTH < 769) {
    document.querySelector('.screen4__content').insertAdjacentElement('afterBegin', document.querySelector('.screen4 .slider-navigation'));
    document.querySelector('.screen7__content').insertAdjacentElement('beforeEnd', document.querySelector('.screen7 .slider-arrows'));
}

if (SCREEN_WIDTH < 481) {
    document.querySelector('.screen6__content').insertAdjacentElement('beforeEnd', document.querySelector('.screen6 .developer-link'));
    document.querySelector('footer .row').insertAdjacentElement('afterBegin', document.querySelector('.footer-logo'));

    let historyElements = document.querySelectorAll('.history-block__period');
    historyElements.forEach(element => {
        element.querySelector('.history-block__circle-element').addEventListener('click', (evt) => {
            element.querySelector('.history-block__circle-hover').classList.add('touched-js');
        });
        element.querySelector('.history-block__circle-hover').addEventListener('click', (evt) => {
            evt.stopPropagation();
            element.querySelector('.history-block__circle-hover').classList.remove('touched-js');
        });
    });

    document.body.addEventListener('click', (evt) => {
        if (!evt.target.closest('.history-block__circle-element')) {
            historyElements.forEach(element => {
                element.querySelector('.history-block__circle-hover').classList.remove('touched-js');
            });
        }
    });
    mobileMenuConfig();

}




function mobileMenuConfig() {
    let menuLayout = document.querySelector('.mobile-menu-js'),
        desktopMenuList = document.querySelector('header.header>ul'),
        openButton = document.querySelector('.mobile-menu-button-js'),
        closeButton = menuLayout.querySelector('.close'),
        langBlock = document.querySelector('.lang-block');
    openButton.addEventListener('click', function(evt) { menuLayout.classList.add('visible') });
    closeButton.addEventListener('click', function(evt) { menuLayout.classList.remove('visible') });
    menuLayout.append(desktopMenuList);
    // menuLayout.append(langBlock);
    desktopMenuList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => { menuLayout.classList.remove('visible'); })
    })
};
/**
 * Разделение букв для их анимирования
 */
function letterSeparation(node1, animationName) {
    let delay = node1.dataset.wowDelay || 0;
    delay = delay.toString().replace(/s/, '');
    !animationName ? animationName = 'fadeIn' : null;
    let string = '';
    string = node1.innerHTML.split('');
    string = string.map((letter, index) => {
        if (letter == ' ') return letter;
        return `<span  class="wow ${animationName}" data-wow-duration="1s" data-wow-delay="${+delay + index/20}s">${letter}</span>`;
    });
    node1.innerHTML = '';
    string.forEach(span1 => {
        node1.innerHTML += span1;
    })
};

document.querySelectorAll('.separate-letters-js').forEach(el => {
    letterSeparation(el, 'fadeInLeft');
    console.log(el.dataset);

})

let wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 50, // default
    mobile: true, // default
    live: true, // default
    callback: function(box) {
        if (box.closest('.developer')) {
            setTimeout(() => {
                putSmoke();
            }, 1000);
            return;
        } else if (box.tagName == 'PATH' || box.tagName == 'path') {
            setTimeout(() => {

                simulatePathDrawing(box, '3');
            }, 1500);
            return;
        }
    }
})
wow.init();

/*
 *плавный скролл по якорям 
 */
$('.link-detailed, .menu-item a').click(function() {
    // console.log(this);
    $([document.documentElement, document.body]).animate({
        scrollTop: $(this.getAttribute("href")).offset().top
    }, 2000);
});


// function preloadConfig(firstVisit) {
//     if (firstVisit == 'true') {
//         document.querySelector('.preloader').style.zIndex = `-1`;
//     } else {

//         localStorage.setItem('visited', true);
//     }
//     console.log(firstVisit);
// };

// preloadConfig(localStorage.getItem('visited'));