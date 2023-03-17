
const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__dropdown")
    const textBlock = contentBlock.find(".team__dropdown-wrapper");
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find(".team__dropdown");
    const itemContainer = container.find(".team__item");


    itemContainer.removeClass("active");
    items.height(0);
}

$(".team__name-section").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team")
    const elemContainer = $this.closest(".team__item");
    const triangleDown = $this.find(".triangle__down")
    const triangleUp = $this.find(".triangle__up")


    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
        $(triangleDown).css('display', 'inline');
        $(triangleUp).css('display', 'none');
    } else {
        closeEveryItem(container);
        openItem($this);
        $(triangleDown).css('display', 'none');
        $(triangleUp).css('display', 'inline');
    } 

})


