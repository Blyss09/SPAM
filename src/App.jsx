import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Cards from "./screens/cards/cards";
import Mecaniques from "./screens/mecaniques/Mecaniques";
import "./assets/resetCss/reset.css";
const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/mecaniques" element={<Mecaniques />} />
        </Routes>
    </div>
  );
}

export default App
