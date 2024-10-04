// src/App.jsx

/*import BookList from "./BookList"
import Product from "./Product";*/
import Alert from "./Alert";

/*const favouriteBooks = [
  { id: 1, name: "JS for beginners" },
  { id: 2, name: "React basics" },
  { id: 3, name: "React Router overview" }
];*/

const App = () => {
  return (
    <>
	  
    <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};

export default App