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

// Xử lý nạp thẻ cào
document.getElementById('recharge-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    const serialCode = document.getElementById('serial-code').value.trim(); // Lấy số seri
    const cardCode = document.getElementById('card-code').value.trim(); // Lấy mã thẻ cào

    // Kiểm tra số seri và mã thẻ cào (thay thế bằng logic kiểm tra thực tế nếu cần)
    if (validateCard(serialCode, cardCode)) {
        document.getElementById('message').innerText = "Nạp thẻ cào thành công!";
        // Logic xử lý sau khi nạp thẻ thành công, như cập nhật số dư
    } else {
        document.getElementById('message').innerText = "Số seri hoặc mã thẻ cào không hợp lệ. Vui lòng thử lại.";
    }
});

// Hàm giả định kiểm tra số seri và mã thẻ cào (thay thế bằng logic thực tế)
function validateCard(serial, code) {
    // Giả sử mã thẻ cào hợp lệ nếu nó có độ dài 10 ký tự và số seri có độ dài 8 ký tự
    return serial.length === 8 && code.length === 10; // Kiểm tra chiều dài
}
