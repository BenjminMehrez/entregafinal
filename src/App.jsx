
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemLContainer from './components/ItemLContainer/ItemLContainer';
import ItemDContainer from './components/ItemDContainer/ItemDContainer';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import { CartCountainer, CartContextProvider } from "./context/CartContext";
import { initFirebase } from "./firebase/config";

import 'bootstrap/dist/css/bootstrap.min.css'


initFirebase()

function App() {

  let carrito = [];

  return (

    <BrowserRouter>
      <CartContextProvider>

          <div className="App border-3 border-warning">

            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemLContainer greeting='estoy saludando' />} />
              <Route path="/categoria/:cid" element={<ItemLContainer greeting='estoy saludando' />} />

              <Route path="/detail/:pid" element={<ItemDContainer />} />
              {/* <Route path="/contacto" element={<FormContainer />} /> */}
              {/* <Route path="/cart" element={<CartCountainer />} /> */}
              <Route path="*" element={<Navbar to='/' />} />
            </Routes>
          
          </div>
      </CartContextProvider>
    </BrowserRouter >
  )
}

export default App;

