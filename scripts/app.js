const dead = {};

dead.smoothScroll = ()=>{
    $("a").smoothScroll({
    });
};

dead.init = ()=>{
    dead.smoothScroll();
};

$(function () {
    dead.init();
});