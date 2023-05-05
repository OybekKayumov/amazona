# MERN AMAZONA

## run the project:
   1. `cd backend`
   2. run `npm i`, `npm start`
   3. make sure that connected to mongodb
   4. open the link `http://localhost:5000/api/seed`
   5. `cd frontend`
   6. run `npm i`, `npm start`
   7. it opens the link `http://localhost:3000/`

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
  15. Complete Add To Cart
      1. check exist item in the cart
      2. check count in stock in backend
  16. Create Cart Screen
      1. create 2 columns
      2. display items list
      3. create action column
  17. Complete Cart Screen
      1. click handler for inc/dec item
      2. click handler for remove item
      3. click handler for checkout
  18. Create Signin Screen
      1. create sign in form
      2. add email and password
      3. add sign in button
  19. Connect To MongoDB Database
      1. create atlas mongodb database
      2. create local mongodb database
      3. npm i mongoose
      4. connect to mongodb database
  20. Seed Sample Data
      1. create Product Model
      2. create User Model
      3. create seed route
      4. use route in server.js
      5. seed sample product
  21. Seed Sample Users
      1. create User Model
      2. seed sample users
      3. create user routes
  22. Create Signin Backend API
      1. create signin api
      2. npm i jsonwebtoken
      3. define generateToken
  23. Complete Signin Screen
      1. handle submit action
      2. save token in store and local storage
      3. show username in header
  24. Create Shipping Screen
      1. create form inputs
      2. handle save shipping address
      3. add checkout wizard bar
  25. 
