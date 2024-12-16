// my crousal
let next = document.querySelector(".next")
let pre = document.querySelector(".pre")
let firstImg = document.querySelector(".firstImg")

let count = 0;
let divWidth = 500;
let totalImages = 3

next.addEventListener("click", function () {

    count = count + 1;
    if (count === totalImages) {
        count = totalImages - 1
    }
    firstImg.style.marginLeft = `-${count * divWidth}px`
})
pre.addEventListener("click", function () {
    count = count - 1;
    if (count <= 0) {
        count = 0
    }
    firstImg.style.marginLeft = `-${count * divWidth}px`
})