# React Blog App

A responsive React blog application that lets users explore blog posts, view individual post details, read and add comments, log in to access comment features, and switch between light and dark mode.

## Live Demo

[View the deployed website](https://cute-bienenstitch-884171.netlify.app/)

## Overview

This project is a React-based blog website built to practice component-based design, routing, API data fetching, user interaction, conditional rendering, and responsive styling. The app includes a homepage, blog post list, individual post pages, a login page, a contact page, comments, and a theme toggle.

## Features

- **Homepage** with a welcome message and navigation to the blog
- **Blog posts page** that displays a list of posts
- **Individual post pages** using dynamic routing
- **Comments section** for each blog post
- **Login and logout functionality** using React Context
- **Conditional rendering** so only logged-in users can add comments
- **Contact page** for user communication
- **Light and dark mode** theme toggle
- **Responsive design** for desktop and mobile screens
- **API data fetching** from JSONPlaceholder
- **Loading states** while data is being retrieved

## Tech Stack

- React
- JavaScript
- React Router
- React Context API
- CSS Modules / CSS
- JSONPlaceholder API
- Netlify

## Pages and Routes

| Route | Page | Description |
|---|---|---|
| `/` | Homepage | Displays the welcome page and main navigation options |
| `/login` | Login Page | Allows a user to log in with a username |
| `/posts` | Blog Posts | Displays the list of blog posts |
| `/posts/:postId` | Individual Post | Displays one blog post and its comments |
| `/contact` | Contact Page | Displays contact information or a contact form |

## Project Structure

```text
src/
├── components/
│   ├── blog/
│   │   ├── BlogPost.jsx
│   │   ├── Comments.jsx
│   │   ├── IndividualComment.jsx
│   │   └── PostList.jsx
│   └── common/
│       ├── CommonLayout.jsx
│       ├── Header.jsx
│       └── Footer.jsx
├── context/
│   ├── AuthContext.js
│   ├── AuthProvider.jsx
│   └── ThemeProvider.jsx
├── pages/
│   ├── Homepage.jsx
│   ├── LoginPage.jsx
│   └── ContactPage.jsx
├── App.jsx
└── main.jsx
```

> Note: File names may vary slightly depending on the final version of the project.

## API Usage

The project uses the JSONPlaceholder API to retrieve sample blog data.

Example endpoints:

```text
GET https://jsonplaceholder.typicode.com/posts
GET https://jsonplaceholder.typicode.com/posts/{postId}
GET https://jsonplaceholder.typicode.com/posts/{postId}/comments
POST https://jsonplaceholder.typicode.com/posts/{postId}/comments
```

## Getting Started

To run this project locally, clone the repository and install the dependencies.

```bash
git clone <your-repository-link>
cd <your-project-folder>
npm install
npm run dev
```

If your project uses Create React App instead of Vite, start it with:

```bash
npm start
```

## Build for Production

```bash
npm run build
```

The production build can be deployed to Netlify.

## Deployment

This project is deployed using Netlify.

Live site: [https://cute-bienenstitch-884171.netlify.app/](https://cute-bienenstitch-884171.netlify.app/)

## What I Learned

Through this project, I practiced:

- Creating reusable React components
- Using React Router for multi-page navigation
- Fetching API data with React hooks
- Managing login state with Context API
- Using conditional rendering based on user login status
- Styling a responsive React application
- Deploying a React project with Netlify

## Future Improvements

- Add stronger form validation
- Save comments permanently with a real backend
- Add user registration
- Improve error handling for failed API requests
- Add search or filtering for blog posts
- Add more unit tests for components

## Author

**Ruth Teshome**  
Computer Science Student  
University of North Carolina at Charlotte
