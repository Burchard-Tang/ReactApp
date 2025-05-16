import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.jsx"
import UserHome from "./pages/UserHome.jsx"
import MyProfile from "./pages/MyProfile.jsx"
import Settings from "./pages/Settings.jsx"
import NoPage from "./pages/NoPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<UserHome/>}/>
          <Route path="myprofile" element={<MyProfile/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
