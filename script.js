let StartBtn = document.getElementById("btnGame");
let intro = document.getElementById("Div_Video");
let ThePage = document.getElementById("Page");
window.onload = function () {
  window.scrollTo({
    left: 0,
    top: 0,
  });
};
StartBtn.addEventListener("click", function () {
  intro.style.display = "none";
  StartBtn.style.display = "none";
  ThePage.style.display = "block";
});
let musicSidi = document.getElementById("GtaSidi");
let music = document.getElementById("music");

function play() {
  music.play();
  music.classList.add("play");
}
function pause() {
  music.pause();
  music.classList.remove("play");
}

musicSidi.addEventListener("click", function () {
  musicSidi.classList.toggle("animat");

  const isplaying = music.classList.contains("play");

  if (isplaying) {
    pause();
  } else {
    play();
  }
});
