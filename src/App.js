import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import TopBar from "./pages/TopBar";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Gambling from "./pages/Gambling";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/" element={<TopBar />} >
          <Route path="home" element={<Home />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="gambling" element={<Gambling />} />
          <Route path="nopage" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
