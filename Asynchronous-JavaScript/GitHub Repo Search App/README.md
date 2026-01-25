# 🔍 GitHub Repository Search

A mini project built to practice **asynchronous JavaScript** using a real-world API.  
This app allows users to search for GitHub repositories and displays key information such as repository name, description, stars, and primary language.

---

## 🎯 Learning Goals

This exercise focuses on mastering:

- Fetch API with query parameters
- `async / await`
- Handling API responses and errors
- UI state management during async operations
- Dynamic DOM rendering
- Separating concerns (fetching, rendering, orchestration)

---

## 📱 API Used

**GitHub Search Repositories API**

```
[https://api.github.com/search/repositories?q=QUERY](https://api.github.com/search/repositories?q=QUERY)

```

---

## 🧠 Application Flow

1. User submits a repository search term
2. UI enters a loading state
3. Data is fetched asynchronously from GitHub
4. Results are rendered dynamically
5. Errors are handled gracefully
6. UI state is restored after completion

---

## 🧩 Key Code Concepts

### Async Fetch Function

```js
async function fetchRepos(query) {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${query}`,
  );
  const data = await res.json();
  return data.items;
}
```

### Loading State Pattern

```js
status.textContent = "Searching repositories...";
repoList.innerHTML = "";
searchInput.disabled = true;
```

### Rendering Dynamic Results

```js
repos.forEach((repo) => {
  renderRepo(repo);
});
```

---

## 📁 Project Structure

```
/github-repo-search
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Why This Exercise Matters

This project simulates real-world `async` workflows and reinforces:
