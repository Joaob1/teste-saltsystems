import styled from "styled-components";

export const Main = styled.main`
  padding: 10px;
  height: 80vh;
  justify-self: flex-end;
  align-self: flex-end;
  width: 50vw;
  margin: 10vh 0 10vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px){
    width: 70vw;
  }
  @media (max-width: 600px){
    width: 100vw;
  }
`;
export const FormSendMessage = styled.form`
  height: 10vh;
  position: fixed;
  bottom: 0;
  background-color: rgb(24, 23, 23);
  width: 50vw;
  display: flex;
  font-size: 2rem;
  border: 1px solid #fff;
  & input {
    line-height: 1.5;
    width: 100%;
    font-size: 2rem;
    background: rgb(58, 58, 58);
    color: #FFF;
    outline: none;
    border: none;
    padding: 0 1rem;
  }
  & button {
    background-color: #282c34;
    border: none;
    color: white;
    padding: 1.5rem 3.2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
    border: 1px solid #FFF;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  @media (max-width: 900px){
    width: 70vw;
  }
  @media (max-width: 600px){
    width: 100vw;
  }
`;
