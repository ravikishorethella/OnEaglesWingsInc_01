$(document).ready(function () {
    $('.mobile a').click(function (e) {
        $(this).parent().parent().toggleClass('mopen');
        $(this).html($(this).html() == 'Close X' ? 'Menu' : 'Close X');
        e.preventDefault();

    });
});

