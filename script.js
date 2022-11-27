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
  ThePage.classList.replace("allpage", "pageActive");
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

// link icone
let facebook = document.getElementById("fa");
facebook.onclick = function () {
  window.location.href =
    "https://www.facebook.com/profile.php?id=100069722753417";
};
let whtssap = document.getElementById("wht");
whtssap.onclick = function () {
  window.location.href = "https://wtsi.me/2120687802700";
};
let linkdin = document.getElementById("in");
linkdin.onclick = function () {
  window.location.href =
    "https://www.linkedin.com/in/yassin-ait-elhardouf-676974247/";
};
let instagram = document.getElementById("insta");
instagram.onclick = function () {
  window.location.href = "https://www.instagram.com/yassin_elhardofi/";
};
let youtube = document.getElementById("yo");
youtube.onclick = function () {
  window.location.href =
    "https://www.youtube.com/channel/UCz5Cvr0fJBdyq86Sxc-a7lg";
};
let github = document.getElementById("git");
github.onclick = function () {
  window.location.href = "https://github.com/Yassin6up";
};

let tweter = document.getElementById("twit");
tweter.onclick = function () {
  window.location.href = "https://twitter.com/yassinyassinex4";
};

// for get formes

let form_in = document.getElementById("form2");
let sign_in = document.getElementById("btn_Sign");
sign_in.addEventListener("click", () => {
  form_in.classList.toggle("active");
  sign_in.classList.toggle("signActive");
});
let sign_up = document.getElementById("btn_SginUp");
let form_up = document.getElementById("form1");
sign_up.addEventListener("click", () => {
  form_up.classList.toggle("active");
  sign_up.classList.toggle("signActive");
});
let signUpText = document.getElementById("newAccount");
signUpText.addEventListener("click", () => {
  form_up.classList.toggle("active");
  sign_up.classList.toggle("signActive");
});
// tag inputs
let Password_in = document.getElementById("password_in");
//  for inputs

let lock = document.getElementById("lock");

let toggel = document.getElementById("iconeDiv");
toggel.addEventListener("click", () => {
  lock.classList.toggle("lockNone");

  if (Password_in.type === "password") {
    Password_in.type = "text";
  } else {
    Password_in.type = "password";
  }
});
let Password_up = document.getElementById("Password_up");
let toggle1 = document.getElementById("iconeDiv1");
let lock1 = document.getElementById("lock1");
toggle1.addEventListener("click", () => {
  lock1.classList.toggle("lockNone1");

  if (Password_up.type === "password") {
    Password_up.type = "text";
  } else {
    Password_up.type = "password";
  }
});

let Password_up_Confirm = document.getElementById("Password_up_confirm");
let toggle2 = document.getElementById("iconeDiv2");
let lock2 = document.getElementById("lock2");
toggle2.addEventListener("click", () => {
  lock2.classList.toggle("lockNone2");

  if (Password_up_Confirm.type === "password") {
    Password_up_Confirm.type = "text";
  } else {
    Password_up_Confirm.type = "password";
  }
});
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page4 = document.getElementById("page4");
window.onscroll = () => {
  console.log(scrollY);
  if (scrollY >= 400 && scrollY <= 1000) {
    page2.style.transition = "0.5s all";
    page2.style.boxShadow = "inset 0 0 60px  var(--BtnColor--)";
  } else if (scrollY >= 1000 && scrollY <= 1500) {
    page2.style.boxShadow = "none";
    page3.style.transition = "0.5s all";
    page3.style.boxShadow = "inset 0 0 60px  var(--BtnColor--)";
  } else if (scrollY >= 1600 && scrollY <= 2100) {
    page2.style.boxShadow = "none";
    page3.style.boxShadow = "none";
    page4.style.transition = "0.5s all";
    page4.style.boxShadow = "inset 0 0 60px  var(--BtnColor--)";
  } else if (scrollY >= 2200 && scrollY <= 2700) {
    page2.style.boxShadow = "none";
    page3.style.boxShadow = "none";
    page4.style.boxShadow = "none";
    page5.style.transition = "0.5s all";
    page5.style.boxShadow = "inset 0 0 60px  var(--BtnColor--)";
  } else {
    page5.style.boxShadow = "none";
    page4.style.boxShadow = "none";
    page3.style.boxShadow = "none";
    page2.style.boxShadow = "none";
  }
};
