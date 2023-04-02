const sections = $("section");
const display = $(".maincontent");
let inScroll = false; 

sections.first().addClass("active");

const performTransition = sectionEq => {

    if (inScroll == false) {
        inScroll = true;
        const position = sectionEq * -100;
        display.css ({
            transform: `translateY(${position}%)`
        });
    } 

    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
    fixedMenuItem.eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

    setTimeout(() => {
        inScroll = false;
    }, 300)
}

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction == "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
}

$(window).on("wheel", e => {

    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    }

})

$(window).on("keydown", e => {

    const tagName = e.target.tagName.toLowerCase();

    if (tagName != "input" && tagName != "textarea") {
        switch (e.keyCode) {
            case 40:
                scrollViewport("next");
                break;
            case 38:
                scrollViewport("prev");
                break;
          } 200    
    }
  
})

// $(".wrapper").on("touchmove", e => e.preventDefault());

// $("body").swipe({
//     swipe: function(event,direction) {
//         const scroller = viewportScroller();
//         let scrollDirection = "";
//         if(direction == "up") scrollDirection = "next";
//         if(direction == "down") scrollDirection = "prev";
        
//         scroller[scrollDirection]()
//     },
// })

