let dragMe = document.querySelector(".drag-me");
(wrap = document.getElementById("wrap")),
  (photo = document.querySelectorAll(".photo")),
  (text = document.querySelectorAll(".text")),
  (burger = document.querySelector(".burger")),
  (mobileMenu = document.querySelector(".mobile-menu"));

burger.addEventListener("click", () => {
  burger.classList.add("display-n");1
  burger.classList.add("hide-opacity");
  mobileMenu.classList.remove("display-n");
  setTimeout(() => {
    mobileMenu.classList.add("show-mobile-menu");
  }, 10);
});
document.addEventListener("click", (event) => {
  let target = event.target;
  let its_menu = target == mobileMenu || mobileMenu.contains(target);
  let menu_is_active = mobileMenu.classList.contains("show-mobile-menu");
  if (!its_menu && menu_is_active) {
    mobileMenu.classList.remove("show-mobile-menu");
    setTimeout(() => {
      mobileMenu.classList.add("display-n");
    }, 300);
    burger.classList.remove("display-n");
    setTimeout(() => {
      burger.classList.remove("hide-opacity");
    }, 300);
  } else return false;
});
for (const i of text) {
  i.addEventListener("mouseover", () => {
    dragMe.style.opacity = 1;
    dragMe.style.zIndex = 999;
  });
}
for (const i of text) {
  i.addEventListener("mouseout", () => {
    dragMe.style.opacity = 0;
  });
}
for (const i of text) {
  i.addEventListener("mousemove", (event) => {
    dragMe.style.left = event.pageX + 20 + "px";
    dragMe.style.top = event.pageY - 20 + "px";
  });
}

document.addEventListener("mousemove", (event) => {
  let posX = Math.round(event.pageX - 700) / -50,
    posY = Math.round(event.pageY - 700) / -50;
  if (document.documentElement.clientWidth > 1024) {
    for (const i of photo) {
      i.style.left = posX + "px";
      i.style.top = posY + "px";
    }
  }
});
let galleryThumbs = new Swiper(".gallery-thumbs", {
  loopedSlides: 1,
  effect: "fade",
  speed: 900,
  watchSlidesVisibility: false,
  watchSlidesProgress: false
});
let galleryTop = new Swiper(".gallery-top", {
  loopedSlides: 1,
  thumbs: {
    swiper: galleryThumbs
  }
});
