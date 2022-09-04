import { useState } from "react"
import { Componentlistanumeros } from "./Componentlistanumeros"

    export const Componentnumeros = () => {

        var [sal, set] = useState('')
        const [pnumero, setnum1] = useState('')
        const [snumero, setnum2] = useState('')
        const [tnumero, setnum3] = useState('')



        const [categories, addCat] = useState([pnumero, snumero, tnumero])

        const Set1 = (event) => {
            setnum1([event.target.value])
        }

        const Set2 = (event) => {
            setnum2(event.target.value)
        }
        const Set3 = (event) => {
            setnum3(event.target.value)
        }

        const onComponentlistanumeros = () => {
            addCat([...categories])
        }

        const numerosIguales = (pnumero, snumero, tnumero) => {


            if (pnumero == snumero == tnumero) {

                const nums = 'Hay ' + 3 + ' números iguales.'

                set(nums)
            }

            else if ((pnumero == snumero) || (pnumero == tnumero) || (snumero == tnumero)) {

                const nums = 'Hay ' + 2 + ' números iguales.'

                set(nums)
            }

            else if (pnumero != snumero != tnumero) {
                const nums = 'No hay números iguales'

                set(nums)
            }
        }




        return (

            <>
                <Componentlistanumeros onComponentlistanumeros={onComponentlistanumeros} />
                <h1>4. Ingrese 3 números</h1>
                <input type="text" onChange={(event) => Set1(event)} value={pnumero} placeholder="Primer número" />
                <input type="text" onChange={(event) => Set2(event)} value={snumero} placeholder="Segundo número" />
                <input type="text" onChange={(event) => Set3(event)} value={tnumero} placeholder="Tercer número" />
                <p></p>
                <button onClick={() => numerosIguales(pnumero, snumero, tnumero)}>Hey! Click me</button>
                <p>{sal}</p>
            </>

        )

    }
