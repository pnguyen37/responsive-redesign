const appetizers = [
  {
    name: "Falafel Appetizer 6PC",
    desc: "Made from ground chickpeas, garlic, vegetables with our traditional organic spices, fried in pure vegetable oil. Served with hummus, tzatziki and syrian bread only.",
    price: "$6.94",
    image: "assets/falafel.jpg",
    gf: true,
    pop: true,
  },
  {
    name: "Grape Leaves Appetizer 6PC",
    desc: "Stuffed with rice, diced parsley and onions, cooked in olive oil, Served with yogurt cucumber sauce",
    price: "$6.94",
    image: "assets/stuffed_grape_leaves.jpg",
    gf: true,
  },
  {
    name: "Hummus",
    desc: 'No dairy products. Unique blend of chickpeas, tahini "sesame seed paste" lemon juice, salt and fresh garlic. Served with syrian bread.',
    price: "8oz - $5.09 /16oz - $8.33",
    image: "assets/hummus.jpg",
    gf: true,
    pop: true,
  },
  {
    name: "Tabouleh",
    desc: "The most famous Middle Eastern salad. Made of fresh chopped parsley, cracked wheat, tomato, onions, olive oil and lemon juice",
    price: "8oz - $5.09 /16oz - $8.33",
  },
  {
    name: "Tzatziki",
    desc: "A blend of yogurt, sour cream, cucumber, fresh garlic, dried mint and dill. Served with syrian bread",
    price: "8oz - $5.09 /16oz - $8.33",
    gf: true,
  },
  {
    name: "Baba Ganoush",
    desc: "Homemade puree of smoky grilled eggplant and tahini (sesame seed paste) blended with lemon juice and freshly crushed garlic. Served with syrian breaded",
    price: "8oz - $5.09 /16oz - $8.33",
    gf: true,
  },
  {
    name: "Jedra",
    desc: "Rice and lentils sauteed onions in olive oil & spices",
    price: "$4.63",
    gf: true,
  },
];

// Function to generate components
function generateComponents(data) {
  return data
    .map(
      (item) => `
    <div class="menuItem">
        <div class="menuTextContainer">
            <h4 class="foodName">${item.name}</h4>
            <p class="foodDesc">${item.desc}</p>
            <p class="price">${item.price}</p>
            <div class="buttonContainer">
                <button class="secondaryBtnColor addToOrder secondaryHover">
                    <img class="addIcon" src="assets/plus.png"></img>
                    <p class="buttonText">Add to Order</p>
                </button>
                 ${
                   item.gf
                     ? `<img class="smallIcon" src="assets/gluten_free.png"> </img>`
                     : ""
                 }
                ${
                  item.pop
                    ? `<img class="smallIcon" src="assets/thumbs_up.png"> </img>`
                    : ""
                }
            </div>
        </div>
        ${item.image ? `<img class="menuImage" src=${item.image}></img>` : ""}
    </div>
  `
    )
    .join("");
}

const appetizerItems = document.getElementById("appetizers");
appetizerItems.innerHTML = generateComponents(appetizers);
