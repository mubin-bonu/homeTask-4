import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { types } from "../redux/types"
import { addAction, subAction, multiAction, divAction } from "../redux/actions"



export default function CalculatorApp() {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    const {result} = useSelector(state => state.calculatorReducer)

    const addition = () => {
        dispatch(addAction(value, value2))
        if (value === '') {
            return alert('Напишите цифру');
        } else if (value2 === '') {
            return alert('Напишите цифру')
        }
    }

    const subtraction = () => {
        dispatch(subAction(value, value2))
        if (value === '') {
            return alert('Напишите цифру');
        } else if (value2 === '') {
            return alert('Напишите цифру')
        }
    }

    const multiplication = () => {
        dispatch(multiAction(value, value2))
        if (value === '') {
            return alert('Напишите цифру');
        } else if (value2 === '') {
            return alert('Напишите цифру')
        }
    }

    const division = () => {
        dispatch(divAction(value, value2))
        if (value === '') {
            return alert('Напишите цифру');
        } else if (value2 === '') {
            return alert('Напишите цифру')
        }
    }

    return (
        <div>
            <input type="number" onChange={(e) => setValue(e.target.value)}/>
            <input type="number" onChange={(e) => setValue2(e.target.value)}/>
            <button onClick={addition}> + </button>
            <button onClick={subtraction}> - </button>
            <button onClick={multiplication}> * </button>
            <button onClick={division}> / </button>
            <span> {result} </span>
        </div>
    )
}