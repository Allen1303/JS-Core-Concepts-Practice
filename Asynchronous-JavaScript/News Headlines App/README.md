# 📰 News Headlines App (Hacker News)

This mini project practices working with **asynchronous JavaScript** using a real, keyless API.

## 🎯 Goals

- Understand `async / await`
- Practice fetching remote data
- Manage loading, success, and error UI states
- Dynamically render API data into the DOM
- Reinforce clean app flow and separation of concerns

---

## 🧠 API Used

**Hacker News (Algolia) – Keyless API**

Each request returns a list of front-page news articles.

---

## 🔁 App Flow

1. User clicks **Refresh Headlines**
2. App enters loading state
3. Data is fetched from the API
4. Headlines are rendered dynamically
5. UI resets after completion

---

## 🧩 Key Concepts Practiced

### Async / Await with Fetch

```js
const response = await fetch(url);
const data = await response.json();
```

---

### UI State Management

```js
status.textContent = "Loading headlines...";
newsList.innerHTML = "";
```

---

### Dynamic Rendering

```js
articles.forEach((article) => {
  renderHeadline(article);
});
```

---

### 📦 Data Shape Reminder

Each article object includes:

- title
- url
- author
- points

## This reinforces safe property access and defensive rendering.

---

🚀 Why This Matters

- This app mirrors real-world frontend patterns:
- Network requests
- Async control flow
- User feedback during loading
- Error resilience

---
