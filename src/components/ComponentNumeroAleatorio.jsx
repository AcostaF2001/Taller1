import { useState } from "react"
 
export const ComponentNumeroAleatorio=() =>{
    const [ numeros, addnum] = useState([])
    const [ sal, set] = useState([])
    const[num,setSal] = useState('')
 
    const onNum= (event) =>{
        setSal(event.target.value)
    }
    const generarArray = () => {
        let numeros = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
        console.log([numeros])
        console.log(numeros.length)
    }
 
    const imprimir=([numeros],num) =>{
        set(sal)
 
    }    
 
    return(
 
        <>
        <h1>8. Ingrese un número de 1 a 10</h1>
        <button onClick={() =>generarArray()}>Generar 10 numeros aleatorios</button>
        <p></p>
        <input type="text" onChange={(event)=> onNum(event)} value={num} placeholder="Ingrese número" />      
       
       
        <button onClick={() =>imprimir([numeros],num)}>Agregar aumento</button>
        <p> {sal} </p>
        </>
 
    )
}
