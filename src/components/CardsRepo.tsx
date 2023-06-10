import { GitBranch, Star } from "phosphor-react";
import styled from "styled-components"
import { ReposProps } from "../types/repo";

export const Card = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 0.3s;
  cursor: pointer;
  @media (max-width: 744px){
    padding: 32px 0;
    border-bottom: 1px solid #F8F8F8; 
  }
  h3{
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #000000;

    span{
     color: #0587FF;
     font-weight: bold;
    }
  }

  p{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #989898;
  }

  h3, p{
    margin-bottom: 9px;
    word-break: break-all;
  }

  :hover{
    box-shadow: 0px 0px 16px rgba(79, 79, 80, 0.15);
    transition: 0.3s;

    @media (max-width: 744px){
      box-shadow: none;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: flex-start;

  p{
    min-width: 90px;
    color: #000000;
    display: flex;

    svg{
      margin-right: 8px;
    }
  }
`;

const CardsRepo = (repo: ReposProps) => {
  return (
    <a href={repo.html_url} target="_blank">
      <Card>
        <h3>{repo.language} <strong>/</strong> <span className="ln">{repo.name}</span></h3>
        <p>{repo.description}</p>
        <Status>
          <p>
            <Star weight="fill"/> {repo.stargazers_count}
          </p>
          <p>
            <GitBranch /> {repo.forks_count}
          </p>
        </Status>
      </Card >
    </a>
  )
}

export default CardsRepo