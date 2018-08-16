const dead = {};

dead.questions = [
    question1 = {
        title: `Question 1`,
        image: ``
    },
    question2 = {
        title: `Question 2`,
        image: ``
    },
    question3 = {
        title: `Question 3`,
        image: ``
    },
    question4 = {
        title: `Question 4`,
        image: ``
    },
    question5 = {
        title: `Question 5`,
        image: ``
    }
];

dead.score = {
    care: 0,
    dontCare: 0
};

dead.result = {
        level0: `<h2>level 0</h2>`,
        level1: `<h2>level 1</h2>`,
        level2: `<h2>level 2</h2>`,
        level3: `<h2>level 3</h2>`,
        level4: `<h2>level 4</h2>`,
        level5: `<h2>level 5</h2>`
};

dead.start = ()=>{
    $('.start-button').on('submit', (e)=>{
        e.preventDefault();

    });
};
// listen for submit of each question and update the score (care / dontCare)

dead.next = ()=>{
    $('form').on('submit', (e) => {
        e.preventDefault();
        const answer = $('form').find('input:radio:checked').attr('data-answer');
        dead.score[answer]++;
        console.log(dead.score);
    });
};

// change slide after submit
// compare array lengths to each other to calculate score of dead inside (convert to percentage)
// listen for submit on result button and then populate the answer in final slide

dead.init = ()=>{
    dead.next();
};

$(function () {
    dead.init();
});