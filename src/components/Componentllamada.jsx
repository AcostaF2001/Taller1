import { useState } from "react"

export const Componentllamada=() =>{

    var [totalpagar, set] = useState('')
    const[minutos,setllamada] = useState('')
    const Setlla= (event) =>{
        setllamada(event.target.value)
    }

 
    const pago=(minutos) =>{
        
        if( minutos < 3) {
            const valor=100
            set([valor])
            
        }
        else {
            const excedente = (minutos - 3) * 50
            const valor= 100+excedente
            set([valor])
        }
        
        
   

    }
     
    return(
        <>
        <h1>Ingrese la duracion de la llamada en Minutos</h1>
        <input type="text" onChange={(event)=> Setlla(event)} value={minutos} />
        <button onClick={() =>pago(minutos)}>valor a cobrar</button>
        <p>
            El valor a pagar es: {totalpagar} $</p>
        </>

    )

}