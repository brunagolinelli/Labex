import { useState } from "react"

export  default function useFrom (inicialState) {


    const [form, setForm] = useState(inicialState)

    const onChangeInput = (e) =>{
        const newValue = e.target.value
        const newName = e.target.name

        setForm({...form, [newName]:newValue})
    }


    return [form, onChangeInput]
}
