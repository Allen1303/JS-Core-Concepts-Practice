"use strict";

/*
=====================================================
🔍 PROJECT: GitHub Repository Search
Concepts:
✓ Fetch API
✓ async / await
✓ Query parameters
✓ Error handling
✓ UI state management
✓ Dynamic DOM rendering
=====================================================

GitHub Search API:
https://api.github.com/search/repositories?q=QUERY
=====================================================
*/

//TASK 1 — Cache DOM Elements
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const status = document.getElementById("status");
const repoList = document.getElementById("repoList");

//TASK 2 — Create Async Function: fetchRepos(query)
const fetchRepos = async (query) => {
    const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}`,
    ); //- Fetch repositories from GitHub Search API
    if (!response.ok) {
        throw new Error("Failed to fetch repository");
    }
    const repoData = await response.json(); //- Convert response to JSON

    return repoData.items; //- Return the items array
};

//TASK 3 — Create renderRepo(repo) Helper
const renderRepos = (repos) => {
    repos.forEach((repo) => {
        const {
            name,
            html_url,
            description = "No description",
            stargazers_count,
            language = "Not specified",
        } = repo;
        const li = document.createElement("li");
        li.innerHTML = `
<a href="${html_url}">${name}</a>
<p>${description}</p>
<span>⭐ ${stargazers_count}</span>
<span>${language}</span>
`;
        repoList.appendChild(li);
    });
};

//TASK 4 — Loading State Helpers
const loadingState = () => {
    status.textContent = "Loading..."; //- Show loading message
    repoList.innerHTML = ""; //- Clear previous results
    searchInput.disabled = true; //- Disable form controls
};

//TASK 8 — Form Submit Handler (Orchestrator)
searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); //Prevent page reload
    const textInput = searchInput.value.trim(); //Read search value
    loadingState(); //Trigger loading state
    //TASK 5 — Success State Logic
    try {
        const repo = await fetchRepos(textInput);
        status.textContent = ""; //Clear loading message
        renderRepos(repo);

        //TASK 6 — Error State Logic
    } catch (error) {
        status.textContent = "Unable to load the repository";
        repoList.innerHTML = "";
    } finally {
        //Task 7 - Re-enable form controls
        searchInput.disabled = false;
    }
});
