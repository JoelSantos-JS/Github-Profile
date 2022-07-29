import { Container , Name , Description, UserName } from "./styles"




 const UserDetails = (props) => {
    return  (
            <Container>
                    <Name>{props.name}</Name>
        <UserName>{props.login}</UserName>
        <Description>{props?.bio}</Description>
            </Container>
    )
}

export default UserDetails