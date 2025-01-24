// script.js
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    saveCart();
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

// Hàm lưu giỏ hàng vào Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm tải giỏ hàng từ Local Storage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Gọi loadCart() khi tải trang
window.onload = loadCart;

// Thêm sự kiện click cho các nút "Mua Ngay"
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText;
        const price = parseFloat(button.parentElement.querySelector('p').innerText.replace('Giá: ', '').replace(' Robux', ''));
        addToCart(productName, price);
    });
});
