import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cacaca;
    padding: 1rem;
`

export const ContactsList = styled.section`
    width: 50vw;
    height: 60%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    gap: 0.8rem;
    @media (max-width: 1000px){
        width: 100vw;
    }
    &::-webkit-scrollbar {
  width: 0.8rem;   
  height: 0.8rem;            
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
`

export const StyledContact = styled.div`
    min-width: 65rem;
    overflow-x: auto;
    width: 100%;
    background-color: #CACACA;
    padding: 0.8rem 1.6rem;
    border: 0.1rem solid black;
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    & strong {
        font-size: 2.5rem;
    }
    & span{
        font-size: 2rem;
    }
`

export const UserLetter = styled.div`
    min-width: 5rem;
    min-height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => bgColor};
    color: #fff;
    font-weight: 500;
    font-size: 2.4rem;
`

