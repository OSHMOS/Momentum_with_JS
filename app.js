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

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copy!");
}

function handleWindowOffline() {
  alert("SOS. No WIFI!");
}

function handleWindowOnline() {
  alert("WIFI is connected");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);
