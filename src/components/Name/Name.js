import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Name() {

  const name = useSelector((store) => {
    return store.name.value;
  });

  const dispatch = useDispatch();


  return ( 
    <div className="Name">
      <input type="text" onChange={(event) => dispatch({ type: `name/change`, payload: event.target.value })}/>


      <h2>
        {name}
      </h2>
    </div>
  );
}

export default Name;