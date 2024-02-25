let questionsArr = document.querySelectorAll(".question");
let questionsBlocksArr = document.querySelectorAll(".question_block");
let answersArr = document.querySelectorAll(".answer_block");

questionsArr.forEach((question, index) => {
    question.addEventListener("click", function () {
        if (!question.classList.contains("_clicked")) {
            for (let j = 0; j < questionsArr.length; j++) {
                questionsArr[j].classList.remove("_clicked");
                answersArr[j].classList.remove("act");
            }
            question.classList.add("_clicked");
            answersArr[index].classList.add("act");
        } else {
            question.classList.remove("_clicked");
            answersArr[index].classList.remove("act");
        }
    });
});
