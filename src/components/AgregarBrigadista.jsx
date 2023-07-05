import {React, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const AgregarBrigadista = (props) => {
    // Se obtiene la funcion para agregar brigadistas
    const{AgregarNuevoB} = props;
    // Se crean variables globales
    let iden = "";
    let nombre = "";
    let edad = "";
    let ciudad = "";
    // Se instancia el hook useNavigate
    let navigate = useNavigate();
    // Se define la funcion para agregar
    const agregar = () =>{
        // nuevo brigadista
        let nuevo = {id: iden, name: nombre, age: edad, city: ciudad};
        // Se agrega el nuevo brigadista
        AgregarNuevoB(nuevo);
        // Se dirige a Home
        navigate("/");
    }

    /* Funciones manejadoras para recuperar los valores de los input */
    const handlerId = (e) => {
        iden = e.target.value;
    }
    const handlerNombre = (e) => {
        nombre = e.target.value;
    }
    const handlerEdad = (e) => {
        edad = e.target.value;
    }
    const handlerCiudad = (e) => {
        ciudad = e.target.value;
    }

    return (
        <div>
            <h1>Agregar Brigadista</h1>
            <div className="Form" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left"}}>
                <label className="lbl">Id:</label>
                <input type="number" id="id" onChange={handlerId} placeholder="Id"></input>
                <label className="lbl">Nombre:</label>
                <input type="text" id="nombre" onChange={handlerNombre} placeholder="Pon tu nombre."></input>
                <label className="lbl">Edad:</label>
                <input type="number" id="edad" onChange={handlerEdad} placeholder="Pon tu edad."></input>
                <label className="lbl">Ciudad:</label>
                <input type="text" id="ciudad" onChange={handlerCiudad} placeholder="Pon tu ciudad."></input>
                <button onClick={agregar} style={{margin: '10px'}}>Agregar</button>

                <button onClick={()=>navigate("/")}>Regresar</button>
            </div>
        </div>
    );
}

export default AgregarBrigadista;