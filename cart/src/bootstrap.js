import faker from "faker";

const mount = (El) => {
  const cartText = `<div style="margin-top:50px;">${faker.random.number()} items in your cart</div>`;

  El.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const El = document.querySelector("#dev-cart");
  //Assuming this El is only present in cart running in isolation, and is not present in container(host);
  if (El) {
    mount(El);
  }
}

export { mount };
