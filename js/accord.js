$(document).ready(() => {
    $('.team__name-section').click(e => {
        e.preventDefault();

        $('.team__dropdown').css({
            'height': '100%',
            'overflow': 'visible'
        });

       
    });
 });