const cardsMain = document.querySelector(".cards");
const popupMain = document.querySelector(".login-popup-main");
const close = document.querySelector(".close");
const login = document.querySelector(".login");
login.addEventListener("click", () => {
  popupMain.style.opacity = "1";
  popupMain.style.visibility = "visible";
});
close.addEventListener("click", () => {
  popupMain.style.opacity = "0";
  popupMain.style.visibility = "hidden";
});
let cardsInfo = [
  {
    id: 0,
    image: "./Images/Card.png",
    smallParagraph: "Sarah Hogward",
    title: "Space tourism takes giant leap forward",
    paragraph:
      "Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust s...",
  },
  {
    id: 1,
    image: "./Images/Card.png",
    smallParagraph: "Sarah Hogward",
    title: "Space tourism takes giant leap forward",
    paragraph:
      "Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust s...",
  },
  {
    id: 2,
    image: "./Images/Card.png",
    smallParagraph: "Sarah Hogward",
    title: "Space tourism takes giant leap forward",
    paragraph:
      "Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust s...",
  },
];
const createCard = (img, smallP, title, paragraph, time) => {
  const cardImage = document.createElement("img");
  const cardSmallP = document.createElement("p");
  const cardTitle = document.createElement("h1");
  const cardParagraph = document.createElement("p");
  const cardTime = document.createElement("p");
  const cardDiv = document.createElement("div");
  const bottomFlex = document.createElement("div");

  const bottomSeeMore = document.createElement("div");
  const bottomSeeMoreP = document.createElement("p");
  const arrow = document.createElement("p");
  arrow.classList.add("arrow");
  cardTime.classList.add("timer");

  bottomSeeMore.classList.add("see-more");
  bottomSeeMoreP.textContent = "See More";
  arrow.textContent = ">";
  bottomSeeMore.append(bottomSeeMoreP, arrow);
  cardImage.src = img;
  cardSmallP.textContent = smallP;
  cardTitle.textContent = title;
  cardParagraph.textContent = paragraph;
  cardDiv.classList.add("card");
  bottomFlex.classList.add("bottom-flex");
  bottomFlex.append(cardTime, bottomSeeMore);

  cardDiv.append(cardImage, cardSmallP, cardTitle, cardParagraph, bottomFlex);
  cardsMain.appendChild(cardDiv);
};
const createCards = (cards) => {
  cards.map((e) =>
    createCard(e.image, e.smallParagraph, e.title, e.paragraph, e.time)
  );
};
createCards(cardsInfo);
const cardTimes = document.querySelectorAll(".timer");

cardTimes.forEach((el, index) => {
  let countDown = Math.floor(Math.random() * 25);

  const intervalId = setInterval(() => {
    el.textContent = `This card will disappear in ${countDown} seconds`;

    countDown--;
    if (countDown <= 0) {
      clearInterval(intervalId);
      el.closest(".card").style.display = "none";
    }
  }, 1000);
});
