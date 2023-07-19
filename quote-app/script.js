const quoteBtn = document.querySelector(".btn-get-quote");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

let randomQuoteText = "this is a random quote. yay";
let randomQuoteAuthor = "this is some random dude. yay";

let promise = fetch("https://dummy-apis.netlify.app/api/quote");
promise.then((response) => {
  return response.json();
});
console.log(promise);

quoteBtn.addEventListener("click", function (event) {
  renderQuote();
});

function renderQuote() {
  quoteText.appendChild(document.createTextNode(randomQuoteText));
  quoteAuthor.appendChild(document.createTextNode(randomQuoteAuthor));
}
