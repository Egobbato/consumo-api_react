import {useState , useEffect } from 'react';
import Repositorio from '../Repositorio'



function ListaRepo (){
    const [repositorio, Setrepositorio] = useState ([]);

    useEffect(() => {
        fetch("http://api.github.com/users/egobbato/repos")
        .then(response => response.json())
        .then(data => Setrepositorio(data))
        .catch(error => console.error(error.message));
      }, [repositorio])

    return(
        <div className='listaRepo'><ul>
         {repositorio.map((repo) => {
              return(
                  <Repositorio repositorio={repo}/>
              )
            })}
        </ul>

        </div>
    )
}

export default ListaRepo