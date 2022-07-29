import { useState } from "react";
import { Container, ProfilePicture } from "./style";






export default function UserPicture(props) {

 
    

    

    return (
        <Container>
            <ProfilePicture src={props.url}/>
        </Container>
    )
}