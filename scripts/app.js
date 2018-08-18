const dead = {};

dead.score = {
    total: 0,
    care: 0,
    dontCare: 0,
};

dead.result = {
        level0: `Congratulations! You are 0% dead inside!`,
        level1: `Ah, you're only 20% dead inside. That's okay!`,
        level2: `You are 40% dead inside. This may be a problem...`,
        level3: `Woah! You're 60% dead inside. Eh... this is awkward.`,
        level4: `You are 80% dead inside. There may be hope for you yet, if you seek professional help immediately!`,
        level5: `You're a monster.`
};

dead.next = ()=>{
    $('form').on('submit', function(e){
        e.preventDefault();
        const answer = $('form').find('input:radio:checked').attr('data-answer');
        const total = $('form').find('input:radio:checked').attr('data-count');
        $('form').trigger('reset');
        dead.score[answer]++;
        dead.score[total]++;
        $(this).parent().parent().addClass('hide');
        $('.directions').removeClass('hide');
        console.log(dead.score);
    });
    dead.finalQuestion();
};

dead.finalQuestion = ()=>{
    $('.final-question').on('submit', function (e) {
        e.preventDefault();
        $('.directions').addClass('hide');
    });
    dead.results();
};

dead.results = ()=>{
    const level0 = $('<h2>').text(dead.result.level0);
    const level1 = $('<h2>').text(dead.result.level1);
    const level2 = $('<h2>').text(dead.result.level2);
    const level3 = $('<h2>').text(dead.result.level3);
    const level4 = $('<h2>').text(dead.result.level4);
    const level5 = $('<h2>').text(dead.result.level5);
    if (dead.score.care === 5){
        $('.final-result').append(level0);
    }else if(dead.score.care === 4){
        $('.final-result').append(level1);
    }else if(dead.score.care === 3){
        $('.final-result').append(level2);
    }else if(dead.score.care === 2){
        $('.final-result').append(level3);
    }else if(dead.score.care === 1){
        $('.final-result').append(level4);
    }else{
        $('.final-result').append(level5);
    };
    dead.playAgain();
};

dead.playAgain = ()=>{
    $('.play-again').on('click', function(){
        $('.question').removeClass('hide');
        $('.directions').removeClass('hide');
        dead.score.care = 0;
        dead.score.dontCare = 0;
        dead.score.total = 0;
    });
};

dead.init = ()=>{
    dead.next();
};

$(function () {
    dead.init();
});