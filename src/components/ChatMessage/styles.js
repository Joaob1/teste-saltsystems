import styled from "styled-components";

export const MessageSent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-bottom: 1rem;
  & p {
    max-width: 75%;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.4rem;
    padding: 1rem 2rem;
    word-wrap: break-word;
    border-radius: 2.5rem;
    text-align: right;
    color: #FFFFFF;
    background: #0b93f6;
    justify-self: flex-end;
  }
  & img{
    margin: 0 0.3rem;
    width: 5rem;
    border-radius: 50%;
  }
`;

export const MessageReceived = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  & span{
    font-size: 1.5rem;
  }
  & div {
    display: flex;
    align-items: center;
  }
  & p {
    background: #e5e5ea;
    color: #000000 !important;
    font-weight: 700;
    font-size: 1.7rem;
    max-width: 75%;
    word-wrap: break-word;
    line-height: 2.4rem;
    padding: 1rem 2rem;
    border-radius: 2.5rem;
    position: relative;
    color: white;
    text-align: left;
  }
  & img{
    border-radius: 50%;
    margin: 0 0.3rem;
    width: 5rem;
    height: 5rem;
  }
`;

export const DefaultIcon = styled.img`
  margin: 0 0.3rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  padding: 0.1rem;
  background-color: #000;
`