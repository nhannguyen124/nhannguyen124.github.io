document.getElementById('get-key-button').addEventListener('click', async () => {
    const apiKeyDisplay = document.getElementById('api-key-display');
    const errorDisplay = document.getElementById('error-display');
    apiKeyDisplay.textContent = '';
    errorDisplay.textContent = '';

    try {
        // Thay URL này bằng URL thật của Flask app
        const response = await fetch('https://your-flask-api-url.com/get-key');
        
        if (!response.ok) {
            throw new Error('Failed to fetch API key. Please try again.');
        }

        const data = await response.json();
        apiKeyDisplay.textContent = `Your API Key: ${data.api_key}`;
    } catch (error) {
        errorDisplay.textContent = error.message;
    }
});
