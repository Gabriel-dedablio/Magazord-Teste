import * as Tabs from '@radix-ui/react-tabs';
import './styles.css';
import { BookBookmark, Star } from 'phosphor-react';
import style from './tabs.module.css'
import CardsRepo from './CardsRepo';
import CardsStar from './CardsStar';
import { ReposProps } from "../types/repo";
import { useState, ChangeEvent, useEffect, useRef } from 'react';
import styled from "styled-components";

import { MagnifyingGlass } from "phosphor-react";

export const ButtonSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 47px 32px 34px;
  border-bottom: 1px solid #F4F4F4;
  padding-bottom: 8px; 

  svg{
    height: 24px;
    width: auto;
    color: #989898;
    margin-right: 13px;
  }

  input{
    border: none;
    padding: 4px 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #989898;
    outline: none;
    width: 100%;
    
    :focus-visible{
      outline: none;
    }
    ::placeholder{
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: #989898;
    }
  }

  @media (max-width: 744px){
    flex-direction: row-reverse;
    margin: 24px 0px;
    background: #F8F8F8;
    border-radius: 8px;
    padding: 16px;

    svg{
      color: #0587FF;
    }
    input{
      background: #F8F8F8;
    }
  }
`;

const TabsUser = ({ repo, starred }: { repo: ReposProps[]; starred: ReposProps[] }) => {
  const [auxRepo, setAuxRepo] = useState<ReposProps[]>(repo);
  const [filterRepo, setFilterRepo] = useState("");
  const [auxStarred, setAuxStarred] = useState<ReposProps[]>(starred);
  const [filterStarred, setFilterStarred] = useState("");
  const inputRefRepo = useRef(null);
  const inputRefStarred = useRef(null);

  useEffect(() => {
    setAuxRepo(repo.slice());
  }, [repo])

  useEffect(() => {
    setAuxStarred(starred.slice());
  }, [starred])

  const onChangeFilterRepo = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterRepo(value);
    if (value !== "" || value !== null || value !== undefined) {
      setAuxRepo(repo.filter(e => e.full_name.includes(value)));
    } else {
      setAuxRepo(repo.slice());
    }
  }
  const onChangeFilterStarred = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterStarred(value);
    if (value !== "" || value !== null || value !== undefined) {
      setAuxStarred(starred.filter(e => e.full_name.includes(value)));
    } else {
      setAuxStarred(starred.slice());
    }
  }
  {console.log(repo)}

  return (
    <>
      <Tabs.Root className={style.TabsRoot} defaultValue="tab1">
        <Tabs.List className={style.TabsList} aria-label="Manage your account">
          <Tabs.Trigger className={style.TabsTrigger} value="tab1">
            <BookBookmark /> <p>Repositories</p><span>{repo.length}</span>
          </Tabs.Trigger>
          <Tabs.Trigger className={style.TabsTrigger} value="tab2">
            <Star /> Starred <span>{starred.length}</span>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div>
            <ButtonSearch>
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Search Here"
                onChange={onChangeFilterRepo}
                value={filterRepo}
                ref={inputRefRepo}
              />
            </ButtonSearch>

          </div>
          {
            auxRepo.map((e: ReposProps) => <CardsRepo {...e} />)
          }
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div>
            <ButtonSearch>
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Search Here"
                onChange={onChangeFilterStarred}
                value={filterStarred}
                ref={inputRefStarred}
              />
            </ButtonSearch>

          </div>
          {
            auxStarred.map((e: ReposProps) => <CardsStar {...e} />)
          }
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}

export default TabsUser;