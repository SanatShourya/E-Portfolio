// template_s9d4pii
// service_li8ih0j
// 1YwFicqt4P8IYdWJN

function contact(event) {
  event.preventDefault(); // allows to not reload quickly
  const loading = document.querySelector(".form__loading--div");
  const success = document.querySelector(".form__success");
  loading.classList += " visible"; // as soon as the form is submitted, loading screen appears
  emailjs //then we are sending the info from the form to my email
    .sendForm(
      "service_li8ih0j",
      "template_s9d4pii",
      event.target,
      "1YwFicqt4P8IYdWJN"
    )
    .then(() => {
      loading.classList.remove("visible"); // once the email is sent, we remove the loading screen and bring forward the success screen
      success.classList += " visible1";
    })
    .catch(() => {
      loading.classList.remove("visible");
      alert(
        "The email service is temporarily unavailable. Please contact me through my email directly at sanatshourya100@gmail.com"
      );
    });
}

function backgroundMove(event) {
  const scaleVal = 20;
  const shape = document.getElementsByClassName("shapes");
  const x = event.clientX / scaleVal;
  const y = event.clientY / scaleVal;

  for (let i = 0; i < shape.length; i++) {
    if (i % 2 == 0) {
      shape[i].style.transform = `translate(${x}px, ${y}px)`;
    } else {
      shape[i].style.transform = `translate(${-x}px, ${-y}px)`;
    }
  }
}

let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

let toggleVal = false;
function toggleContact() {
  const contact = document.getElementsByClassName("contact__wrapper")[0];
  const success = document.querySelector(".form__success");
  const form = document.getElementById("contact__form");
  const navbar = document.getElementsByClassName("navbar")[0];
  const aboutMe = document.getElementsByClassName("aboutme__description")[0];
  const aboutMe1 = document.getElementsByClassName("aboutme__display")[0];

  if (toggleVal == false) {
    navbar.classList += " aboutme__closed";
    aboutMe.classList += " aboutme__closed";
    aboutMe1.classList += " aboutme__closed";
    contact.classList += " contact__wrapper--open";
    success.classList.remove("visible1");
    form.reset();
    toggleVal = true;
  } else {
    contact.classList.remove("contact__wrapper--open");
    navbar.classList.remove("aboutme__closed");
    aboutMe.classList.remove("aboutme__closed");
    aboutMe1.classList.remove("aboutme__closed");
    toggleVal = false;
  }
}
