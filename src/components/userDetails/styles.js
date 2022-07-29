import styled from "styled-components";




export const Container = styled.div `
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;


`

export const Name = styled.h1 `
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
`

export const UserName = styled.h2 `
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: whitesmoke;
    padding: 5px;

`


export const Description = styled.p `
        width: 300px;
        height: 50px;
        margin: 0 auto;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        text-align: justify;
        color: #fff;
        line-height: 1.3;
        overflow: hidden;

        @media (max-width: 430px) {
            width: 250px;
        }

`