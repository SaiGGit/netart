$(document).ready(function() {
    $('.interactive-box').dblclick(function() {
        $(this).animate({
            width: '+=50px',
            height: '+=50px'
        }, 300);
    });

    $('.interactive-box').mouseout(function() {
        $(this).animate({
            width: '150px',
            height: '150px'
        }, 300);
    });
});
