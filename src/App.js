import Transaction from "./components/Transaction";
import './App.css'
import Formcomponent from "./components/Formcomponent";
import { useState,useEffect } from "react";
import Datacontext from "./data/Datacontext";
import Reportcomponent from "./components/Reprotcomponent";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {
  const [items,setitems] = useState([])

  const [reportIncome,setreportIncome] = useState(0)
  const [reportexpense,setreportexpense] = useState(0)

  const onAddNewItem = (newitem)=>{
    setitems((pervItem)=>{
      return [newitem,...pervItem]
    })
  }

  useEffect(()=>{
    const amount = items.map(items=>items.amount)
    const incomes = amount.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = Math.abs(amount.filter(element=>element<0).reduce((total,element)=>total-=element,0))
    setreportIncome(incomes.toFixed(2))
    setreportexpense(expense.toFixed(2))
  },[items,reportexpense,reportIncome])

  return (
    <Datacontext.Provider value={{income : reportIncome,expense : reportexpense}}>
      <div className = "container">
        <h1 style={{color:'red', textAlign:'center', fontSize:'1.5rem'}}>บัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">สรุปข้อมูล</Link>
              </li>
              <li>
                <Link to="/insert">เพิ่มข้อมูล</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <Reportcomponent/>
              </Route>
              <Route path="/insert">
                <Formcomponent onAddItem={onAddNewItem}/>
                <Transaction items={items}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Datacontext.Provider>
  );
}

export default App;
