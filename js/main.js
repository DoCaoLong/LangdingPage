// open close nav
$('.btnmenu').click(function() {
    $(this).toggleClass('clicked');
    $('.nav').toggleClass('active');
})

//create smooth scroll on click---------------------------------------------------------
let toTopBtn = document.querySelector('.back-top__content--desk');
toTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//hide/show button on scroll up/down js-----------------------------------------------
// let scrollPos = 0;
// window.addEventListener('scroll', function() {
//     // detects new state and compares it with the new one
//     if ((document.body.getBoundingClientRect()).top > scrollPos) {
//         // console.log('scrolling down')
//         document.querySelector('.back-top').classList.remove('active');
//         $('.back-top').css({
//             bottom: -$('.back-top').height(),
//             transition: 'all 0.25s ease-in'
//         })
//     } else {
//         document.querySelector('.back-top').classList.add('active');
//         $('.back-top').css({
//                 marginBottom: 15,
//                 bottom: 0,
//                 transition: 'all 0.25s ease-out'
//             })
//             // console.log('scrolling up')
//     }
//     // saves the new position for iteration.
//     scrollPos = (document.body.getBoundingClientRect()).top;
// });
// jquery
let precScrolll = $('html').scrollTop();
$(document).scroll(function() {
    if (precScrolll < window.pageYOffset) {
        //lan chuojt xuống
        let ad = $('.back-top').css({
                bottom: 15,
                transition: 'all 0.25s ease-out'
            })
            //console.log(ad)
    } else {
        $('.back-top').css({
            bottom: -$('.back-top').height(),
            transition: 'all 0.25s ease-in'
        })
    }
    precScrolll = window.pageYOffset
})

// //hidden menu-----------------------------------------------------------------
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.querySelector(".hiddensl").style.display = "initial";
//     } else {
//         document.querySelector(".hiddensl").style.display = "none";
//     }
//     prevScrollpos = currentScrollPos;
// }

//hide menu jquery
let precScroll = $('html').scrollTop();
$(document).scroll(function() {
    if (precScroll < window.pageYOffset) {
        //lan chuojt xuống
        $('header').css({
            top: -$('header').height(),
            transition: 'all 0.25s ease-in'
        })

    } else {
        $('header').css({
            top: 0,
            transition: 'all 0.25s ease-out'
        })

    }
    precScroll = window.pageYOffset
})

//doi mau menu-----------------------------------------------------------------
let $slider = document.querySelector('.slider');
let $header = document.querySelector('.hiddensl');
window.addEventListener('scroll', function() {
    let scrollTop = document.querySelector('html').scrollTop;
    if (scrollTop > $slider.offsetHeight - $header.offsetHeight) {
        $header.style.background = "rgba(0, 0, 0, 0.70)";
    } else {
        $header.style.background = 'transparent';
    }
})



//lang js---------------------------------------------------------
let lang = document.querySelector('.lang');
// let langcuren = document.querySelector('.lang__current');
// let langOption = document.querySelectorAll('.lang__option a');
// langcuren.addEventListener('click', function(e) {
//     e.stopPropagation();
//     lang.classList.toggle('active');
// })

// langOption.forEach((item) => {
//     item.addEventListener('click', function(e) {
//         e.preventDefault();
//         let lg = this.textContent;
//         document.querySelector('span').innerHTML = lg;
//         console.log(lg);
//     })
// })

// document.addEventListener('click', function(e) {
//     e.stopPropagation();
//     lang.classList.remove('active');
// })
// lang jquery
let lang__option = $('.lang__option');
$('.lang__current').click(function(e) {
    e.stopPropagation(); // ngăn chặn sự kiện mặc định được thực thi
    lang.classList.add("active");

});
$('.lang__option a').click(function(e) {
    e.preventDefault();
    let nameCountry = $(this).text();
    $('.lang__current span').text(nameCountry);
    console.log(nameCountry)
});
$('body').click(function(e) {
    e.stopPropagation();
    lang.classList.remove('active');
})

//video--------------------------------------------------------------
// remove
// let iframeVideo = document.querySelector('#video-iframe');
// //auto play
// let videoTag = document.querySelector('pop-video');
// //open video
// document.querySelectorAll('.quality__video .video__img').forEach((e) => {
//         e.addEventListener('click', function(e) {

//             // attribute lấy giá giá trị thuôc tính trong thẻ
//             let videosrc = this.getAttribute('data-video-src');
//             iframeVideo.src = 'https://www.youtube.com/embed/' + videosrc + '?autoplay=1';

//             // ES6
//             // iframeVideo.src = `https://www.youtube.com/embed/'${videosrc}`;

//             // cách 2
//             // iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/' + videosrc);

//             document.querySelector('.pop-video').style.display = "flex";
//             //autoplay video mp4
//             // videoTag.play();
//         })
//     })
//     // button close video
// document.querySelector('.pop-video .close').addEventListener('click', function() {
//     document.querySelector('.pop-video').style.display = "none"
//     iframeVideo.src = ''
//         // videoTag.pause();
// })

//popup video jquery----------------------------------------
let popupvideo = $('.pop-video');
let iframe = popupvideo.find('iframe');
$('.quality .video__img').click(function() {
    let src = $(this).attr('data-video-src');
    console.log(src)
    popupvideo.css('display', "flex")
    iframe.attr("src", 'https://www.youtube.com/embed/' + src + '?autoplay=1')
})
popupvideo.find(".close").click(function() {
    popupvideo.hide();
    iframe.attr('src', "")
})


//slide--------------------------------------------------------------------
// let $slideeItems = document.querySelectorAll('.slider__item');
// let $sliderDots = document.querySelectorAll('.slider .dotted li');
// let sliderCurrent = 0;
// let sliderNumber = document.querySelector('.slider .number');
// document.querySelector('.slider .prev').addEventListener('click', function() {
//     console.log('prev')

//     if (sliderCurrent > 0) {
//         sliderTo(sliderCurrent - 1)
//             // $slideeItems[sliderCurrent].classList.remove('active')
//             // $slideeItems[sliderCurrent - 1].classList.add('active')
//             // $sliderDots[sliderCurrent].classList.remove('is-selected')
//             // sliderCurrent--;
//             // $sliderDots[sliderCurrent].classList.add('is-selected')
//     }
//     //padstart check chiều dài chuổi bé hơn 2 là thêm số 0
//     // sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2, "0");

// })
// document.querySelector('.slider .next').addEventListener('click', function() {
//     // console.log('next')
//     if (sliderCurrent < $slideeItems.length - 1) {
//         sliderTo(sliderCurrent + 1)
//             //     $slideeItems[sliderCurrent].classList.remove('active')
//             //     $slideeItems[sliderCurrent + 1].classList.add('active')
//             //     $sliderDots[sliderCurrent].classList.remove('is-selected')
//             //     sliderCurrent++;
//             //     $sliderDots[sliderCurrent].classList.add('is-selected')

//     }
//     // sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2, "0");
// })

// function sliderTo(to) {
//     $slideeItems[sliderCurrent].classList.remove('active')
//     $slideeItems[to].classList.add('active')
//     $sliderDots[sliderCurrent].classList.remove('is-selected')
//     $sliderDots[to].classList.add('is-selected')
//     sliderCurrent = to;
//     sliderNumber.innerText = (to + 1).toString().padStart(2, "0");

// }

// $sliderDots.forEach((e, i) => {
//         e.addEventListener('click', function() {
//             sliderTo(i)
//         })
//     })
//     // close slider

//activemenu scroll----------------------------------------------
let sections = []
    //let arrSectionTopHeight = []
let activeMenuCroll = document.querySelectorAll('.menu li a')
activeMenuCroll.forEach((item, index) => {
    let nameSection = item.getAttribute('data-menu');
    //bắt vị trí của data-menu
    let section = document.querySelector("#" + nameSection);
    sections.push(section);
    //actimenu click
    item.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: section.offsetTop - document.querySelector('header').offsetTop, behavior: 'smooth' });
    })
})

// bắt sự kiện scroll
window.addEventListener('scroll', function() {
    //lấy vị trí scroll đến
    let scrollPos = document.querySelector('html').scrollTop;
    // console.log(scrollPos)
    // tránh lặp lại trong việc xét đk lặp, thay vòng lặp
    sections.forEach((item, i) => {
        // đáy của slider chạm section thì active menu
        if (scrollPos > item.offsetTop - document.querySelector('header').offsetHeight) {
            activeMenuCroll.forEach((item) => {
                item.classList.remove('active');
            });
            // lấy thẻ a theo att add vào class active
            activeMenuCroll[i].classList.add('active');
        }
    })
})






// let sliderBottom = $('.photos');
// sliderBottom.flickity({
//     freeScroll: true,
//     contain: true,
//     // disable previous & next buttons and dots
//     prevNextButtons: false,
//     pageDots: false
// });
let $carousel = $('.slider__item-wrap');
$carousel.flickity({
    cellAlign: 'left',
    contain: true, // theo bộ khung
    wrapAround: true, // lặp lại
    prevNextButtons: false,
    // pageDots: false,
    // autoPlay: true,
    autoPlay: 3000,
    on: {
        ready: function() { //sau khi slider chạy xong thì thực hiện
            let dotted = $('.flickity-page-dots');
            paging = $('.slider__bottom-paging .dotted')
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.slider__bottom-paging .number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0))
        }
    }

});
$('.slider__bottom-control .prev').on('click', function() {
    $carousel.flickity('previous');
})
$('.slider__bottom-control .next').on('click', function() {
    $carousel.flickity('next');
})

$('.photos').flickity({
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 2500,
});



//////////////////////////wipe photo
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

$(window).on('load', function() {
    initPhotoSwipeFromDOM('.gallery__grid-item');
});