# richfield-connect
Richfield Connect student community SPA built with React 18 and Vite.

## Student details
- Name: [Lungile]
- Surname: [Dube]
- Student Number: [402605503]

## Module name and assignment title
- Module Name: Web Development / Front-End Development
- Assignment Title: Richfield Connect SPA Build

## Description
Richfield Connect is a single-page React application built with Vite that delivers a campus community experience for students. It includes a welcoming home page, an About section, a profile registration flow with live preview validation, a profile dashboard, and a student feed where users can create, like and delete posts. The app is fully client-side and uses Context API with reducer state management, localStorage persistence, and React Router navigation without page reloads.

### Component architecture
- App.jsx: application shell and route configuration.
- context/AppContext.jsx: global app state using Context API and useReducer.
- components/Navbar.jsx: shared navigation across all routes.
- components/Footer.jsx: shared footer.
- components/SignUpForm.jsx: controlled sign-up form with validation and redirect to profile.
- components/ProfilePreview.jsx: live preview of account information.
- components/Profile.jsx: user profile card and state-driven data display.
- components/CreatePost.jsx: post creation form for the feed.
- components/Post.jsx: single post with like and delete controls.
- components/Feed.jsx: feed list that renders posts from state.
- views/HomePage.jsx: home/landing page.
- views/AboutPage.jsx: purpose, guidelines and campus details.
- views/SignUpPage.jsx: registration page.
- views/ProfilePage.jsx: profile page.
- views/FeedPage.jsx: student feed page.
- styles/global.css: styling, responsive layout, and transitions.

## Run instructions
1. Open a terminal in the project folder.
2. Run: npm install
3. Run: npm run dev
4. Open the local Vite URL shown in the terminal, typically http://localhost:5173
5. To build the production version, run: npm run build

## Resources referenced
- React 18
- Vite
- React Router DOM
- JavaScript ES modules
- CSS styling with responsive media queries
- LocalStorage browser persistence
