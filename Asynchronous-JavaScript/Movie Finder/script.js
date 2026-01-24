"use strict";

/*
=====================================================
🎬 PROJECT: Movie Finder (TVMaze API)
Concepts:
✓ Fetch API
✓ Promises
✓ async / await
✓ Error handling
✓ UI state management
✓ Dynamic DOM rendering
=====================================================

=====================================================
📘 ASYNC + FETCH — REFERENCE SYNTAX 
-----------------------------------------------------

async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

*/

// TODO: Cache DOM elements here
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const status = document.getElementById("status");
const movieList = document.getElementById("movieList");

// TODO: Create async function fetchMovies(query)
async function fetchMovies(query) {
    //- Accept a search term (query)
    //- Fetch from the TVMaze API
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`,
    );
    if (!response.ok) {
        throw new Error("Failed to load data");
    }
    const data = await response.json(); //- Convert response to JSON

    console.log(data);
    return data; //- Return the data
}
//TASK 8 — Create renderMovie(movie) Helper Function
const renderMovie = (movies) => {
    //- Loop through results
    movies.forEach((movie) => {
        //- Create DOM elements
        const list = document.createElement("li"); //- Render each movie into the DOM
        //- Populate with movie data
        list.textContent = movie.show.name; //- Show title

        if (movie.show.image) {
            //- Show image (if available)

            const img = document.createElement("img");
            img.src = movie.show.image.medium;
            list.appendChild(img);
        }
        movieList.appendChild(list); //- Append to movieList
    });
};

// TODO: Add submit event listener
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault(); //- Prevent page reload
    const movieTitle = searchInput.value; //- Get the search input value

    //TASK 4 — Loading State
    status.textContent = "Searching...";
    movieList.innerHTML = ""; // Clear previous results
    searchInput.disabled = true; //- Disable input field
    searchBtn.disabled = true; //- Disable search button
    try {
        //TASK 5 — Success State
        const movies = await fetchMovies(movieTitle); //- Call fetchMovies(query)
        status.textContent = ""; //- Clear status
        renderMovie(movies);
        //TASK 6 — Error State
    } catch (error) {
        //If anything fails: - Show error message
        status.textContent = error.message;
        //TASK 7 — Final Cleanup
    } finally {
        searchInput.disabled = false; //- Re-enable input field
        searchBtn.disabled = false; //- Re-enable search button
    }
});
