import styled from "styled-components"

export const ErrorDiv = styled.div`
  p{
    font-size: 24px;
  }
`;

const Error = () => {
  return (
    <ErrorDiv>
      <p>
        Usuario não encontrado!
      </p>
    </ErrorDiv>
  );
};

export default Error;