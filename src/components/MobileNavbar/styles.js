import styled from 'styled-components';

export const MobileButton = styled.div`
    width: 5rem;
    height: 5rem;
`

export const Navbar = styled.div`
    z-index: 5;
    border: 1px solid #000;
    position: absolute;
    background-color: #fff;
    border-radius: 1.6rem;
    right: 1.5rem;
    gap: 1.8rem;
    top: 11vh;
    width: 20rem;
    padding: 4rem 5rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CloseIcon = styled.img`
    position: absolute;
    width: 2rem;
    right: 1.5rem;
    top: 1.5rem;
`