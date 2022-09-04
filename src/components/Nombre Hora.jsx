import { useState } from "react"

export const Nombrehora=()=>{

    var [sal, set] = useState('')
    const[nombre,setnombre] = useState('')
    const[hora,sethora]=useState('')
    const[minutos,setmin]=useState('')
    const Setn= (event) =>{
        setnombre(event.target.value)
    }

    const Seth= (event) =>{
        sethora(event.target.value)
    }
    const Setm= (event) =>{
        setmin(event.target.value)
    }


    const Saludo=(nombre,hora) =>{

        
        if(hora > 6 && hora<=12 ){
            const tiempo='Buenos Dias' +" " + nombre

            set(tiempo)
        }

        if(hora > 12 && hora<=18 ){
            const tiempo='Buenos Tardes ' + " " + nombre
            set(tiempo)
        }
        
        if(hora > 18 && hora<=24 ){
            const tiempo='Buenos Noches '  + nombre
            set(tiempo)
        }
   

    }
     
    return(

        <>
        <h1>Ingrese su nombre</h1>
        <input type="text" onChange={(event)=> Setn(event)} value={nombre} />
        <h1>Ingrese la hora y minutos</h1>
        <input type="text" onChange={(event)=> Seth(event)} value={hora} placeholder="hora" />
        <input type="text" onChange={(event)=> Setm(event)} value={minutos} placeholder="minutos" />
        <p></p>
        <button onClick={() =>Saludo(nombre,hora)}>Saludos Terrícola</button>
        <p>{sal}</p>
        </>

    )
}