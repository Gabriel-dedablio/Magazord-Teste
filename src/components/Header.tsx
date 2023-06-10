type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
}
import LogoGitHub from '../assets/logo-github.svg'
import styled from "styled-components"
import Search from './Search';

export const HeaderContent = styled.header`
  background: #24292E;
  height: 72px;
  display: flex;
  margin-bottom: 40px;

  .container{
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 744px){
    height: auto;
    padding: 16px 0;
    .container{
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Line = styled.div`
  display: flex;
  align-items: center;
  
  span{
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    margin: 0 22px;
  }

  p{
    color: #FFFFFF;
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: 300;
  }
`;

const Header = ({loadUser}: SearchProps) => {
  return(
    <HeaderContent>
      <div className="container">
        <Line>
          <img src={LogoGitHub} alt="logo github" />
          <span>/</span>
          <p>Profile</p>
        </Line>
       <Search loadUser={loadUser} />
      </div>
    </HeaderContent>
  );
};

export default Header;