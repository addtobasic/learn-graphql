import React from "react";
import "./App.css";
import { useBooksQuery } from "./graphql/generated";

function App() {
  const { data: { books = [] } = {} } = useBooksQuery();

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}

export default App;
