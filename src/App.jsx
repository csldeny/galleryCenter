import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
/* import SignIn from "./pages/SignIn"; */
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import AboutUs from "./pages/AboutUs";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/User/*" element={<User />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/SignIn" element={<SignIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
