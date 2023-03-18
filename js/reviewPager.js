let pagerItem = $('.reviews__pager-item');
 
$(pagerItem).on('click', e => {
    $(pagerItem).removeClass('reviews__pager-item--active');
    let currentPager = e.currentTarget;
    $(currentPager).addClass('reviews__pager-item--active');
    let pagerNdx = $(currentPager).index();
 
    let reviewBlock = $('.reviews__block');
    $(reviewBlock).removeClass('reviews__block-active');
    $(reviewBlock).eq(pagerNdx).addClass('reviews__block-active');
});