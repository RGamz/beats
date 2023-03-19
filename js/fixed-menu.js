let fixedMenuItem = $('.fixed-menu__item');
 
$(fixedMenuItem).on('click', e => {
    $(fixedMenuItem).removeClass('fixed-menu__item--active');
    let currentMenuItem = e.currentTarget;
    $(currentMenuItem).addClass('fixed-menu__item--active');
});
