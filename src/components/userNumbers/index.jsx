import { Container, NumberContainer } from "./styles"

import  { useHistory} from 'react-router-dom'
import { useContext } from "react"
import { context } from "../../context"


 const UserNumbers = (props) => {
    const ctx = useContext(context)
    const history = useHistory()

    const HandleOnclick = route => history.push(route)

    return (
            <Container>
                <NumberContainer onClick={() => HandleOnclick('./repos')}>
                    <h1>{ctx.userData?.public_repos}</h1>
                    <h2>Repostiorios</h2>
                </NumberContainer>
                <NumberContainer>
                    <h1>{ctx.userData?.followers}</h1>
                    <h2>Seguidores</h2>
                </NumberContainer>
                <NumberContainer>
                    <h1>{ctx.userData?.following}</h1>
                    <h2>Seguindo</h2>
                </NumberContainer>
            </Container>
    )
 }

 export default UserNumbers