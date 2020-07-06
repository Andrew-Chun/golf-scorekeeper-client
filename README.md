[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Golf Scorekeeper Client
A user-friendly front-end application that allows golfers to keep track of their rounds of golf.
Additionally, users can find relevant weather information by searching for their city.

## Technologies Used
- JavaScript
- jQuery
- AJAX
- HTML
- CSS/SASS
- Bootstrap
- Handlebars

## User Stories
1) As a user, I want to be able to securely sign up, sign in, change password, and sign out
2) As a user, I want to be able to create a round
3) As a user, I want to be able to update a round
4) As a user, I want to be able to delete a round
3) As a user, I want to be able to view all previous rounds

## Wireframe

[Golf Wireframe](https://i.imgur.com/iaTWBA0.jpg)

## Planning and Development Process
- In order to meet the requirements for the MVP for this project, I focused on
one user being able to CRUD many rounds of golf.
- Before making HTTP requests to the server, I tested curl-scripts.
- Once a user was authentication, I worked on CRUD routes for the rounds of golf,
using handlebars to render the rounds to the page.
- Beyond the MVP, I utilized a 3rd party API (openweathermap.org) to allow users to
view the weather for their given city.

## Future Iterations
Allow interactions between different authenticated users
Allow users to view other user's scores
