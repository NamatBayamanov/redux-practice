import { useSelector } from "react-redux";


function CounterDisplay() {

  const number = useSelector((store) => {
    return store.counter.number;
  });


  return ( 

    <div className="counterDisplay">
      <h2>
          {number}
      </h2>
    </div>
  );
}

export default CounterDisplay;