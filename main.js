const img = document.querySelector(".image");
const percent = document.querySelector(".percent");
img.style.filter = "blur(50px)";
let blur_count = 50;

const timer = setInterval(function () {
  console.log(blur_count);
  if (blur_count >= 0) {
    img.style.filter = `blur(${blur_count / 2}px)`;
    percent.innerHTML = `${100 - blur_count * 2}%`;
    percent.style.opacity = `${blur_count / 2}%`;
  }
  if (blur_count < 0) clearTimeout(timer);
  blur_count -= 1;
}, 60);
