import {Routes, Route} from "react-router-dom"
import Name from "./components/Name/Name";
import Counter from "./Counter";


function App() {
  return (
    <div className="App">
      <Counter/>
      <Name/>
    </div>  
  );
}

export default App;
