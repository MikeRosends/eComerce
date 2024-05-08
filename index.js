// Async Request
async function fetchProducts() {
  const data = await fetch("http://127.0.0.1:3000/items");
  const product = await data.json();
  console.log(product);
  console.log("Number of items: " + product.length);

  // Containers
  const proContainer = $("<div>", {
    class: "pro",
  });
  const proDiv = $(".pro-container");
  const descDiv = $("<div>", {
    class: "des",
  });
  const starDiv = $("<div>", {
    class: "star",
  });

  // Elements
  const img = $("<img>", {
    src: "img/products/f1.jpg",
    onclick: "window.location.href='sproduct.html'",
  });
  const starIcon = `<i class="fas fa-star"></i>`;
  const starAnchor = `<a href="#"><i class="fa-solid fa-star favorite"></i></a>`;
  const cartAnchor = `<a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>`;


  // Function that generates each card
  const generateProductContainers = function (num) {

    // Create a new div for each element



    // Appending stars to the starDiv
    const addStars = function (num) {
      descDiv.append(starDiv);
      for (let i = 0; i < num; i++) {
        starDiv.append(starIcon);
      }
    };

    // Appending description to the description div (descDiv)

    const addDesc = function (brand, name, price) {
      descDiv.append(`<span>${brand}</span>`, `<h5>${name}</h5>`);
      addStars(product[num].rating);
      descDiv.append(`<h4>$${price}</h4>`);
    };
    addDesc(product[num].brand, product[num].name, product[num].price);

    // Adding elements to the product div
    const createProdCard = function (
      mainContainer,
      secContainer,
      img,
      descCont,
      button1,
      button2
    ) {
      mainContainer.append(secContainer);
      secContainer.append(img, descCont, button1, button2);
    };

    createProdCard(proDiv, proContainer, img, descDiv, starAnchor, cartAnchor);

  };

  let num = 0

  for(let i = 0; i < product.length - 1; i++) {
    num = num + 1;
    generateProductContainers(num);
  }
}

fetchProducts();
