"use strict";

/*
=====================================================
📘 ASYNC + FETCH — REFERENCE SYNTAX (STUDY ONLY)
-----------------------------------------------------

Basic fetch:
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

-----------------------------------------------------

Async / await version:
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

-----------------------------------------------------

UI async pattern:
- Show loading
- Disable button
- Await data
- Update UI
- Handle errors
- Re-enable button
=====================================================
*/

/*
=====================================================
🌤 PROJECT: Weather Dashboard
Concepts:
✓ Asynchronous JavaScript
✓ Promises
✓ async / await
✓ Fetch API
✓ Error handling
✓ UI state management
=====================================================
*/

/*
-----------------------------------------------------
TASK 1 — Cache DOM Elements
-----------------------------------------------------
Grab:
- cityInput
- searchBtn
- status
- weatherCard
- cityName
- temperature
- condition
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 2 — Create Async Function: getCoordinates(city)
-----------------------------------------------------
This function should:
- Accept a city name
- Fetch from the Open-Meteo geocoding API
- Return latitude & longitude

HINT:
https://geocoding-api.open-meteo.com/v1/search?name=CITY
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 3 — Create Async Function: getWeather(lat, lon)
-----------------------------------------------------
This function should:
- Accept latitude & longitude
- Fetch current weather
- Return temperature + condition

HINT:
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 4 — Handle Button Click
-----------------------------------------------------
When button is clicked:
- Read city input
- Show loading text
- Disable button
- Call getCoordinates()
- Call getWeather()
- Update UI
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 5 — Loading State
-----------------------------------------------------
Before fetch:
- status = "Loading..."
- Hide weather card
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 6 — Success State
-----------------------------------------------------
On success:
- Show weatherCard
- Display city name
- Display temperature
- Display condition
- Clear status
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 7 — Error State
-----------------------------------------------------
If anything fails:
- Show error message
- Hide weather card
- Re-enable button
-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 8 — Final Cleanup
-----------------------------------------------------
In finally:
- Re-enable button
-----------------------------------------------------
*/

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
