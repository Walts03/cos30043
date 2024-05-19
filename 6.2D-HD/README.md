# MealCards

MealCards is a individual webpage project using VueJS and public APIs with the aim of reponsive, scalability design,

# MealCards Vue.js Project

MealCards is a Vue.js application that allows users to browse, search, and save their favorite meals, responsive and scalability design. The application interacts with the MealDB API to fetch meal data and uses a MySQL database to store user preferences.

- APIs: [TheMealDB](https://www.themealdb.com/api.php)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Technologies Used](#technologies-used)

## Features

- Browse meals by categories and ingredients
- Search meals by name, first letter, or ingredient
- View detailed information about meals
- User authentication (login and signup)
- Save favorite meals
- Responsive design

## Project Structure

```plaintext
mealcards-master/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── vue.svg
│   ├── components/
│   │   ├── DefaultLayout.vue
│   │   ├── Footer.vue
│   │   ├── Login.vue
│   │   ├── MealItem.vue
│   │   ├── Meals.vue
│   │   ├── Navbar.vue
│   │   ├── PaginateControl.vue
│   │   ├── Signup.vue
│   │   └── YoutubeButton.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Ingredients.vue
│   │   ├── MealDetails.vue
│   │   ├── SearchByIngredient.vue
│   │   ├── SearchByLetter.vue
│   │   └── SearchByName.vue
│   ├── App.vue
│   ├── axiosClient.js
│   ├── main.js
│   └── style.css
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

1. Vue.js: JavaScript framework for building user interfaces
2. Vuex: State management for Vue.js applications
3. Vue Router: Routing for Vue.js applications
4. Axios: Promise-based HTTP client for making API requests
   5.Tailwind CSS: Utility-first CSS framework for styling
5. MySQL: Relational database for storing user data
6. Nginx: Web server and reverse proxy
