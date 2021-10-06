import PropTypes from 'prop-types'
import './Item.css'

const Item = (something)=>{

    const {title,amount} = something
    
    const status = amount<0 ? "expense" : "income"

    const symbol = amount<0 ? "-" : "+"

    const format_Number=(number)=>{
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }

    return (
        <li className={status}>{title} <span>{symbol}{format_Number(Math.abs(amount))}</span></li>
    )
}

Item.propTypes={
    title:PropTypes.string,
    amount:PropTypes.number
}

export default Item