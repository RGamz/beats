
const slider = $(".shop__slides").bxSlider({
    pager:false,
    wrapperClass:'slider__class',
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
