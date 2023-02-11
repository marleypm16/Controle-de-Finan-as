import * as C from "./styles/CashCardStyle";
import Card from "./Card";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import {BsCashStack} from "react-icons/bs"
const CashCard =({entrada,saida,total}) => {
  return (
    <C.conteiner>
      <C.card>
            <Card title='Entrada' icon={<BsFillArrowUpCircleFill/>} cash={entrada}/>
            <Card title='Saida' icon={<BsFillArrowDownCircleFill/>} cash={saida}/>
            <Card title='Total' icon={<BsCashStack/>} cash={total}/>
      </C.card>
    </C.conteiner>
  );
}

export default CashCard;
