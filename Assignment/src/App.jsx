import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import Products from "./Products";
import Cart from "./Cart";

const App = () => {
  
  const [cartOpen, setCartOpen] = useState(false);
  const [Prd, setPrd] = useState([]);
  const [user, setUser]= useState([]);
  
  console.log(user);
  console.log(Prd);
  
  let loc = useLocation();
  const show = loc.pathname !== "/" && loc.pathname !=="/Signup";
  
  return (
    <div>
 {show && <Nav/>}
          
      <Routes>

        <Route path="/" element={<Login user={user} />} />

        <Route path="/Signup" element={<Signup user={setUser} />} />    

        <Route path="/Home" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Shop" element={<Shop prd={Prd} setPrd={setPrd} />} />

        <Route path="/Products/:id" element={<Products />} />

        <Route path="/Cart" element={<Cart product={Prd} setPrd={setPrd}/>}/>

      </Routes>
</div>
  );
};

export default App;