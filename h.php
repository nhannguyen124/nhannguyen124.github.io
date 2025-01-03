<?php
// Kết nối đến cơ sở dữ liệu
$servername = "localhost"; // Địa chỉ máy chủ MySQL
$username = "username"; // Tên người dùng
$password = "password"; // Mật khẩu
$dbname = "database_name"; // Tên cơ sở dữ liệu

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Lấy HWID từ tham số URL
if (isset($_GET['hwid'])) {
    $hwid = $_GET['hwid'];

    // Kiểm tra HWID trong cơ sở dữ liệu
    $sql = "SELECT api_key FROM keys WHERE hwid = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $hwid);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Nếu HWID đã có, trả về key
        $stmt->bind_result($api_key);
        $stmt->fetch();
        echo json_encode(['status' => 'success', 'api_key' => $api_key]);
    } else {
        // Nếu HWID chưa có, tạo key mới
        $new_key = bin2hex(random_bytes(16)); // Tạo key ngẫu nhiên
        $sql = "INSERT INTO keys (hwid, api_key) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $hwid, $new_key);
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'api_key' => $new_key]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to generate key']);
        }
    }

    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'HWID is required']);
}

// Đóng kết nối
$conn->close();
?>
