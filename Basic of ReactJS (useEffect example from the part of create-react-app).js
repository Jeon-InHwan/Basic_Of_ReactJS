import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setValue((prev) => prev + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("I run all the time");

  const IRunOnlyOnce = () => {
    console.log("I run only once");
  };

  useEffect(IRunOnlyOnce, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("Search for " + keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search Here"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
