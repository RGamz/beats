
const slider = $(".shop__slides").bxSlider({
    pager:false,
    wrapperClass:'shop__wrapper',
    controls:false,
});

$(".arrLeft").click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
})

$(".arrRight").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})
