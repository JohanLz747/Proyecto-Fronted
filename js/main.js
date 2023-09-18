//LOGIN
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (!validUser) {
    return alert("Usuario y/o contraseña incorrectos!");
  }
  alert(`Bienvenido ${validUser.name}`);
  localStorage.setItem("login_success", JSON.stringify(validUser));
  window.location.href = "index.html";
});

// PRODUCTS
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
