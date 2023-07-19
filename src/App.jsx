import { useState } from "react";
import "./App.css";
import Construction from "./views/pages/construction/Construction";

function App() {
  const [count, setCount] = useState(0);

  return (<Construction/>);
}

export default App;
