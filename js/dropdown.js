const gearBlock = document.querySelector("#gear__block");
const drop = document.querySelector("#drop");
const leftMarg = 5.6875 + "rem";

gearBlock.addEventListener("mouseover", e => {
    drop.style.display = "block";
    drop.style.left = leftMarg

    drop.addEventListener("mouseover", e => {
        drop.style.display = "block";
        drop.style.left = leftMarg
    })

    drop.addEventListener("mouseleave", e => {
        drop.style.display = "none";
    })
})




