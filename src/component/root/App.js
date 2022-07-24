import Navi from "../navi/Navi";
import Dashboard from "./DashBoard";
import '../root/App.css'

import { Container } from 'reactstrap'
import { Routes, Route } from 'react-router-dom'
import CartDetails from "../cart/CartDetails";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} ></Route>
        <Route path="/product" element={<Dashboard />} ></Route>
        <Route path="/cart" element={<CartDetails />} ></Route>
      </Routes>
    </Container>


  );
}

export default App;
