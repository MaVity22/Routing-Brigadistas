import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
const DetalleBrigadista = (props) => {
    // Se obtiene la funcion para obtener el brigadista por su id
    const { getBrigadista } = props;
    // Se instancia el hook useNavigate
    let navigate = useNavigate();
    // Se obtiene el parámetro del path
    let { id } = useParams();
    // se obtiene el brigadista buscado
    let buscado = getBrigadista(id);
    console.log(buscado);
    return (
        <div>
            <h1>Detalle del Brigadista {buscado.id}</h1>
            <p>Nombre: {buscado.name}</p>
            <p>Edad: {buscado.age}</p>
            <p>Ciudad: {buscado.city}</p>
            <button onClick={()=>navigate("/")}>Regresar</button>
        </div>
    );
}

export default DetalleBrigadista;