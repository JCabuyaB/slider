// images container
const slider = document.querySelector(".slider");

// images
const images = document.querySelectorAll(".slider__img");

// functions
let currentIndex = 0;
const imagesLength = images.length;

function nextImage(index) {
    let moveImage = 100 * -(index + 1);
    currentIndex++;

    if (index + 1 >= imagesLength) {
        moveImage = 0;
        currentIndex = 0;
    }

    return moveImage;
}

function previousImage(index) {
    let moveImage = 100 * -(index - 1);
    currentIndex--;
    if (index == 0) {
        moveImage = 100 * -(imagesLength - 1);
        currentIndex = imagesLength - 1;
    }

    return moveImage;
}

function updateSlider(translateTo) {
    slider.style.transform = `translateX(${translateTo}%)`;
}

// controls
document.querySelector(".content-controls").addEventListener("click", (e) => {
    if (e.target.classList.contains("prev")) {
        updateSlider(previousImage(currentIndex));
    } else if (e.target.classList.contains("next")) {
        updateSlider(nextImage(currentIndex));
    }
});
