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

// Xử lý nạp thẻ
document.getElementById('recharge-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    const cardCode = document.getElementById('card-code').value;
    
    // Kiểm tra mã thẻ (thay thế bằng logic kiểm tra thực tế nếu cần)
    if (validateCardCode(cardCode)) {
        document.getElementById('message').innerText = "Nạp thẻ thành công!";
    } else {
        document.getElementById('message').innerText = "Mã thẻ không hợp lệ. Vui lòng thử lại.";
    }
});

// Hàm giả định kiểm tra mã thẻ (thay thế bằng logic thực tế)
function validateCardCode(code) {
    // Giả sử mã thẻ hợp lệ nếu nó có độ dài 10 ký tự
    return code.length === 10;
}
