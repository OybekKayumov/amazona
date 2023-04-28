# MERN AMAZONA

## Lessons
  1. Introduction
  2. Install Tools
  3. Create React App
  4. Create Git Repository
  5. List Products
      1. create products array
      2. add product images
      3. render products
      4. style products
  6. Add page routing
      1. npm i react-router-dom
      2. create route for home screen
      3. create router for product screen
  7. Create Node.js Server
      1. npm init -y in backend root folder
      2. update package.json set type: module
      3. add .js to imports
      4. npm i express
      5. create server.js
      6. add start command as node /backend/server.js
      7. require express
      8. create route for / return backend is ready
      9. move data.js products from frontend to backend
      10. create route for /api/products
      11. return products
      12. run npm start
  8. Fetch Products From Backend
     1. set proxy in frontend package.json
     2. npm install axios
     3. use state hook
     4. use effect hook
     5. use reducer hook
  9. Manage State By Reducer Hook
     1. define reducer
     2. update fetch data
     3. get state from useReducer
  10. Add bootstrap UI Framework
      1. npm i react-bootstrap bootstrap
      2. update App.js
  11. Create Product and Rating Component
      1. create Rating Component
      2. create Product Component
      3. Use Rating component in Product component
  12. Create Product Details Screen
      1. fetch product from backend
      2. create 3 columns for image, info and screen
  13. Create Loading and Message Components
      1. create loading component
      2. use spinner component
      3. create message component
      4. create utils.js to define getError function
  14. Implement Add To Cart
      1. Create React Context
      2. define reducer
      3. create store provider
      4. implement add to cart button click handler
  15. 