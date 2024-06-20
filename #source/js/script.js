Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
});
$(".beforeAfter  .slide").twentytwenty();
//__________________________HEADER__________________________//

$(".burger-menu").click(function () {
  $(".header-menu").toggleClass("open");
});

$(".header-menu .close").click(function () {
  $(".header-menu").removeClass("open");
});

//__________________________USERS__________________________//

$(".user-image .arrow, .likes .btn").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
});

//__________________________SLIDERS__________________________//

$(".img-slider").each(function () {
  var $slider = $(this);
  var $parent = $slider.closest(".user-image");

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $parent.find(".prev"),
    nextArrow: $parent.find(".next"),
  });
});

//_____________________SIGN-UP_LOG-IN______________________//

const popupWrapper = document.querySelector(".popUp-wrapper");
const signUpCard = document.querySelector(".signUP-card");
const logInCard = document.querySelector(".logIN-card");
const resetPasswordCard = document.querySelector(".resetPassword-card");
const loginBtn = document.querySelector(".btn.login");
const signupBtn = document.querySelector(".btn.signup");
const burgerMenu = document.querySelector(".header-burger");
const closeButtons = document.querySelectorAll(".close");
const signupLink = document.querySelector(".signup-link");
const resetPassLink = document.querySelector(".reset-pass");
const header = document.querySelector(".header");

function openPopup(card) {
  popupWrapper.classList.add("active");
  document.documentElement.classList.add("no-scroll");
  signUpCard.classList.remove("active");
  logInCard.classList.remove("active");
  resetPasswordCard.classList.remove("active");
  card.classList.add("active");
  if (window.innerWidth < 768) {
    header.classList.add("hidden");
  }
}

function closePopup() {
  popupWrapper.classList.remove("active");
  document.documentElement.classList.remove("no-scroll");
  signUpCard.classList.remove("active");
  logInCard.classList.remove("active");
  resetPasswordCard.classList.remove("active");

  header.classList.remove("hidden");
}

loginBtn.addEventListener("click", () => {
  openPopup(logInCard);
});

signupBtn.addEventListener("click", () => {
  openPopup(signUpCard);
});

burgerMenu.addEventListener("click", () => {
  openPopup(logInCard);
});

signupLink.addEventListener("click", () => {
  openPopup(signUpCard);
});

resetPassLink.addEventListener("click", () => {
  openPopup(resetPasswordCard);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closePopup();
  });
});

popupWrapper.addEventListener("click", (event) => {
  if (
    !signUpCard.contains(event.target) &&
    !logInCard.contains(event.target) &&
    !resetPasswordCard.contains(event.target)
  ) {
    closePopup();
  }
});

const showPasswordButtons = document.querySelectorAll(".show-password");
showPasswordButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const passwordInput = this.previousElementSibling;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.classList.add("open");
    } else {
      passwordInput.type = "password";
      this.classList.remove("open");
    }
  });
});

const enableSubmitButton = (form) => {
  const inputs = form.querySelectorAll(
    'input[type="email"], input[type="password"]'
  );
  const submitButton = form.querySelector(".submit.btn");

  const checkInputs = () => {
    const allFilled = Array.from(inputs).every(
      (input) => input.value.trim() !== ""
    );
    submitButton.disabled = !allFilled;
  };

  inputs.forEach((input) => {
    input.addEventListener("input", checkInputs);
  });

  checkInputs();
};

enableSubmitButton(document.querySelector(".signUP-card form"));
enableSubmitButton(document.querySelector(".logIN-card form"));
enableSubmitButton(document.querySelector(".resetPassword-card form"));

//__________________________ADVERTISING_________________________//

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    let popup = document.querySelector(".advertising-wrapper");
    let closeButton = document.querySelector(".advertising-close-timer");
    let timerSpan = closeButton.querySelector(".timer");
    let countdown = 5;

    popup.classList.add("show");

    let timerInterval = setInterval(function () {
      countdown--;
      timerSpan.textContent = countdown;

      if (countdown === 0) {
        clearInterval(timerInterval);
        closeButton.classList.remove("disabled");
        closeButton.classList.add("enabled");
      }
    }, 1000);

    closeButton.addEventListener("click", function () {
      if (countdown === 0) {
        popup.classList.remove("show");
      }
    });
  }, 5000);
});
