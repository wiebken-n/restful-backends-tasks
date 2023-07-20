const numberOfPendingInvitations = document.querySelector(".number-of-pending");
const contactCardsContainer = document.querySelector(
  ".contact-cards-container"
);

window.addEventListener("load", function (event) {
  fetchDataFullSite();
});

function renderContact(contactName, contactPicture, contactConnections) {
  const contactCard = contactCardsContainer.appendChild(
    document.createElement("div")
  );
  contactCard.classList.add("contact-card");
  const btnCloseCard = contactCard.appendChild(document.createElement("btn"));
  btnCloseCard.innerText = "x";
  btnCloseCard.addEventListener("click", function (event) {
    deleteCard(btnCloseCard);
  });

  const ImgForProfilePic = contactCard.appendChild(
    document.createElement("img")
  );
  ImgForProfilePic.setAttribute("src", contactPicture);
  const pForName = contactCard.appendChild(document.createElement("p"));
  const nameText = pForName.appendChild(document.createTextNode(contactName));
  const pForMutualConnections = contactCard.appendChild(
    document.createElement("p")
  );
  const mutualConnections = pForMutualConnections.appendChild(
    document.createTextNode(contactConnections + " " + "mutual connections")
  );
  const btnConnect = contactCard.appendChild(document.createElement("button"));
  btnConnect.innerText = "Connect";
}

function deleteCard(button, contactName, contactPicture, contactConnections) {
  button.parentElement.remove();
  fetchDataForOnePerson();
}

function fetchDataFullSite() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8")
    .then((response) => response.json())
    .then((data) => {
      renderAllCards(data);
    });
}
function fetchDataForOnePerson() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=1")
    .then((response) => response.json())
    .then((data) => {
      renderOneCard(data);
    });
}
function renderOneCard(data) {
  const contactPicture = person.picture;
  const contactName = person.name.first + " " + person.name.last;
  const contactConnections = person.mutualConnections;
  renderContact(contactName, contactPicture, contactConnections);
}
function renderAllCards(data) {
  for (person of data) {
    const contactPicture = person.picture;
    const contactName = person.name.first + " " + person.name.last;
    const contactConnections = person.mutualConnections;
    renderContact(contactName, contactPicture, contactConnections);
  }
}
