const numberOfPendingInvitations = document.querySelector(".number-of-pending");
const contactCardsContainer = document.querySelector(
  ".contact-cards-container"
);

window.addEventListener("load", function (event) {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
