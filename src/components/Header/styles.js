import styled from 'styled-components';

export const HeaderApp = styled.header`
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    background-color: #0b99f6;
    & h1 {
        font-weight: 700;
        font-size: 2.5rem;
    }
    & button{
        all: unset;
        min-width: 13.4rem;
        border: 2px solid #1976d2;
        height: 4.5rem;
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
    }
`
export const LogoSalt = styled.img`
    width: 10rem;
    cursor: pointer;
`
export const ButtonNavbar = styled.div`

`