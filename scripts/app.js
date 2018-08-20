// OBJECT TO HOLD EVERYTHING
const dead = {};

// SCORE KEEPING
dead.score = {
    total: 0,
    care: 0,
    dontCare: 0,
};

// DIFFERENT RESULTS
dead.result = {
        level0: `Congratulations! You are 0% dead inside!... or you're lying. (You're probably lying)`,
        level0img: `<img src="assets/new-girl.jpg" alt="Screenshot of Jess from New Girl">`,
        level1: `Ah, you're only 20% dead inside. That's okay!`,
        level1img: `<img src="assets/simpsons.jpg" alt="Homer Simpson celebrating">`,
        level2: `You are 40% dead inside. This may be a problem...`,
        level2img: `<img src="assets/silicon-valley.jpeg" alt="Screenshot of Gilfoyle from Silicon Valley">`,
        level3: `Woah! You're 60% dead inside. Eh... this is awkward.`,
        level3img: `<img src="assets/happy.jpg" alt="Screenshot from Happy">`,
        level4: `You are 80% dead inside. There may be hope for you yet, if you seek professional help immediately!`,
        level4img: `<img src="assets/breaking-bad.png" alt="Walter White with the text saying I am the one who knocks">`,
        level5: `You're a monster.`,
        level5img: `<img src="assets/american-psycho.jpg" alt="Screenshot of Christian Bale from American Psycho">`
};

// LISTENER FOR NEXT BUTTONS / PREVENT REFRESH / CHANGE SCORE / HIDE SLIDE
dead.next = ()=>{
    $('form').on('submit', function(e){
        e.preventDefault();
        const answer = $('form').find('input:radio:checked').attr('data-answer');
        const total = $('form').find('input:radio:checked').attr('data-count');
        $('form').trigger('reset');
        dead.score[answer]++;
        dead.score[total]++;
        $(this).parent().parent().removeClass('animate-show').addClass('animate-hide');
        $('.directions').removeClass('hide');
    });
    dead.finalQuestion();
};

// LISTENER FOR END OF QUIZ TO POPULATE FINAL RESULT
dead.finalQuestion = ()=>{
    $('.final-question').on('submit', function (e) {
        e.preventDefault();
        $('.directions').addClass('hide');
        dead.results();
    });
};

// CONDITIONAL RESULTS DEPENDING ON SCORE
dead.results = ()=>{
    const level0 = $('<h2>').text(dead.result.level0);
    const level0img = dead.result.level0img;
    const level1 = $('<h2>').text(dead.result.level1);
    const level1img = dead.result.level1img;
    const level2 = $('<h2>').text(dead.result.level2);
    const level2img = dead.result.level2img;
    const level3 = $('<h2>').text(dead.result.level3);
    const level3img = dead.result.level3img;
    const level4 = $('<h2>').text(dead.result.level4);
    const level4img = dead.result.level4img;
    const level5 = $('<h2>').text(dead.result.level5);
    const level5img = dead.result.level5img;
    if (dead.score.care === 5){
        $('.final-result').append(level0img).append(level0);
    } else if (dead.score.care === 4){
        $('.final-result').append(level1img).append(level1);
    } else if (dead.score.care === 3){
        $('.final-result').append(level2img).append(level2);
    } else if (dead.score.care === 2){
        $('.final-result').append(level3img).append(level3);
    } else if (dead.score.care === 1){
        $('.final-result').append(level4img).append(level4);
    } else {
        $('.final-result').append(level5img).append(level5);
    };
    dead.playAgain();
};

// RESET EVERYTHING BACK TO FIRST QUESTION
dead.playAgain = ()=>{
    $('.play-again').on('click', function(){
        $('.question').removeClass('animate-hide').addClass('animate-show');
        $('.directions').removeClass('hide');
        $('.final-result').empty();
        dead.score.care = 0;
        dead.score.dontCare = 0;
        dead.score.total = 0;
    });
};

// CALL FIRST LISTENING FUNCTION
dead.init = ()=>{
    dead.next();
};

// CALL INITIAL FUNCTION
$(function () {
    dead.init();
});