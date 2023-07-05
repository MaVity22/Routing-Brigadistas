// Probando subir el proyecto a Github
import React from "react";
import { useNavigate, Link} from "react-router-dom";

const Home = (props) => {
    // Se desesctructura para obtener la lista
    const {lista} = props;
    // Se instancia el hook useNavigate()
    let navigate = useNavigate();
    return (
        <div className="conetenedor">
            <h1>Lista de Brigadistas</h1>
            <ul style={{listStyle: 'none', padding: '0%'}}>
                {lista.map((item)=>{
                return(
                    <li key={item.id}><Link to={"/brigadista/"+item.id}>{item.name}</Link></li>
                )})}
            </ul>
            <button onClick={()=>navigate("/brigadista/new")}>Agregar</button>
        </div>
    );
}

export default Home;