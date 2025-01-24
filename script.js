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
    const cardCode = document.getElementById('card-code').value.trim(); // Lấy mã thẻ cào và loại bỏ khoảng trắng

    // Kiểm tra mã thẻ cào (thay thế bằng logic kiểm tra thực tế nếu cần)
    if (validateCardCode(cardCode)) {
        document.getElementById('message').innerText = "Nạp thẻ cào thành công!";
        // Logic xử lý sau khi nạp thẻ thành công, như cập nhật số dư
    } else {
        document.getElementById('message').innerText = "Mã thẻ cào không hợp lệ. Vui lòng thử lại.";
    }
});

// Hàm giả định kiểm tra mã thẻ cào (thay thế bằng logic thực tế)
function validateCardCode(code) {
    // Giả sử mã thẻ cào hợp lệ nếu nó có độ dài 10 ký tự
    return code.length === 10; // Kiểm tra chiều dài, bạn có thể thay đổi theo yêu cầu của bạn
}
