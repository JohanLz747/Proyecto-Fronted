class Product {
  constructor(name, price, amoung) {
    this.name = name;
    this.price = price;
    this.amoung = amoung;
  }
}
const addProductStorage = (product) => {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const id = Date.now().toString(30);

  const productItem = {
    id,
    name: product.name,
    price: product.price,
    amoung: product.amoung,
  };

  products = [...products, productItem];
  localStorage.setItem("products", JSON.stringify(products));
};
const removeProductStorage = (product) => {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.filter((item) => item.id === product.id);
  localStorage.setItem("products", JSON.stringify(products));
};
const uploadProductList = () => {
  let storageProducts = JSON.parse(localStorage.getItem("products")) || [];

  if (storageProducts.length > 0)  {
    storageProducts.map((item) => {
      const product = new Product(item.name, item.price, item.amoung);
      const ui = new UI();
      ui.addProduct(product);
    });
  }
};
class UI {
  addProduct(product) {
    const productList = document.getElementById("container-products");
    const element = document.createElement("div");
    element.innerHTML = `       
        <div class="card ms-2 mb-2" style="width: 10rem;">
          <img src="./src/producto.png " class="card-img-top " alt="...">
          <div class="card-body">
            <h5 class="card-title">Name:${product.name}</h5>
            <button class="btn btn-danger" type="button" name="boton"> delete</button>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> Price: S/.${product.price}</li>
            <li class="list-group-item"> Amoung : ${product.amoung}</li>
          </ul>
        </div>
        `;
    productList.appendChild(element);
  }
  deleteProduct(element) {
    if (element.name === "boton") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Delete", "info"); /*color alert*/
    }
  }
  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    container.insertBefore(div, app);

    // Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}

//DOOM
document
  .getElementById("product-from")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const amoung = document.getElementById("amoung").value;
    const product = new Product(name, price, amoung);

    const ui = new UI();
    addProductStorage(product);
    ui.addProduct(product);
    ui.showMessage("saved product", "success");
    document.getElementById("product-from").reset(); /*reset form*/

    /*message*/
    e.preventDefault();
  });
/*Delete */
document.getElementById("container-products").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteProduct(e.target);
});

uploadProductList();
const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (!user) {
  window.location.href = "login.html";
}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  alert("Hasta pronto!");
  localStorage.removeItem("login_success");
  window.location.href = "login.html";
});
