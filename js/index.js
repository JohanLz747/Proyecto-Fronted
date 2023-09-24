class Product {
    constructor(name, price , amoung) {
        this.name = name;
        this.price = price;
        this.amoung = amoung;
    }
}
class UI {

    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card text-center mb-4 ">
           <div class="card-body">
             <strong>Product Name</strong>: ${product.name}
             <strong>Product Price</strong>: S/.${product.price}
             <strong>Product Amoung</strong>: ${product.amoung}
             <button class="btn btn-danger" name="boton"> delete</button>
           </div>
        </div>
        `;
        productList.appendChild(element);
    }
    deleteProduct(element) {
        if(element.name === 'boton') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Delete','info')/*color alert*/
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
document.getElementById('product-from')
  .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const amoung = document.getElementById('amoung').value;


        const product = new Product(name, price, amoung);

        const ui = new UI();
        ui.addProduct(product);
        ui.showMessage('saved product','success');
        document.getElementById('product-from').reset()/*reset form*/
        
         /*message*/
        e.preventDefault();
        
  });
/*Delete */
  document.getElementById('product-list') 
 .addEventListener('click', function (e) {
    const ui = new UI(); 
    ui.deleteProduct(e.target);

 })

 const user = JSON.parse(localStorage.getItem('login_success')) || false
 if(!user){
     window.location.href = 'login.html'
 }
 
 const logout = document.querySelector('#logout')
 
 logout.addEventListener('click', ()=>{
     alert('Hasta pronto!')
     localStorage.removeItem('login_success')
     window.location.href = 'login.html'
 })