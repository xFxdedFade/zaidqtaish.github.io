$(document).ready(function () {
    $('.project-btn').hover(
        function () {
            var index = $('.project-btn').index(this);
            $('.project-img').eq(index).css('opacity', '1');
        },
        function () {
            var index = $('.project-btn').index(this);
            $('.project-img').eq(index).css('opacity', '0');
        }
    );
});
