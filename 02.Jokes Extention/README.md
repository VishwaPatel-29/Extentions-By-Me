# 😂 Chuck Norris Joke Generator

A simple and fun web application that generates random Chuck Norris jokes using a public API.

This project is built using HTML, CSS, and JavaScript and demonstrates the use of the Fetch API and DOM manipulation.

---

## 🚀 Features

- Generates random Chuck Norris jokes
- Fetches jokes from a public API
- Clean and simple UI design
- Interactive button to get new jokes
- Displays Chuck Norris avatar image

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Chuck Norris API (https://api.chucknorris.io)

---

## 📂 Project Structure

Chuck-Norris-Joke-App/

│── Joke.html  
│── Joke.css  
│── Joke.js  
│── README.md  

---

## ⚙️ How to Run This Project

1. Download or clone this repository.
2. Open the project folder.
3. Open `Joke.html` in your browser.
4. Click the **"Get Joke"** button.
5. A random joke will be displayed on the screen.

---

## 📌 How It Works

- When the **Get Joke** button is clicked:
  - A fetch request is sent to:
    https://api.chucknorris.io/jokes/random
  - The API returns a random joke in JSON format.
  - The joke text is extracted from the response.
  - The paragraph content is updated dynamically using JavaScript.

---

## 🎯 Purpose of This Project

This project was created to:

- Practice JavaScript Fetch API
- Understand API integration
- Improve DOM manipulation skills
- Strengthen frontend development basics

---

## 👨‍💻 Author

Vishwa Patel

---

## ⭐ Future Improvements

- Add loading animation while fetching joke
- Add copy-to-clipboard feature
- Add joke categories filter
- Improve UI styling and responsiveness
- Add dark mode feature
