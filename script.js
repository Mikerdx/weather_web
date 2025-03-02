document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "your_api_key"; // Replace with your API key
    const city = "London"; // Change to your preferred city
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector("p:nth-of-type(1)").textContent = `Temperature: ${data.main.temp}°C`;
            document.querySelector("p:nth-of-type(2)").textContent = `Condition: ${data.weather[0].description}`;
        })
        .catch(error => console.log("Error fetching weather data:", error));
});
