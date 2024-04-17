import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import Signup from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
