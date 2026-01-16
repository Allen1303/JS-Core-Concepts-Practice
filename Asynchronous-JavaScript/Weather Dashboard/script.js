"use strict";

//TASK 1 — Cache DOM Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const status = document.getElementById("status");
const weatherCard = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");

// TASK 2 — Create Async Function: getCoordinates(city)
const getCoordinates = async (city) => {
    // - Fetch from the Open-Meteo geocoding API
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    const data = await response.json();

    const coordinates = data.results[0];
    const { latitude, longitude } = coordinates;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    return { latitude, longitude }; // return latitude & longitude
};
getCoordinates();

//TASK 3 — Create Async Function: getWeather(lat, lon)
const getWeather = async (lat, lon) => {
    //- Accept latitude & longitude
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );
    const data = await response.json();
    const { temperature, weathercode } = data.current_weather;
    return { temperature, weathercode }; // Return temperature + condition
};
//Helper Function for loading weather
const loadWeather = async (city) => {
    status.textContent = "Loading..."; // Show Loading Text
    searchBtn.disabled = true; // Disable Button
    weatherCard.style.display = "none"; //- Hide weather card
    try {
        const { latitude, longitude } = await getCoordinates(city); // call getCoordinates
        //Call getWeather()
        const { temperature: temp, weathercode } = await getWeather(
            latitude,
            longitude,
        );
        //Task 6 ➞ Success State
        weatherCard.style.display = "block"; // Update UI (details in tasks 5-6)
        cityName.textContent = city;
        temperature.textContent = `${temp}°C`;
        condition.textContent = `Weather code: ${weathercode}`;
        status.textContent = "";
    } catch (error) {
        //Task 7 ➞  Error handling
        status.textContent = "City not found"; //- Show error message
    } finally {
        searchBtn.disabled = false; //- Re-enable button
    }
};
//TASK 4 — Handle Button Click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim(); // Read city input
    if (city) loadWeather(city);
});
