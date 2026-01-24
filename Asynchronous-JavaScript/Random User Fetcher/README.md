# 👤 Random User Generator

A simple async JavaScript project that fetches and displays random user data from the RandomUser API.

## 📚 Concepts Covered

- ✅ Fetch API
- ✅ Promises
- ✅ async / await
- ✅ Error handling (try/catch/finally)
- ✅ Object destructuring
- ✅ Dynamic DOM manipulation
- ✅ UI state management

## 🎯 Features

- Fetch random user data from [RandomUser.me API](https://randomuser.me/api/)
- Display user profile picture, name, and email
- Loading state indicator
- Error handling with user feedback
- Responsive button interaction

## 💻 Technologies Used

- **Vanilla JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **RandomUser.me API**

## 📂 Project Structure

```md
random-user-generator/
│
├── index.html # HTML structure
├── style.css # Styling
├── script.js # JavaScript logic
└── README.md # Project documentation
```

## 👨🏽‍💻 How It Works

### 1. **Cache DOM Elements**

```javascript
const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const userCard = document.getElementById("userCard");
```

### 2. **Async Function: `loadUser()`**

- Shows loading state
- Fetches data from API
- Validates response
- Extracts user information using destructuring
- Renders user card dynamically
- Handles errors gracefully

### 3. **Error Handling**

- **try block**: Fetch and render user data
- **catch block**: Display error messages
- **finally block**: Update status message

### 4. **Event Listener**

- Button click triggers `loadUser()` function
- Initial user loads on page load

## 💡 Key Learning Points

### Async/Await Pattern

```javascript
async function loadUser() {
  const response = await fetch(url);
  const data = await response.json();
}
```

### Object Destructuring

```javascript
const {
  name: { first, last },
  email,
  picture: { large: profilePicture },
} = user;
```

### Response Validation

```javascript
if (!response.ok) throw new Error("Failed to fetch user");
```

## 🎨 UI States

| State       | Description                  |
| ----------- | ---------------------------- |
| **Loading** | Shows "Loading..." message   |
| **Success** | Displays user card with data |
| **Error**   | Shows error message in red   |

## 🔧 Setup & Usage

1. Clone or download the project
2. Open `index.html` in your browser
3. Click "Load New User" to fetch random users
4. A random user loads automatically on page load

## 📝 API Response Structure

```js
{
  results: [
    {
      name: { first: "John", last: "Doe" },
      email: "john.doe@example.com",
      picture: { large: "https://..." },
    },
  ];
}
```

## 🐛 Error Handling

- Network failures
- Invalid API responses
- JSON parsing errors
- All errors display user-friendly messages

## 🌟 Future Enhancements

- [ ] Add loading spinner animation
- [ ] Display additional user info (location, phone)
- [ ] Add filter options (gender, nationality)
- [ ] Save favorite users to local storage
- [ ] Multiple user display in a grid

## 📖 Resources

- [RandomUser.me API Documentation](https://randomuser.me/documentation)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Built as part of async JavaScript learning journey
