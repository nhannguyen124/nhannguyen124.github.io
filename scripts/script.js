// script.js

// Xử lý sự kiện khi nhấn nút "Get API Key"
document.getElementById("get-key").addEventListener("click", async () => {
    try {
        // Gửi yêu cầu đến server Flask
        const response = await fetch("https://your-app.onrender.com/generate_key"); // Thay URL này bằng URL của Flask app
        if (!response.ok) {
            throw new Error("Không thể kết nối tới server. Vui lòng kiểm tra lại!");
        }

        // Lấy dữ liệu JSON từ server
        const data = await response.json();

        // Hiển thị API key ra màn hình
        alert(`Your API Key: ${data.key}`);
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
        alert("Đã xảy ra lỗi khi lấy API key. Vui lòng thử lại!");
    }
});
