import { useEffect ,useState } from "react";

interface IRepositorio{

        repositorio:{
            id: number;
        name: string;
        description: string;
        html_url: string;
        favorite?: boolean;
        }

}

 function  Repositorio (props:IRepositorio){

const [favorito,setFavorito] = useState(false)





return(
    <li key={props.repositorio.id}>
        <strong>{props.repositorio.name}</strong>
        <p>{props.repositorio.description}</p>
        <a href={props.repositorio.html_url}>Acessar o Repositorio</a>
        <button onClick={()=>setFavorito(true)}>Favoritar</button>
        {favorito?  <span>Favorito</span>:null}
    </li>
)

};

export default Repositorio

