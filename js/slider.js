const left = document.querySelector('.left');
const right = document.querySelector('.right');
// console.log(left)
const slider = document.querySelector(".sder");
const img = document.querySelectorAll(".img")
let slidNum = 1;
const length = img.length;
const bottom = document.querySelector(".bottom");
for (let i = 0; i < img.length; i++) {
    const div = document.createElement("div");
    div.classList.add("button");
    bottom.appendChild(div)
}
const button = document.querySelectorAll(".button");
console.log(button);
button[0].style.backgroundColor = 'black';
const bgrest = () => {
    button.forEach((item) => {
        item.style.backgroundColor = "transparent";
    })
}
// button[0].style.borderRadius="5px";
button.forEach((button, i) => {
    button.addEventListener('click', () => {
        bgrest();
        slider.style.transform = `translateX(-${i * 800}px)`;
        slidNum = i + 1;
        button.style.backgroundColor = "black";

    })

})
const col = () => {
    bgrest();
    button[slidNum - 1].style.backgroundColor = 'black';

}
const next = () => {
    slider.style.transform = `translateX(-${slidNum * 800}px)`;
    slidNum++;
}
const prev = () => {
    slider.style.transform = `translateX(-${(slidNum - 2) * 800}px)`;
    slidNum--;
}
const first = () => {
    slider.style.transform = `translateX(0px)`;
    slidNum = 1;

}
const last = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slidNum = length;

}

console.log(slider)
console.log(left, right)
right.addEventListener('click', () => {
    console.log('right');
    slidNum < length ? next() : first();
    col()
})
left.addEventListener('click', () => {
    slidNum > 1 ? prev() : last();
    col()

})
let interval;
const startSlideShow = () => {
    interval = setInterval(() => {
        slidNum < length ? next() : first();
        col()

    }, 4300)
}
const stopslideahow = () => {
    clearInterval(interval);
}
startSlideShow();
slider.addEventListener('mouseover', stopslideahow);
slider.addEventListener('mouseout', startSlideShow);
right.addEventListener('mouseover', stopslideahow);
right.addEventListener('mouseout', startSlideShow);
left.addEventListener('mouseover', stopslideahow);
left.addEventListener('mouseout', startSlideShow);
