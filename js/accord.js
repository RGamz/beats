$(document).ready(() => {
    
    $('.team__name-section').on('click', function() {
        $(this).addClass('dropcheck');
        const block = $('.dropcheck').next();

        if (block.hasClass('active')) {
            block.stop(true, true).animate({
                'height': '0'
            });
            block.removeClass('active');
            $(this).removeClass('dropcheck');
        } else {
            block.stop(true, true).animate({
                'height': '100%'
            });
            block.addClass('active');
        }
    });

});
