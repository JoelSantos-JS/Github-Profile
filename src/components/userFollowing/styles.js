import styled from "styled-components";



export const Section = styled.section `
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

export const UserLogin = styled.h1 `

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }


    a {
        font-size: 18px;
        text-decoration: none;
        color: whitesmoke;
    }
`

export const Back = styled.button `
    padding: -10px 30px;
    background-color: #151320;
    color: whitesmoke;
    width: 100%;
    max-width: 20px;
    top: 3%;
    font-size: 28px;
    left: 4%;
    position: absolute;
    cursor: pointer;
    border-radius: 15px;
`