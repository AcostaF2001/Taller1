import { useState } from "react"
 
export const Componentimpares=() =>{
   
    var [lista, set] = useState([])
    const[numero,setnum1] = useState('')
   
   
 
    const Setnum= (event) =>{
        setnum1(event.target.value)
       
    }
   
   
 
    const numerosImpares=(numero) =>{
       
 
        for (var i = 0; i < numero; i++) {
            if(i % 2 != 0 ){
                var impar= i
                lista.push(i)
               
            }
           
         }
         set([lista])
    }
 
    return(
 
        <>
       
        <h1>6. Ingrese un número</h1>
        <input type="text" onChange={(event)=> Setnum(event)} value={numero} placeholder="Número" />        
        <p></p>
        <button onClick={() =>numerosImpares(numero)}>¡Boom! Magia</button>
        <p>
            Los números impares menores que {numero} son: {lista} </p>
        </>
 
    )
}
