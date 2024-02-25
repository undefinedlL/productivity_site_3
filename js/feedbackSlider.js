const feedbackSlider = document.querySelector(".feedback_slider");
const feedbackSliderContainer = document.querySelector(
    ".feedback_slider_container"
);
let feedbackSlideWidth = document.querySelector(".feedback_slide").offsetWidth;
const slideArr = document.querySelectorAll(".feedback_slide");

const feedbackPagination = document.querySelectorAll(
    ".feedback_slider_pagination span"
);
const customersPhoto = document.querySelectorAll(".customer_img");

let currentSlide = 0;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

slideArr.forEach((slide, index) => {
    if (index === 0) {
        slide.style.opacity = "1";
        customersPhoto[index].style.transition = "all .5s ease-in";
        customersPhoto[index].style.display = "block";
    } else {
        slide.style.opacity = ".5";
        customersPhoto[index].style.transition = "all .5s ease-in";
        customersPhoto[index].style.display = "none";
    }
    // touch events
    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);
    slide.addEventListener("touchmove", touchMove);

    //mouse events
    slide.addEventListener("mousedown", touchStart(index));
    slide.addEventListener("mouseup", touchEnd);
    slide.addEventListener("mousemove", touchMove);
    slide.addEventListener("mouseleave", touchEnd);
});

function getPosX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function touchStart(index) {
    return function (e) {
        currentSlide = index;
        startPos = getPosX(e);
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        feedbackSlider.classList.add("grabbing");
    };
}

function touchMove(e) {
    if (isDragging) {
        const currentPosition = getPosX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function touchEnd() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100 && currentSlide < slideArr.length - 1) {
        currentSlide += 1;
    }
    if (movedBy > 100 && currentSlide > 0) {
        currentSlide -= 1;
        feedbackSlider.classList.remove("grabbing");
    }
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}
function setPositionByIndex() {
    currentTranslate = currentSlide * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
}
function setSliderPosition() {
    slide(currentSlide);
}

for (let i = 0; i < feedbackPagination.length; i++) {
    feedbackPagination[i].addEventListener("click", () => {
        slide(i);
    });
}

function slide(ind) {
    feedbackSliderContainer.style.transform = `translateX(-${
        (feedbackSlideWidth + 64) * ind
    }px)`;
    slideArr.forEach((slide, index) => {
        if (index === ind) {
            slide.style.opacity = "1";
            customersPhoto[index].style.display = "block";
        } else {
            slide.style.opacity = ".5";
        }
    });
    feedbackPagination.forEach((pag) => {
        pag.classList.remove("active");
    });
    feedbackPagination[ind].classList.add("active");
}
