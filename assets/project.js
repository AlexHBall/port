$(document).ready(function() {
    function arrangeProjectCard(width) {
        if (width) {
            $('.para-one').insertAfter('.im-one');
            $('.para-two').insertAfter('.im-two');
            $('.para-three').insertAfter('.im-three');
        } else {
            $('.para-one').insertAfter('.im-three');
            $('.para-two').insertAfter('.para-one');
            $('.para-three').insertAfter('.para-two');
        }
    }
    arrangeProjectCard($(window).width());


    $(window).resize(function() {
        arrangeProjectCard($(window).width());
    });


});