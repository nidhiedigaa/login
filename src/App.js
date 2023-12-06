import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
