
import { Section,  ListOfReposContainer, Repo , UserLogin , Back } from "./styles"
 
import {useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


function UserFollowers  (props)  {
    const history = useHistory()

    const HandleOnclick = route => history.push(route)

    return (
        <Section>
            <Back onClick={() => HandleOnclick('./')}><FiArrowLeft/></Back>
                <UserLogin>Followers de {(props?.name)?.split(' ')[0]} </UserLogin>
                    <ListOfReposContainer>
                    
                                {(props?.followers).map(follo => (
                                    <Repo key={follo?.id}>
                                            <img src={follo.avatar_url} alt="" href={follo?.html_url} />
                                            <a href={follo?.html_url} target="_blank">{follo.login}</a>
                                    </Repo>
                                ))}

                        </ListOfReposContainer>
                
        </Section>
    )
}

export default UserFollowers