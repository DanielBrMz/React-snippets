import React from 'react'
import { DbContent } from '../ts/interfaces/global_interfaces';

const CrudTableRow = ({el, setDataToEdit, deleteData}: {el: DbContent, setDataToEdit: (dataToEdit: DbContent)=>void, deleteData: (id: number)=>unknown}) => {
    const {id,name,version,url} = el,
     {position, team} = el;
  
  return (
    <tr>
        <td>{name}</td>
        <td>{version || position}</td>
        <td>{url || team}</td>
        <td>
            <button onClick={()=>setDataToEdit(el)}>Editar</button>
            <button onClick={()=>deleteData(id as number)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default CrudTableRow;
