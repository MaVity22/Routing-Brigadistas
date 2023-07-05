import './App.css';
import AgregarBrigadista from './components/AgregarBrigadista';
import ListaBrigadistas from './components/ListarBrigadistas';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useState } from 'react';
import DetalleBrigadista from './components/DetalleBrigadista';
import Home from './components/Home';

function App() {
  // Se establece una variable global
  const [listadoBrigadistas, setListadoBrigadista] = useState([
    { id:1 ,name: "Mateo", age: 22, city: "Quito"},
    { id:2 ,name: "Carlos", age: 21, city: "Babahoyo" }, 
    { id:3 ,name: "Joel", age: 23, city: "Cuenca" },
    { id:4 ,name: "Jose", age: 25, city: "Ambato" }
  ]);

  // Funcion para agregar nuevo brigadista
  const AgregarNuevoB = (nuevo) =>{
    listadoBrigadistas.push(nuevo);
  }

  // Funcion para obtener el brigadista por su id
  const getBrigadista = (id) =>{
    for(var Bri of listadoBrigadistas){
      if(Bri.id == id){
        return Bri;
      }
    }
  }


  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home lista={listadoBrigadistas}></Home>}></Route>
            <Route path="/brigadista/new" element={<AgregarBrigadista AgregarNuevoB={AgregarNuevoB}></AgregarBrigadista>}></Route>
            <Route path="/brigadista/:id" element={<DetalleBrigadista getBrigadista={getBrigadista}></DetalleBrigadista>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
