const quoteBtn = document.querySelector(".btn-get-quote");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

const defaultQuote = "Utinni.";
const defaultAuthor = "Anonymous resident of Bestine, Tatooine";

window.addEventListener("load", (event) => {
  quoteText.innerText = defaultQuote;
  quoteAuthor.innerText = defaultAuthor;
});

quoteBtn.addEventListener("click", function (event) {
  let promise = fetch("https://dummy-apis.netlify.app/api/quote");
  let promise2 = promise.then((response) => {
    return response.json();
  });

  promise2.then((data) => {
    const quote = data.quote;
    const author = data.author;
    quoteText.innerText = quote;
    quoteAuthor.innerText = author;
  });
});
