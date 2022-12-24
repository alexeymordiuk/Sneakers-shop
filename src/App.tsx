import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Messages from "./pages/Messages";
import Orders from "./pages/Orders";
import SneakersDetailes from "./pages/SneakersDetailes";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="liked" element={<Liked />} />
          <Route path="detailes/:code" element={<SneakersDetailes />} />
          <Route path="user" element={<User />} />
          <Route path="bell" element={<Messages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
