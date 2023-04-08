import { useContext } from "react";
import { SumaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
  const { transactions }  = useContext(TransactionsContext)

  const sumary = transactions.reduce(
    (accumulator, transaction) => {
      if(transaction.type === 'income'){
        accumulator.income += transaction.price
        accumulator.total += transaction.price
      } else {
        accumulator.outcome += transaction.price
        accumulator.total -= transaction.price
      }

      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total:0
    }
  )
  
  return (
    <SummaryContainer>
      <SumaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>{priceFormatter.format(sumary.income)}</strong>
      </SumaryCard>  
      <SumaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>

        <strong>{priceFormatter.format(sumary.outcome)}</strong>
      </SumaryCard>  
      <SumaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>{priceFormatter.format(sumary.total)}</strong>
      </SumaryCard>  
    </SummaryContainer>
  )
}