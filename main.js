let header = document.querySelector("header");
let scroll1 = window.screenY;

document.addEventListener("scroll", () => {
  if (scroll1 > this.scrollY) {
    header.style.top = "0px";
    scroll1 = this.scrollY;
  } else {
    header.style.top = "-100px";
    scroll1 = this.scrollY;
  }
});
