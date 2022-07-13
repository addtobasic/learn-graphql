import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

function App() {
  const { data: { books } = {} } = useQuery(FETCH_BOOKS);

  return <div></div>;
}

export default App;
