# FakeStoreAPI Project

## main.jsx and app.jsx

BrowserRouter is imported to allow routes in app.jsx. Bootstrap css is also imported for the entire project.
NavBar is outside of Routes to allow Navbar to function throughout the app.
Routes (pages) are imported.

## ProductListing.jsx

-React Bootstrap components are imported individually, along with Axios for API calls and useState/Effect for state vaiables.

-State variable to store all products and set the state of loading and error messages.

-useEffect to get the API product data, store it in a variable, then set products to equal that variable. Loading becomes false after the API returns data. If data is loading, a spinner acts as a loading screen. the catch block sets error message if there is an error fetching data. if statement displays error message in p block.

-Returned jsx includes a newly mapped array with products passed into it. Will display all products with a unique product id as cards. Title, price, description, and image are shown in each card. If the products description is greater than 80 characters it shows only 0 to 80 characters, else it shows the whole description. This is to attempt at making the cards similar sizes. Same with max height on the product image. Button navigates to the product details page, by its id.

## ProductDetails.jsx

-
