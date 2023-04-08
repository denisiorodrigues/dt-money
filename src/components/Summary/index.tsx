import { useContext } from "react";
import { SumaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions }  = useContext(TransactionsContext)
  
  return (
    <SummaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>R$ 18.000,00</strong>
      </SumaryCard>  
      <SumaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>

        <strong>R$ 18.000,00</strong>
      </SumaryCard>  
      <SumaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>R$ 18.000,00</strong>
      </SumaryCard>  
    </SummaryContainer>
  )
}