let header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  if (this.oldScroll > this.scrollY) {
    header.style.top = "0px";
    this.oldScroll = this.scrollY;
  } else {
    header.style.top = "-100px";
    this.oldScroll = this.scrollY;
  }
});
