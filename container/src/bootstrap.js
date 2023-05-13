import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "carts/CartShow";

console.log("container");

const El_Product_Container = document.querySelector("#product-container");
const El_Cart_Container = document.querySelector("#cart-container");
mountProducts(El_Product_Container);
mountCart(El_Cart_Container);
