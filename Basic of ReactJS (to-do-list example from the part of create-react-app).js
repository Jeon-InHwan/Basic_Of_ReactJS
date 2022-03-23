import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => {
      return [...currentArray, toDo];
    });
    setToDo("");
  };

  return (
    <div>
      <h1>My to-dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="Write your to-do"
        ></input>
        <button>Add to-do</button>
      </form>
      <hr />
      {toDos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
