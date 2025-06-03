# FakeStoreAPI Project

## main.jsx and app.jsx

BrowserRouter is imported to allow routes in app.jsx. Bootstrap css is also imported for the entire project.
NavBar is outside of Routes to allow Navbar to function throughout the app.
Routes (pages) are imported.

## Carousel.jsx

- The Carousel component which mounts on the landing page GETS all the products from the API sorts them into a random array and getRandomSubset function also recieves a number to cycle through in the array (0 to n).

## ProductListing.jsx

-React Bootstrap components are imported individually, along with Axios for API calls and useState/Effect for state vaiables.

-State variable to store all products and set the state of loading and error messages.

-useEffect to get the API product data, store it in a variable, then set products to equal that variable. Loading becomes false after the API returns data. If data is loading, a spinner acts as a loading screen. the catch block sets error message if there is an error fetching data. if statement displays error message in p block.

-Returned jsx includes a newly mapped array with products passed into it. Will display all products with a unique product id as cards. Title, price, description, and image are shown in each card. If the products description is greater than 80 characters it shows only 0 to 80 characters, else it shows the whole description. This is to attempt at making the cards similar sizes. Same with max height on the product image. Button navigates to the product details page, by its id.

## ProductDetails.jsx

-useParams gets the id of a specific product from the URL. If the id changes, fetchProduct runs again. It is the dependency.

-The fetch product has 3 buttons, add product, delete, and edit. the add product shows an Off Canvas component that gets passed product data and two functions that handle when to show the Off Canvas. The functions are created in ProductDetails.jsx. The delete button shows a modal confirming deletion of the product from the API upon click. It gets passed the same props as OffCanvas and an additional function (onDelete). if delete if confirmed and clicked again, onDelete runs in ProductDetails and deletes from API. Upon a successful deletion, the user is alerted and redirected to Product Listing page, using useNavigate. The edit button opens a form which I will talk about later.

## AddProductForm.jsx

-Formik and Yup are used (learned in Whiteboard Workshop), Yup for form validation and Formik to store values and handle events with prebuilt event handlers.

-Yup checks that the number field is a positive number and all fields are filled out. Those values are passed into formik with useFormik which is a state object. onSubmit, the data gets posted to the API as a new product, the form gets reset, and either a success or error message is shown with React Bootstrap. After 5 seconds or 5000 ms, the alert gets set to false using a setTimeout and the message goes away. It is also dismissible.

## EditProductForm.jsx

-Edit Product uses the same form as add product except the from pre-fills the data, using the id of the product to fetch its details. It first GETS the data, stores it in initial values state object, and passes it to the form, which onSubmit updates the values with a PUT request. 'enableReinitialize' allows the form to update if the id changes for each product.
