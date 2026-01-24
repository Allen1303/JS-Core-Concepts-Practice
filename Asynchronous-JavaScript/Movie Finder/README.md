# 🎬 Movie Finder — TVMaze API

A small JavaScript mini project focused on **async data fetching**, **UI state management**, and **dynamic DOM rendering** using the TVMaze public API.

This exercise emphasizes _correct mental models_ for handling async workflows in real-world frontend applications.

---

## 🚀 What This Project Does

- Allows users to search for TV shows by title
- Fetches results from the TVMaze API
- Displays show titles and images dynamically
- Handles loading, success, error, and cleanup UI states

---

## 🧠 Core Concepts Practiced

### JavaScript

- Fetch API
- `async / await`
- `try / catch / finally`
- Array iteration (`forEach`)
- Function responsibility separation

### DOM & UI

- Event handling (`submit`)
- Disabling/enabling inputs during async work
- Rendering dynamic lists
- Clearing and updating UI state safely

---

## 🔄 Application Flow (Mental Model)

1. User submits the form
2. UI enters **loading state**
3. App fetches data from the API
4. UI updates based on:
   - Success (render results)
   - Failure (show error)
5. UI is restored in `finally`

> Tasks describe **phases of execution**, not standalone files or isolated blocks.

---

## 🌐 API Used

**TVMaze Search API**

```js
Example:

[https://api.tvmaze.com/search/shows?q=batman](https://api.tvmaze.com/search/shows?q=batman)
```

---

## 🧩 Key Code Snippets

### 1️⃣ Fetching Data with Error Handling

```js
async function fetchMovies(query) {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`,
  );

  if (!response.ok) {
    throw new Error("Failed to load data");
  }

  return await response.json();
}
```

**Why this matters:**

- Keeps API logic isolated
- Returns raw data for flexibility
- Throws errors for centralized handling

---

### 2️⃣ Form Submit Handler (Async Orchestration)

```js
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Searching...";
  searchInput.disabled = true;
  searchBtn.disabled = true;

  try {
    const movies = await fetchMovies(searchInput.value);
    status.textContent = "";
    renderMovie(movies);
  } catch (error) {
    status.textContent = error.message;
  } finally {
    searchInput.disabled = false;
    searchBtn.disabled = false;
  }
});
```

**Why this matters:**

- Clearly shows the async lifecycle
- Demonstrates proper UI state management
- Mirrors real production patterns

---

### 3️⃣ Rendering Results Dynamically

```js
const renderMovie = (movies) => {
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.show.name;

    if (movie.show.image) {
      const img = document.createElement("img");
      img.src = movie.show.image.medium;
      li.appendChild(img);
    }

    movieList.appendChild(li);
  });
};
```

**Why this matters:**

- Keeps rendering logic separate
- Uses returned API data correctly
- Reinforces array → DOM mapping

---

## ✅ Key Takeaways

- Loading, success, error, and cleanup logic **belong inside the event flow**
- `try / catch / finally` is ideal for UI state control
- Tasks should reflect **execution phases**, not rigid file structure
