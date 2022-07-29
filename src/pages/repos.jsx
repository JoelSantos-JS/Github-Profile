import { useContext } from "react"
import ReposCotainer from "../components/reposContainer"
import { context } from "../context"
import Container from "../components/container"
 const Repos = (props) => {
        const ctx = useContext(context)
    
    return (
        <Container>
            <ReposCotainer name= {ctx.userData?.name}  repos={ctx.repos}/>
        </Container>
    )

}


export default Repos