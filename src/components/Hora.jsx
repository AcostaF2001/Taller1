import { useState } from "react"


export const Hora=()=>{
   
    var [horaCambiada, set] = useState('')
    const[seg,setseg] = useState('')
    const Setsegundo= (event) =>{
        setseg(event.target.value)
    }

    const Cambiarhora=(seg) =>{
        
        var hour = Math.floor(seg/ 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seg / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seg % 60;
        second = (second < 10)? '0' + second : second;
        const Formato= hour + ':' + minute + ':' + second;
        console.log(Formato)
        set([Formato])
   

    }
     
    return(
        <>
        <h1>Ingrese la hora en Segundos</h1>
        <input type="text" onChange={(event)=> Setsegundo(event)} value={seg} />
        <button onClick={() =>Cambiarhora(seg)}>Convertir la Hora</button>
        <p>{horaCambiada}</p>
        </>

    )
}