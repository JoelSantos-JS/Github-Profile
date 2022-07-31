
import { useContext } from "react"
import Container from "../components/container"
import UserFollowers from "../components/userFollowers"
import { context } from "../context"

const Followers = (props) => {
         const ctx = useContext(context)

    return (
            <Container>
                    <UserFollowers name= {ctx.userData?.name} followers = {ctx.followers}  />
                </Container>
    )
}

export default Followers