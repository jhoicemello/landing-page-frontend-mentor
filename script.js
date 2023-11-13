const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Close Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Open Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


//checagem e-mail

const btn = document.querySelector("#send");
const input = document.querySelector("#email")
const error = document.querySelector(".error");
const empty = "This field is required";
const invalidEmail = "Please insert a valid email";
let hasError = new Boolean();


btn.addEventListener("click", function(e){
  e.preventDefault();
  checkInputs();
})
function checkInputs() {
  const email = document.querySelector("#email");

  if(email.value == "") {
      error.textContent = empty;
      hasError = true;
  } 
  else if (!email.value.includes("@")) {
      error.textContent = invalidEmail;
      hasError = true;
  }
  else if (!email.value.includes(".")) {
    error.textContent = invalidEmail;
    hasError = true;
}
  
  else {
      error.textContent = "";
      hasError = false;
  }

  alteraEstilos();
}



function alteraEstilos() {

  if(hasError === true) {
      input.classList.add("error");
  }
  else {
      input.classList.remove("error");
  }
}
