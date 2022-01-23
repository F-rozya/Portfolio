
$(document).ready(function() {
    $('.burger').click(function (event) {
        $('.burger,.header_list,.Lang').toggleClass('active');
        $('body').toggleClass('Lock');
    });
});
