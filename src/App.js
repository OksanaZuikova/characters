import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Character from "./pages/Character/Character";
import GoogleLoginButton from "./components/GoogleLoginButton/GoogleLoginButton";
import FacebookLogin from "./components/FacebookLoginButton/FacebookLoginButton";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <div className="social-links">
        <GoogleLoginButton />
        <FacebookLogin />
      </div>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/character/:id" element={<Character />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
