import styled from 'styled-components';

export const ButtonAdd = styled.button`
        all: unset;
        border: 2px solid #1976d2;
        height: 4.5rem;
        width: 13rem !important;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        border-radius: 2.25rem;
        color: #000;
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
            background-color: #1976d2;
            border-color: #fff;
            color: #fff;
        }
`

export const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    min-height: 100vh;
    min-width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.form`
    text-align: center;
    z-index: 2;
    width: 40vw;
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    border-radius: 2.4rem;
    & p{
        font-size: 2.2rem;
    }
    @media (max-width: 850px){
        width: 70vw;
    }
    @media (max-width: 500px) {
        width: 95vw;
    }
`
export const Avatar = styled.img`
    width: 10rem;
`

export const CloseButton = styled.img`
    cursor: pointer;
    pointer-events: all;
    position: absolute;
    right: 2.5rem;
    top: 2rem;
    width: 3.3rem;
    transition: all 0.1s;
    &:hover{
        transform: scale(1.1);
    }
`

export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`

export const ClearButton = styled.button`
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
  border: 2px solid #b80b11 !important;
  transition: all 0.3s;
  & svg {
    margin-right: 4rem;
  }
  &:hover {
    background-color:#b80b11 !important;
    border-color: #fff;
    color: #fff;
  }
`;

export const EnterButton = styled.button`
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
  &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  & svg {
    margin-right: 4rem;
  }
  &:hover {
    background-color: #1976d2;
    border-color: #fff;
    color: #fff;
  }
`;