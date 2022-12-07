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
  &::-webkit-scrollbar {
  width: 8px;               
}

&::-webkit-scrollbar-track {
  background: #cacaca;        
}

&::-webkit-scrollbar-thumb {
  background-color: #0b93f6;
  border-radius: 2rem;
  &:hover{
    background-color: rgb(25, 118, 210);
  }
  }
  @media (max-width: 900px){
    width: 70vw;
  }
  @media (max-width: 600px){
    width: 100vw;
  }
`;
export const FormSendMessage = styled.form`
  height: 10vh;
  margin-left: -10px;
  position: fixed;
  bottom: 0;
  background-color: rgb(24, 23, 23);
  width: 50vw;
  display: flex;
  align-items: center;
  font-size: 2rem;
  border: 1px solid #fff;
  & input {
    line-height: 1.5;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    background: rgb(58, 58, 58);
    color: #FFF;
    outline: none;
    border: none;
    padding: 0 1rem 0 6rem;
  }
  & button {
    background-color: #282c34;
    border: none;
    color: white;
    padding: 1.5rem 3.2rem;
    height: 100%;
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
export const EmojiContainer = styled.img`
    cursor: pointer;
    width: 3rem;
    position: absolute;
    left: 1.5rem;
`
export const PickerContainer = styled.div`
  position: absolute;
  bottom: 10vh;
`