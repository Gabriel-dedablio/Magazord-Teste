type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}
import { MagnifyingGlass } from "phosphor-react"
import { useState, KeyboardEvent } from 'react';
import styled from "styled-components"

export const ButtonSearch = styled.div`
  display: flex;
  align-items: center;

  input{
    height: 33px;
    border-radius: 4px;
    border: none;
    padding: 4px 8px;
  }

  button{
    margin-left: 8px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    height: 33px;
    width: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    
    :hover{
      background: #ffffff29;
      transition: 0.3s;
    }
    svg{
      whight: 25px;
      width: 25px;
      height: auto;
    }
  }

  @media (max-width: 744px){
    margin-top: 16px;
    width:100%;

    input{
      width:100%;
    }
  }
`;

const Search = ({loadUser}: SearchProps) => {
  const [userName, setUserName] = useState('');
  const handleKeyDown = (e:KeyboardEvent) =>{
    if(e.key === 'Enter'){
      loadUser(userName);
      setUserName('');
    }
  }
  return (
    <ButtonSearch>
      <input 
        type="text" 
        placeholder="Digite o nome do usuário"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        value={userName}
      />
      <button onClick={() => loadUser(userName)}>
        <MagnifyingGlass />
      </button>
    </ButtonSearch>
  )
}

export default Search;