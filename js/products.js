
const formProduct = document.querySelector("#formProduct");
formProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameProduct = document.querySelector("#nameProduct").value;
  const priceProduct = document.querySelector("#priceProduct").value;
  const amountProduct = document.querySelector("#amountProduct").value;
  let products = JSON.parse(localStorage.getItem("products"));

  const item = {
    name: nameProduct,
    price: priceProduct,
    amount: amountProduct,
  };

  if (!nameProduct && !priceProduct && !amountProduct) return;

  if (products) {
    products = [...products, item];
  } else {
    products = [item];
  }

  localStorage.setItem("products", JSON.stringify(products));
});


//const GetProduct = document("#getProduct");
