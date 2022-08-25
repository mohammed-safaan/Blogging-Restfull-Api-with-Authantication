# Blogging Restfull Api with Authantication

This is a blogging api where it's implementing two main models ( users, posts ) and perform CRUD operations over them, also it has a logger that logs all incoming request ( using the morgan package ), and auth system using JWT( json web token )

## How to use ?

1- Clone the project using the repo link then install the dependencies using :

### `npm install`

2- Then run the api using nodemon or using this command

### `node index.js`

3- Use postman to test the api or send your requests from the FrontEnd using the fetch api

## How test auth in this api in postman?

<ol>
  <li>
    "/register" path test it by sending request with the post method and request
    body fill it with the right schema
  </li>
      <br>
  <li>
    "/login" path - test it by sending request with the post method and request
    body fill it with the user email and password
  </li>
      <br>
  <li>
    "/home" - path test it by sending request with the post method and request
    header fill it with ( x-access-token, and the user tokken as the value )
  </li>
</ol>
