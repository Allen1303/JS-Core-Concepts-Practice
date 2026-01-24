"use strict";

/*
=====================================================
📰 PROJECT: News Headlines App (Hacker News)
Concepts:
✓ Fetch API
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

Hacker News API:
https://hn.algolia.com/api/v1/search?tags=front_page

-----------------------------------------------------
*/

// TODO: Create render helper

//TASK 1 — Cache DOM Elements
const refreshBtn = document.getElementById("refreshBtn");
const status = document.getElementById("status");
const newsList = document.getElementById("newsList");

//TASK 2 — Create Async Function: fetchHeadlines()
const fetchHeadlines = async () => {
    const response = await fetch(
        "https://hn.algolia.com/api/v1/search?tags=front_page",
    ); // Fetch front-page headlines from hacker news.
    const newsData = await response.json(); // convert response to json
    console.log(newsData);
    return newsData.hits; // Return article Array
};

//TASK 8 — Create renderHeadlines(article) helper function
const renderHeadlines = (articles) => {
    articles.forEach((article) => {
        const articleList = document.createElement("li");
        //- Render headline
        articleList.innerHTML = `<a href="${article.url || "#"}" target="_blank">${article.title || "untitled"}</a>
     <span>by: ${article.author || "Anonymous"}</span>`;

        newsList.appendChild(articleList);
    });
};
//TASK 3 — Click Handler
refreshBtn.addEventListener("click", async () => {
    status.textContent = "Loading headlines..."; //- Show loading state
    newsList.innerHTML = "";
    refreshBtn.disabled = true; //- Disable button

    try {
        //TASK 5 — Success State

        const articles = await fetchHeadlines(); //- Call fetchHeadlines()
        //- Loop through articles
        renderHeadlines(articles);
        status.textContent = ""; //- Clear status

        //Task 6 - Error State
    } catch (error) {
        //If anything fails:
        status.textContent = error.message;
        newsList.innerHTML = ""; // Clear list
    } finally {
        //TASK 7 — Final Cleanup
        refreshBtn.disabled = false;
    }
});
