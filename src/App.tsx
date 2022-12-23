import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Orders from "./pages/Orders";
import SneakersDetailes from "./pages/SneakersDetailes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="liked" element={<Liked />} />
          <Route path="detailes/:code" element={<SneakersDetailes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
