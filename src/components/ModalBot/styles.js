import styled from 'styled-components';

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

export const Modal = styled.div`
    text-align: center;
    z-index: 2;
    pointer-events: none;
    width: 50vw;
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