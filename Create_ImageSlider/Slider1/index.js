let allImages = document.querySelectorAll("#slider_Container>img");
console.log("allImages-", allImages);

allImages.forEach((element, i) => {
  element.style.left = `${i * 100}%`;
});

let [preBtn, nxtBtn] = document.querySelectorAll("#button_Container>button");

let count = 0;

// click event handler on nxtBtn button
nxtBtn.addEventListener("click", () => {
  if (count >= allImages.length - 1) {
    count = 0;
  } else {
    count++;
  }

  console.log("preBtn Clicked");
  allImages.forEach((element, i) => {
    element.style.transform = `translateX(-${count * 100}%)`;
    console.log(
      `count is ${count} and translateX on ${i} img is -${count * 100}`
    );
  });
});

// click event handler on preBtn button
preBtn.addEventListener("click", () => {
  if (count <= 0) {
    count = allImages.length - 1;
  } else {
    count--;
  }
  console.log("preBtn Clicked");
  allImages.forEach((element, i) => {
    element.style.transform = `translateX(-${count * 100}%)`;
    console.log(
      `count is ${count} and translateX on ${i} img is -${count * 100}`
    );
  });
});
