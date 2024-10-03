// src/App.jsx

import BookList from "./BookList"
import Product from "./Product";
import { Alert } from "./Alert";

const favouriteBooks = [
  { id: 1, name: "JS for beginners" },
  { id: 2, name: "React basics" },
  { id: 3, name: "React Router overview" }
];

const App = () => {
  return (
    <>
	  <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Product />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App