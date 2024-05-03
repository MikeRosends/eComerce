// The "pro-container" div can stay in the HTML file

// Select the "pro-container" div

// Create each "pro(duct)" div dinamicly

const proContainer = $(".pro-container");

const productDiv = $("<div>", {
  class: "pro",
});

const img = $("<img>", {
  src: "img/products/f1.jpg",
  onclick: "window.location.href='sproduct.html'",
});

const descDiv = $("<div>", {
  class: "des",
});

const starDiv = $("<div>", {
  class: "star",
});

const starIcon = $("<i>", { class: "fas fa-star" });
const cartIcon = $("i", { class: "fa-solid fa-cart-shopping cart" });

// Append cartIcon to Anchor Tag
cartIcon.addAtribute;

// Appending stars to the starDiv
starDiv.append(starIcon);

// Appending description to the description div (descDiv)
descDiv.append(
  "<span>adidas</span>",
  "<h5>Cartoon Astronaut Tshirts</h5>",
  starDiv,
  "<h4>$78</h4>"
);

// Appending img to productDiv
productDiv
  .append(img)
  .append(
    descDiv,
    `<a><i class="fa-solid fa-star favorite"></i></a>`,
    `<a><i class="fa-solid fa-cart-shopping cart"></i></a>`
  );

// Appending the productDiv to the proContainer
proContainer.append(productDiv);
