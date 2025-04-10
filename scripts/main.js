product_cards = document.querySelectorAll('a.product div.swiper.product_card_swiper')
products = document.querySelectorAll('div.swiper.products_swiper')
recommended = document.querySelectorAll('section.recommended div.swiper.products_swiper')
productGallery = document.querySelector('div.product_gallery div.swiper.gallery')
productGallery = document.querySelector('div.product_gallery div.swiper.gallery')
productGalleryThumbs = document.querySelector('div.product_gallery div.swiper.thumbs')
productGalleryMobile = document.querySelector('div.about div.swiper.gallery')
indexMainSlider = document.querySelector('div.banners div.swiper')

const searchHighlighter = (element) => {
    results = element.nextElementSibling.querySelectorAll('a')
    results.forEach(result => {
        result.innerHTML = result.innerText.replace(new RegExp(element.value + '(?!([^<]+)?<)', 'gi'), '<b>$&</b>')
    })
}

products.forEach(slider => {

    const params = {
        slidesPerView: 1.3,
        spaceBetween: 12,
        watchSlidesProgress: true,
        navigation: {
            prevEl: slider.closest('section').querySelector('div.swiper-navigation > *:first-child'),
            nextEl: slider.closest('section').querySelector('div.swiper-navigation > *:last-child'),
        },
        breakpoints: {
            640: {
                slidesPerView: 2.5,
                spaceBetween: 12,
            },
            960: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        }
    }


    if (slider.closest('section').classList.contains('recommended')) {
        params.breakpoints[1280].slidesPerView = 4
        new Swiper(slider, params)
    } else {
        new Swiper(slider, params)
    }

})

product_cards.forEach(product_card => {
    new Swiper(product_card, {
        speed: 300,
        slidesPerView: 1,
        allowTouchMove: true,
        pagination: {
            el: product_card?.querySelector('div.swiper-pagination'),
        },
        breakpoints: {
            960: {
                speed: 0,
                allowTouchMove: false,
            }
        },
        on: {
            init: function () {

                // Добавляем области для переключения фотографий
                navigationThumbs = document.createElement('div')
                navigationThumbs.classList.add('navigation-thumbs')

                for (let index = 0; index < this.slides.length; index++) {
                    let navigationThumb = document.createElement('div')
                    navigationThumb.classList.add('navigation-thumb')
                    navigationThumbs.append(navigationThumb)

                    // Добавляем активный класс к первому элементу 
                    index == 0 && navigationThumb.classList.add('active')

                    // При наведении меняем слайд, добавляем активный класс
                    navigationThumb.addEventListener('mouseenter', event => {
                        thumbs = navigationThumb.parentElement.querySelectorAll('.navigation-thumb')
                        thumbs.forEach(thumb => {
                            thumb.classList.remove('active')
                        })
                        navigationThumb.classList.add('active')
                        this.slideTo(index)
                    })

                    // Возвращение на первое фото при покидании мышки
                    navigationThumbs.addEventListener('mouseleave', event => {
                        thumbs = navigationThumb.parentElement.querySelectorAll('.navigation-thumb')
                        thumbs.forEach(thumb => {
                            thumb.classList.remove('active')
                        })
                        thumbs[0].classList.add('active')
                        this.slideTo(0)
                    })
                }

                this.el.prepend(navigationThumbs)

            }
        }
    })
})

thumbs = new Swiper(productGalleryThumbs, {
    slidesPerView: 3,
    spaceBetween: '20px',
})

new Swiper(productGallery, {
    thumbs: {
        swiper: thumbs
    }
})

new Swiper(productGalleryMobile, {
    navigation: {
        prevEl: productGalleryMobile?.querySelector('div.swiper-navigation > *:first-child'),
        nextEl: productGalleryMobile?.querySelector('div.swiper-navigation > *:last-child'),
    },
})

new Swiper(indexMainSlider, {
    navigation: {
        prevEl: indexMainSlider.querySelector('div.arrow:first-child'),
        nextEl: indexMainSlider.querySelector('div.arrow:last-child'),
    },
    pagination: {
        el: indexMainSlider.querySelector('div.swiper-pagination'),
        clickable: true
    }
})

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    // Handle the submit event
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default submission
        console.log("Form submitted successfully!");
        // Add your custom logic here
    });

    // Handle invalid inputs
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.addEventListener("invalid", (event) => {
            event.target.style.border = "1px solid red"; // Highlight invalid input
            event.target.parentNode.classList.add('error')
            console.log(`Invalid input: ${event.target.name}`);
        });

        // Reset border on valid input
        input.addEventListener("input", () => {
            input.style.border = ""; // Remove red border when corrected
            input.parentNode.classList.remove('error')
        });
    });
})
