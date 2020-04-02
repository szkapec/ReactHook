import React, {useState, useEffect} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'; //dlugi indywidualny identyfikator xd
import styled from 'styled-components';
const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [];
// const orders = [31.54,19.99,4.55];
// // console.log(orders.reduce((zwroconaZKazdegoCollbacku, amout) => zwroconaZKazdegoCollbacku+amout))
// // console.log(orders.reduce((zwroconaZKazdegoCollbacku, amout, index , array) => array.length))
// const numbers = [1,2,3,3,4]
// let aa = new Set(numbers).size //elementy bez duplikatow
// console.log(aa)



function App() {
   const [expenses, setExpenses] = useState(initialExpenses)
   const [charge, setCharge] = useState('');//zamiast stanu z pusty ciagiem zapisywany jest e.target.value
   let [amount, setAmount] = useState('');
   const [alert, setAlert] = useState({show: false})
   const [edit, setEdit] = useState(false)
   const [idd, setId] = useState(0)

  useEffect(()=> {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },[expenses])

   const handleCharge = e => {
    setCharge(e.target.value);
  }
  const handleAmount = e => {
    setAmount(e.target.value);
  }
  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text})
    setTimeout(()=> {
      setAlert({show:false})
    }, 3000)
  }


  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== ""){
     
      if(amount===""){
        amount=0;
      }
      if(edit) {
        let tempExpenses = expenses.map(item => {
          console.log(item)
          return item.id === idd ? {...item, charge:charge, amount:amount} : item //item:idnie pasuje
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({type:'success', text:"Edytowano prawidłowo"})
      }
      else{
        const subgleExpense = {id:uuid(), charge:charge, amount}
        setExpenses([...expenses, subgleExpense])
        handleAlert({type:'success', text:"Dodano artykuł"})
      }


      setCharge("");
      setAmount("");
    }
    else{
      handleAlert({type:'danger', text:`charge can be empty value and amount value has to be bigger than zero`})
    }
  }

  const clearItems = () => {
    setExpenses([])
  }
  const handleDelete = (id) => {
    let tempDelete = expenses.filter(item => item.id !== id)
    setExpenses(tempDelete)
    handleAlert({type:"danger", text:'Usunięto prawidłowo'})
  }
  const handleEdit = (id) => {
    console.log(`item edit ${id}`) //tylko id
    let expense = expenses.find(item => item.id === id) //caly obiekt

    setCharge(expense.charge) //nazwa
    setAmount(expense.amount) //pieniadz
    setEdit(true);
    setId(id)
    
  }

  return (
    <div>
      {alert.show&&<Alert type={alert.type} text={alert.text}/>}
      <StyledH1>Lista zakupów</StyledH1>
      <StyledMain className="App">
      <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} edit={edit} ></ExpenseForm>
      <ExpenseList expenses={expenses} clearItems={clearItems} handleDelete={handleDelete} handleEdit={handleEdit}></ExpenseList>
      <StyledH1>Koszt całkowity: <span className="total">{expenses.reduce((suma,nast)=> {return(suma+=parseFloat(nast.amount))},0)}zł</span></StyledH1> 
      </StyledMain>
       
    </div>
  );
}

export default App;

const StyledMain = styled.main`
    width: 90%;
    margin: 20px 5%;
    background-color: white;
    
    @media(min-width: 800px){
      max-width: 800px;
      margin: 20px auto;
    }

`

const StyledH1 = styled.h1`
  font-size: 20px;
  font-weight:700;
  text-align: center;
  padding: 20px 0;
`
