const apiKey = "d160aeae60e49194622fbc0f3c2fe639";
const weatherCard = document.getElementById("weatherCard");

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    weatherCard.innerHTML = `<p class="error">Please enter a city name.</p>`;
    weatherCard.style.display = "block";
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("There was an error fetching the weather data. Please check the city name and try again.");
    }

    const data = await response.json();
    console.log(data)
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    weatherCard.innerHTML = `
      <h2>${name}</h2>
      <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon" /> ${description}</p>
      <p>Temperature: ${Math.round(temp-273.15)}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${speed} km/h</p>
    `;
    weatherCard.style.display = "block";
  } catch (error) {
    weatherCard.innerHTML = `<p class="error">${error.message}</p>`;
    weatherCard.style.display = "block";
  }
}
