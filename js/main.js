// Intro slider (which with a graph)
if (document.body.clientWidth > 900) {
const sliderContainer = document.querySelector('.intro_lines_container');
const currentPageWidth = document.querySelector('.page').offsetWidth;
console.log(currentPageWidth);
const graphPagination = document.querySelector('.intro_pagination');
// buttons number
let numberOfBtns = Math.ceil(sliderContainer.offsetWidth / currentPageWidth);
console.log(numberOfBtns);
// btns array
let btnArray = [];

for (let i = 0; i < numberOfBtns; i++) {
    let btnEl = graphPagination.appendChild(document.createElement('button'));

    btnEl.type = 'button';
    btnArray.push(btnEl);
}
btnArray[0].classList.add('active');
console.log(btnArray);

btnArray.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        changePaginateDesign(index);
        movePartsOfGraph(index);        
    })
});

// two functions for play/pause button in the intro section 
let currentPartOfGraph = 0;
let timer;
const PlayIntroBtn = document.getElementById('play_intro');
const PauseIntroBtn = document.getElementById('pause_intro');

const introBtnPlay = () => {
    PlayIntroBtn.style.opacity = '0';
    PlayIntroBtn.style.display = 'none';
    PauseIntroBtn.style.display = 'block';
    PauseIntroBtn.style.opacity = '1';
    
    if (currentPartOfGraph != btnArray.length - 1) {
        changePaginateDesign(currentPartOfGraph);
        movePartsOfGraph(currentPartOfGraph);
        currentPartOfGraph++;
    } else {
        changePaginateDesign(currentPartOfGraph);
        movePartsOfGraph(currentPartOfGraph);
        currentPartOfGraph = 0;
    }
    timer = setTimeout(introBtnPlay, 3000);
    
};

const introBtnPause = () => {
    if (timer) {
        clearTimeout(timer);
        PauseIntroBtn.style.opacity = '0';
        PauseIntroBtn.style.display = 'none';
        PlayIntroBtn.style.display = 'block';
        PlayIntroBtn.style.opacity = '1';
    } 
}
const scrollPositionIntro = () => document.documentElement.scrollTop || window.pageYOffset;
window.addEventListener('scroll', () => {
    if (scrollPositionIntro() > 300) {
        if (timer) {
            clearTimeout(timer);
            PauseIntroBtn.style.opacity = '0';
            PauseIntroBtn.style.display = 'none';
            PlayIntroBtn.style.display = 'block';
            PlayIntroBtn.style.opacity = '1';
        }
    } 
})

const changePaginateDesign = (index) =>  {
    btnArray.forEach(btn => btn.classList.remove('active'));
    btnArray[index].classList.add('active');
};

const movePartsOfGraph = (index) => {

    if (sliderContainer % currentPageWidth === 0) {
        sliderContainer.style.transform = `translateX(-${index * currentPageWidth}px)`;
    } else {
        if (index != btnArray.length - 1) {
            sliderContainer.style.transform = `translateX(-${index * currentPageWidth}px)`;
            
        } else {
            sliderContainer.style.transform = `translateX(-${(index - 1) * currentPageWidth + (sliderContainer.offsetWidth - index * currentPageWidth)}px)`;
        }
    }
}


PlayIntroBtn.addEventListener('click', introBtnPlay);
PauseIntroBtn.addEventListener('click', introBtnPause);

}