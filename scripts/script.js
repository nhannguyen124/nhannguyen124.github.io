document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "Fetch Data from Backend";
    button.style.display = "block";
    button.style.margin = "20px auto";
    document.body.appendChild(button);

    button.addEventListener("click", async () => {
        try {
            const response = await fetch('https://myapp.onrender.com'); // Thay URL backend của bạn
            const data = await response.text();
            const result = document.createElement("p");
            result.textContent = `Backend says: ${data}`;
            document.body.appendChild(result);
        } catch (error) {
            alert("Error fetching data");
        }
    });
});
