document.addEventListener("DOMContentLoaded", function () {
    const gap = 20;

    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => {
        const contents = carousel.querySelector(".content");
        const nextButtons = carousel.querySelectorAll(".next");
        const prevButtons = carousel.querySelectorAll(".prev");

        nextButtons.forEach(next => {
            next.addEventListener("click", e => {
                carousel.scrollBy(width + gap, 0);
                if (carousel.scrollWidth !== 0) {
                    prevButtons.forEach(prev => prev.style.display = "flex");
                }
                if (contents.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                    nextButtons.forEach(next => next.style.display = "none");
                }
            });
        });

        prevButtons.forEach(prev => {
            prev.addEventListener("click", e => {
                carousel.scrollBy(-(width + gap), 0);
                if (carousel.scrollLeft - width - gap <= 0) {
                    prevButtons.forEach(prev => prev.style.display = "none");
                }
                if (!(contents.scrollWidth - width - gap <= carousel.scrollLeft + width)) {
                    nextButtons.forEach(next => next.style.display = "flex");
                }
            });
        });
    });

    let width = carousels[0].offsetWidth;
    window.addEventListener("resize", e => (width = carousels[0].offsetWidth));

    const inputField = document.getElementById("numeric-input");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");
  console.log(inputField, incrementButton, decrementButton)

  incrementButton.addEventListener("click", function () {
    let value = parseFloat(inputField.value) || 0;
    value += 1;
    inputField.value = value;
  });

  decrementButton.addEventListener("click", function () {
    let value = parseFloat(inputField.value) || 0;
    value -= 1;
    if(value > 0){
        inputField.value = value;
    }
    else value = 0;
  });

/*
  inputField.addEventListener("input", function () {
    inputField.value = parseFloat(inputField.value) || 0;
  });*/


});
