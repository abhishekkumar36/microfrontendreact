import faker from "faker";

function mount(El) {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  El.innerHTML = `<div>${products}</div>`;

  //   console.log(products);
}

if (process.env.NODE_ENV === "development") {
  const El = document.querySelector("#dev-products");
  console.log(El);
  if (El) {
    mount(El);
  }
}

export { mount };
