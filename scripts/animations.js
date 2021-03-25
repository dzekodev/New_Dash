//menu animation---------------------------
$('.menu-icon-toggle').on('click', function(e) {
    $('body').toggleClass('open');
    e.preventDefault();
  });

//login animation----------------------
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

//Contact------------------------------------
var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: {}
});

//slider-----------------------------------
