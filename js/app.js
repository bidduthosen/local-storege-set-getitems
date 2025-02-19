const addProduct = () => {
    const product = document.getElementById('key').value;
    const quantiry = document.getElementById('value').value;
    displayProduct(product, quantiry);
    document.getElementById('key').value = '';
    document.getElementById('value').value = '';
    saveProductToLocalStorege(product, quantiry)
}

let sum = 0;
const displayProduct = (product, quantiry) =>{
    sum++;
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.className = 'font-semibold text-xl text-blue-600'
    li.innerText = `${sum}. ${product}: ${quantiry}`;
    productContainer.appendChild(li);
};


const getStoredShopingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorege = (product, quantiry) =>{
    const cart = getStoredShopingCart();
    cart[product] = quantiry;
    const cartStringifed = JSON.stringify(cart);
    localStorage.setItem("cart" ,cartStringifed);

}

const displayProductShowLocalStorege = () =>{
    const saveCart = getStoredShopingCart();
    for(let product in saveCart){
        const quantiry = saveCart[product]
        displayProduct(product, quantiry)
    }
};
displayProductShowLocalStorege()
