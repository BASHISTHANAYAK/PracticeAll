

let container = document.querySelector(".container");
let firstImg = document.querySelector(".firstImg");
let pre = document.querySelector(".pre")
let next = document.querySelector(".next")

let totalImages = 5;

// click fun
let totalPxImageShouldMove = 405
/* width+gap -> to place image perfectly in the container... */

let CurrentImgNumber = 0;

pre.addEventListener("click", (e) => {

    CurrentImgNumber = CurrentImgNumber - 1
    if (CurrentImgNumber >= 0) {
        firstImg.style.marginLeft = `-${CurrentImgNumber * totalPxImageShouldMove}px`
    } else {
        CurrentImgNumber = 0;
    }
})
next.addEventListener("click", (e) => {
    CurrentImgNumber = CurrentImgNumber + 1
    if (CurrentImgNumber < totalImages) {
        firstImg.style.marginLeft = `-${CurrentImgNumber * totalPxImageShouldMove}px`
    } else {
        CurrentImgNumber = totalImages - 1
    }

})