import styled from "styled-components";


export const Section = styled.div `
    width: 100%;
    max-width: 400px;
    height: 400px;
    background: rgba(255,255,255, .95);
    background-color: #151320;
    color: whitesmoke;
    border-radius: 10px;
    border-bottom: 10px solid #633BBC;
    margin-top: 15px;
    position: relative;
    box-shadow: 16px 14px 20px #0000008c;
    @media (max-width: 430px) {
        width: 300px;
    }
`

export const Title = styled.h1 `
    font-size: 25px;
    font-weight: 700;
    margin-top: 10px;
    color: whitesmoke;
    width: 100%;
    text-align: center;
    height: 30px;
`


export const ListOfReposContainer = styled.h1 `
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Repo = styled.span `
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;

    a {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: whitesmoke;
    }

    p {
        font-size: 12px ;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 12px;
    }
`

export const Back = styled.button `
    padding: -10px 30px;
    background-color: #151320;
    color: whitesmoke;
    top: 3%;
    font-size: 28px;
    left: 4%;
    position: absolute;
    cursor: pointer;
    border-radius: 15px;
`