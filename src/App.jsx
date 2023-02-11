import CashCard from './componente/CashCard'
import { useEffect,useState } from 'react';
import Global from './style_global/styles_global';
import Header from './componente/Header';
import Form from './componente/Form';


function App() {
  const data = localStorage.getItem('money')
  const [moneyList,setMoneyList] = useState(data ? JSON.parse(data) : [])
  const [entrada,setEntrada] = useState(0)
  const [saida,setSaida] = useState(0)
  const [total,setTotal] = useState(0)
  

  useEffect(()=>{
      const montanteEntrada = moneyList.filter((item) => !item.saida).map((transaction) => Number(transaction.dinheiro))

      const montanteSaida = moneyList.filter((item) => item.saida).map((transaction) =>Number(transaction.dinheiro))

      const entrada = montanteEntrada.reduce((acc,cur) => acc+cur,0).toFixed(2)
      const saida = montanteSaida.reduce((acc,cur) => acc+cur,0).toFixed(2)

      const total = Math.abs(entrada - saida).toFixed(2)

      setEntrada(`R$ ${entrada}`)
      setSaida(`R$ ${saida}`)
      setTotal(`${Number(saida) > Number(entrada) ? '-':''} R${Number(total)}`)

  },[moneyList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...moneyList, transaction];

    setMoneyList(newArrayTransactions);

    localStorage.setItem("money", JSON.stringify(newArrayTransactions));
  };




  return(
    <>
      <Header/>
      <CashCard entrada={entrada} saida={saida} total={total}/>
      <Form handleAdd={handleAdd} transactionsList={moneyList} setTransactionsList={setMoneyList}/>
      <Global/>
    </>
  )
}

<script src="https://kit.fontawesome.com/d72d1c8b4e.js" crossorigin="anonymous"></script>

export default App
