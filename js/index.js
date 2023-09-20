
/*index
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
*/

class Product {
    constructor(name, price , amoung) {
        this.name = name;
        this.price = price;
        this.amoung = amoung;
    }
    addProduct() {

    }

}
class UI {
    addProduct(){

    }
    deletyeProduct(){
        
    }
    message(){
        
    }
}

//DOOM
document.getElementById('product-from')
  .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const amoung = document.getElementById('amoung').value
        console.log(name, price ,amoung);
       const product = new Product(name, price, amoung);
        e.preventDefault();
  })
