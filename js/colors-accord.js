const openColor = item => {
    const hiddenColor = item.find(".slide__item-content");
    hiddenColor.addClass("slide__item-content_active")
}

const closeEveryColor = container => {
    const items = container.find(".slide__item");
    const content = items.find(".slide__item-content");

    content.removeClass("slide__item-content_active");
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
})
  


