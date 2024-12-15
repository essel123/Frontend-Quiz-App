import "./App.css";
import "./index.css";

import Home from "./components/molecules/Home/Home";
import Mode from "./components/atoms/Mode/Mode";

function App() {
  return (
    <div className="page">
      <Mode />
      <Home />
    </div>
  );
}

export default App;
