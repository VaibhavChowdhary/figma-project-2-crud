import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import Signup from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import EmptyPage from "./components/EmptyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/emptyPage" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
