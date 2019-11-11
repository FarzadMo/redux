import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decerement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decerement(-5))}>-</button>
      {isLogged ? <h3>valuable info</h3> : <h3>don't show anything</h3>}
    </div>
  );
}

export default App;
