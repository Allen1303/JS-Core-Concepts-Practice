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

-----------------------------------------------------

TVMaze Search Example:
https://api.tvmaze.com/search/shows?q=batman

-----------------------------------------------------
*/

/*
-----------------------------------------------------
TASK 1 — Cache DOM Elements
-----------------------------------------------------
Grab:
- searchForm
- searchInput
- searchBtn
- status
- movieList (results container)
-----------------------------------------------------
*/

// TODO: Cache DOM elements here

/*
-----------------------------------------------------
TASK 2 — Create Async Function: fetchMovies(query)
-----------------------------------------------------
This function should:
- Accept a search term (query)
- Fetch from the TVMaze API
- Convert response to JSON
- Return the data

Endpoint format:
https://api.tvmaze.com/search/shows?q=QUERY
-----------------------------------------------------
*/

// TODO: Create async function fetchMovies(query)

/*
-----------------------------------------------------
TASK 3 — Form Submit Handler
-----------------------------------------------------
When the user submits:
- Prevent page reload
- Get the search input value
- Show loading state
- Disable input/button
- Call fetchMovies(query)
-----------------------------------------------------
*/

// TODO: Add submit event listener

/*
-----------------------------------------------------
TASK 4 — Loading State
-----------------------------------------------------
Before fetch:
- status = "Searching..."
- Clear previous results
-----------------------------------------------------
*/

// TODO: Implement loading UI logic

/*
-----------------------------------------------------
TASK 5 — Success State
-----------------------------------------------------
On success:
- Clear status
- Loop through results
- Render each movie into the DOM
- Show title + image (if available)
-----------------------------------------------------
*/

// TODO: Render movie results

/*
-----------------------------------------------------
TASK 6 — Error State
-----------------------------------------------------
If anything fails:
- Show error message
- Clear results
-----------------------------------------------------
*/

// TODO: Handle errors

/*
-----------------------------------------------------
TASK 7 — Final Cleanup
-----------------------------------------------------
In finally:
- Re-enable input/button
-----------------------------------------------------
*/

// TODO: Restore UI state

/*
-----------------------------------------------------
TASK 8 — Create renderMovie(movie) Helper
-----------------------------------------------------
This function should:
- Create DOM elements
- Populate with movie data
- Append to movieList
-----------------------------------------------------
*/

// TODO: Create render helper
