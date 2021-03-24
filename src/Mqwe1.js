import React from 'react'
import './Mqwe1.css'
function Mqwe1(props) {
    return (
        <tr className='Container'>
            <td>{props.person.name}</td>
            <td>{props.person.height}</td>
            <td>{props.person.mass}</td>
            <td>{props.person.hair_color}</td>
            <td>{props.person.skin_color}</td>
            <td>{props.person.eye_color}</td>
            <td>{props.person.birth_year}</td>
        </tr>
    
    )
}

export default Mqwe1