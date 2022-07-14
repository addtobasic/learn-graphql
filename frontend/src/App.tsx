import { useState } from "react";
import "./App.css";
import {
  useBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
} from "./graphql/generated";

function App() {
  const { data: { books = [] } = {} } = useBooksQuery();
  const [createBook] = useCreateBookMutation({ refetchQueries: ["books"] });
  const [title, setTitle] = useState("");
  const [deleteBook] = useDeleteBookMutation({ refetchQueries: ["books"] });

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          createBook({ variables: { params: { title: title } } });
          setTitle("");
        }}
      >
        保存
      </button>
      {books.map((book) => (
        <div key={book.id}>
          <div>{book.title}</div>
          <button onClick={() => deleteBook({ variables: { id: book.id } })}>
            削除
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
