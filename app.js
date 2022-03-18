const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked!");
}

function handleMouseEnter() {
  console.log("mouse is here!");
}

function handleMouseLeave() {
  console.log("mouse is gone");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
