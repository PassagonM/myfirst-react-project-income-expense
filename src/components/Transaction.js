import Item from "./Item"
import './Transaction.css'

const Transaction = (props)=>{
    const {items} = props
    return (
        <div>
            <ul className="item-list"> 
                {items.map((somedata)=>{
                return <Item {...somedata} key={somedata.id}/>
                })}
            </ul>
        </div>
    )
}

export default Transaction