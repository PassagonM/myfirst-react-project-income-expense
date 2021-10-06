import { useState,useEffect } from 'react'
import './Formcomponent.css'
import {v4 as uuidv4} from 'uuid';

const Formcomponent = (props)=>{

    // การใช้ React Hook useState
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event)=>{
        // console.log(event.target.value)
        setTitle(event.target.value)
    }
    
    const inputAmount = (event)=>{
        // console.log(event.target.value)
        setAmount(event.target.value)
    }

    const saveItem = (event)=>{
        event.preventDefault()
        console.log("บันทึกข้อมูลเรียบร้อย")
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const chackData = title.trim().length>0 && amount!==0
        setFormValid(chackData)
    },[amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ / - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>

    )
}

export default Formcomponent