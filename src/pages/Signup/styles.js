import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterCard = styled.form`
  padding: 5rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 10px #808080;
  background-color: #f8f8f8;
  & h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

export const RegisterButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 16rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  border-radius: 0.8rem;
  color: #000000;
  border: 1px solid #1976d2;
  transition: all 0.3s;
  & svg {
    margin-right: 4rem;
  }
  &:hover {
    background-color: #1976d2;
    border-color: #fff;
    color: #fff;
  }
`;

export const LogoImage = styled.img`
  width: 12rem;
  position: absolute;
  cursor: pointer;
  top: 2rem;
  left: 3rem;
`;

export const LinkToSignIn = styled.span`
    font-size: 1.4rem;
    & a{
        color: #1976d2;
    }
`