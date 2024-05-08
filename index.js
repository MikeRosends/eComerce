// Async Request
async function fetchProducts() {
  const data = await fetch("http://127.0.0.1:3000/items");
  const product = await data.json();
  console.log(product);
  console.log("Number of items: " + product.length);

  // Containers
  const productsContainer = (clazz) => $(`.${clazz}`);
  const productCard = (id) =>
    $("<div>", {
      class: "pro",
      id: `product-${id}`,
    });
  const descDiv = (id) =>
    $("<div>", {
      class: "des",
      id: `product-desc-${id}`,
    });
  const starDiv = (id) =>
    $("<div>", {
      class: "star",
      id: `product-star-${id}`,
    });

  // Elements
  const img = (id) =>
    $("<img>", {
      onclick: "window.location.href='sproduct.html'",
      id: `product-img-${id}`,
    });
  const starIcon = `<i class="fas fa-star"></i>`;
  const starAnchor = `<a href="#"><i class="fa-solid fa-star favorite"></i></a>`;
  const cartAnchor = `<a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>`;

  // Function that generates each card
  const generateProductContainers = function (num, targetContainer) {
    const productCardObj = productCard(num, targetContainer);
    const starDivObj = starDiv(num);
    const descDivObj = descDiv(num);
    const imgObj = img(num);
    // Append productCard to productsContainer
    productCardObj.appendTo(productsContainer(targetContainer)[0]);

    // Append img, and descriptionDiv to the productCard
    const addImgAndDescDiv = () =>
      productCardObj.append(imgObj, descDivObj, starAnchor, cartAnchor);

    // Adding the source attribute to the image
    const addIMG_path = (path) => imgObj.attr("src", path);

    // Append starsDiv to the description div
    const addStarDivToDescDiv = () => starDivObj.appendTo(descDivObj);

    // Appending stars to the starDiv
    const addStarsToStarDiv = (num) => {
      let i = 0;
      for (i = 0; i < num; i++) {
        starDivObj.append(starIcon);
      }
    };

    // Appending description to the description div (descDivObj)
    const addDescriptionToDescDiv = (brand, name, price) => {
      descDivObj.append(brand, name);
      addStarDivToDescDiv();
      addStarsToStarDiv(product[num].rating);
      descDivObj.append(price);
    };

    // Calling the functions in the correct order
    const generateCards = function () {
      addIMG_path(`http://127.0.0.1:8080/img/products/f${num}.jpg`);
      addImgAndDescDiv();
      addDescriptionToDescDiv(
        `<span>${product[num].brand}</span>`,
        `<h5>${product[num].name}</h5>`,
        `<h4>$${product[num].price}</h4>`
      );
    };

    generateCards();
  };

  // Incrementable number to load each product card
  let num = 0;

  for (let i = 0; i < product.length; i++) {
    generateProductContainers(num, "pro-container-1");
    generateProductContainers(num++, "pro-container-2");
  }
}

fetchProducts();
