const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];

const image = document.querySelector("#image");
const name = document.querySelector("#name");
const role = document.querySelector("#role");
const reviewText = document.querySelector("#reviewTexts");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".btn");

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function () {
  let item = reviews[currentIndex];
  showReview(item);
});

prev.addEventListener("click", function () {
  if (currentIndex > 0 && currentIndex < reviews.length) {
    currentIndex--;
    let item = reviews[currentIndex];
    showReview(item);
  } else if (currentIndex == 0) {
    currentIndex = reviews.length - 1;
    let item = reviews[currentIndex];
    showReview(item);
  }
});

next.addEventListener("click", function () {
  if (currentIndex >= 0 && currentIndex < reviews.length - 1) {
    currentIndex++;
    let item = reviews[currentIndex];
    showReview(item);
  } else if (currentIndex == reviews.length - 1) {
    currentIndex = 0;
    let item = reviews[currentIndex];
    showReview(item);
  }
});

random.addEventListener("click", function () {
  let item = reviews[Math.floor(Math.random() * reviews.length)];
  showReview(item);
});

function showReview(item) {
  image.src = item.img;
  name.textContent = item.name;
  role.textContent = item.job;
  reviewText.textContent = item.text;
}
