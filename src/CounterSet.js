import { useState } from "react";
import { useDispatch } from "react-redux";

function CounterSet() {

  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  return ( 
    <div className="CounterSet">
      <input type="number" value={number} onChange={(event) => setNumber(event.target.value)}/>
      <button onClick={() => dispatch({ type: `counter/set`, payload: number })}>
        Set
      </button>
    </div>
  );
}

export default CounterSet;