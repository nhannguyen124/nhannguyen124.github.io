document.getElementById('get-key-button').addEventListener('click', async () => {
    const apiKeyDisplay = document.getElementById('api-key-display');
    apiKeyDisplay.textContent = '';

    try {
        const response = await fetch('http://127.0.0.1:5000/get-key');  // Sử dụng URL phù hợp
        if (!response.ok) {
            throw new Error('Failed to fetch API key. Please try again.');
        }

        const data = await response.json();
        apiKeyDisplay.textContent = `Your API Key: ${data.api_key}`;
    } catch (error) {
        apiKeyDisplay.textContent = error.message;  // Hiển thị lỗi
    }
});
