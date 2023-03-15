import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Character from "./pages/Character/Character";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/character/:id" element={<Character />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
