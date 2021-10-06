import { number } from "prop-types"
import { useContext } from "react/cjs/react.development"
import Datacontext from "../data/Datacontext"
import "./Reportcomponent.css"

const Reportcomponent = ()=>{
    const {income , expense} = useContext(Datacontext)
    const format_Number=(number)=>{
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>{format_Number((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report incomeplus">฿ {format_Number(income)}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report expenseminus">฿ {format_Number(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default Reportcomponent