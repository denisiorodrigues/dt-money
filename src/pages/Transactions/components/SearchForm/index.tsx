import { MagnifyingGlass } from "phosphor-react";
import { SearFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearFormContainer>
      <input type="text" placeholder="Busque pos transações"/>
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearFormContainer>
  )
}