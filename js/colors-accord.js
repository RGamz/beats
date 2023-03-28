
const measureWidth =(item) => {
    const screenWidth = $(window).width();
    const container = item.closest(".slide__list");
    const titleBlocks = container.find(".slide__button");
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        return screenWidth - titleWidth;
    } else {
        return 524;
    }
}


const openColor = item => {
    const hiddenColor = item.find(".slide__item-content");
    const reqWidth = measureWidth(item);
    hiddenColor.addClass("slide__item-content_active")
    hiddenColor.width(reqWidth)
}

const closeEveryColor = container => {
    const items = container.find(".slide__item");
    const content = items.find(".slide__item-content");

    content.removeClass("slide__item-content_active");
    content.width(0);
}

$(".slide__button").click(e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const item = $this.closest(".slide__item");
    const openedColor = item.hasClass("slide__item-content_active")
    const elemContainer = $this.closest(".slide__list");


    if (openedColor) {
        closeEveryColor(elemContainer);
    } else {
        closeEveryColor(elemContainer);
        openColor(item);
    } 

})

$(".close__button-color").click("click", (e) => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const item = $this.closest(".slide__item-content");
    item.removeClass("slide__item-content_active")
    item.width(0)
})


