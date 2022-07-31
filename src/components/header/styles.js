import styled from 'styled-components';

export const HeaderSection = styled.header`
    width: 100%;
    max-width: 500px;
    margin: 80px 30px 0 30px;
    height: 150px;
    /* background: rgba(255,255,255, .2); */
    background-color: #151320;
    border-radius: 15px;
    box-shadow: 0  20px 35px rgba(0,0,0,0.3);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
    &::before {
        content: "";
        background-color: conic-gradient(
            #04b0ee 20deg,
            transparent 120deg
        );
        height: 150%;
        width: 150%;
        position: relative;
        left: -25%;
        top: -25%;
    }
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: whitesmoke;
    font-size: 37px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 300px;
    height: 35px;
    border-radius: 15px;
    border: none;
    font-size: 23px;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 15px;
    border: none;
    background: #633BBC;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`