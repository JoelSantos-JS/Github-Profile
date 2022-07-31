
import { useContext } from "react"
import Container from "../components/container"
import { context } from "../context"
import UserFollowing from "../components/userFollowing"

const Following = (props) => {
         const ctx = useContext(context)

    return (
            <Container>
              <UserFollowing name= {ctx.userData?.name} following = {ctx.following}  />
                </Container>
    )
}

export default Following