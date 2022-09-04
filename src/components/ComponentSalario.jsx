import { useState } from "react"
 
export const ComponentSalario=() =>{
 
    const [ salarios, addSal] = useState([])
    const [ sal, set] = useState([])
    const[newSal,setSal] = useState('')
 
    const onSal= (event) =>{
        setSal(event.target.value)
    }
 
    const onAddSal = () => {
        salarios.push(newSal)
        console.log([salarios])
        console.log(salarios.length)
    }
 
    const agregarAumento=([salarios]) =>{
       
        if(salarios.length!= 10){
            const res='Ingresó más o menos de 10 salarios, por favor re intentar'
            set(res)
        } else {
            const newSalarios = []
            for (var i = 0; i <= salarios.length; i++){
                i = i + (i*0.08)
                newSalarios.push(i)
 
            }
            const res = 'Los salarios con un 8% de aumento son' + [newSalarios]
        }
 
    }
 
   
 
    return(
 
        <>
       
        <h1>7. Ingrese exactamente 10 salarios</h1>
        <input type="text" onChange={(event)=> onSal(event)} value={newSal} placeholder="Agregar salario" />      
        <button onClick={() =>onAddSal(newSal)}>Agregar salario</button>
        <p></p>
        <button onClick={() =>agregarAumento([salarios])}>Agregar aumento</button>
        <p> {sal} </p>
        </>
 
    )
 
}
