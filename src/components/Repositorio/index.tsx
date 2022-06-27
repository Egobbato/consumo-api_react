import {Button} from '../Button/styles'
import { Item } from './styles'

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
    <Item key={props.repositorio.id}>
        <strong>{props.repositorio.name}</strong>
        <p>{props.repositorio.description}</p>
        <a href={props.repositorio.html_url}>Acessar o Repositorio</a>
        <Button onClick={()=>setFavorito(true)}>Favoritar</Button>
        {favorito?  <span>Favorito</span>:null}
    </Item>
)

};

export default Repositorio

