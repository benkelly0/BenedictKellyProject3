const dead = {};

dead.score = {
    total: 0,
    care: 0,
    dontCare: 0
};

dead.result = {
        level0: `level 0`,
        level1: `level 1`,
        level2: `level 2`,
        level3: `level 3`,
        level4: `level 4`,
        level5: `level 5`
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
        console.log(dead.score);
    });
};

dead.init = ()=>{
    dead.next();
};

$(function () {
    dead.init();
});