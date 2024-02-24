const feedbackSlider = document.querySelector(".feedback_slider");
const feedbackSliderContainer = document.querySelector(
    ".feedback_slider_container"
);
let feedbackSlideWidth = document.querySelector('.feedback_slide').offsetWidth;
const slideArr = document.querySelectorAll('.feedback_slide');
const feedbackPagination = document.querySelectorAll('.feedback_slider_pagination span');
const customersPhoto = document.querySelectorAll('.customer_img');

let currentSlide = 0;

slideArr.forEach((slide, index) => {
    if (index === 0) {
        slide.style.opacity = '1';
        customersPhoto[index].style.transition = 'all .5s ease-in';
        customersPhoto[index].style.display = 'block';
    } else {
        slide.style.opacity = '.5';
        customersPhoto[index].style.transition = 'all .5s ease-in';
        customersPhoto[index].style.display = 'none';
        
    }
});

for (let i = 0; i < feedbackPagination.length; i++) {
    feedbackPagination[i].addEventListener('click', () => {

        slide(i);

    })
}

function slide(ind) {
    feedbackSliderContainer.style.transform = `translateX(-${(feedbackSlideWidth + 64) * ind}px)`;
    slideArr.forEach((slide, index) => {
        if (index === ind) {
            slide.style.opacity = '1';
            customersPhoto[index].style.display = 'block';
        } else {
            slide.style.opacity = '.5';
        }
    });
    feedbackPagination.forEach(pag => {
        pag.classList.remove('active');
    });
    feedbackPagination[ind].classList.add('active');
};