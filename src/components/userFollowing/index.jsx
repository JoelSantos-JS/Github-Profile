
import { Section,  ListOfReposContainer, Repo , UserLogin , Back } from "./styles"
 
import {useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


function UserFollowing  (props)  {
    const history = useHistory()

    const HandleOnclick = route => history.push(route)

    return (
        <Section>
            <Back onClick={() => HandleOnclick('./')}><FiArrowLeft/></Back>
                <UserLogin>Following de {(props?.name)?.split(' ')[0]} </UserLogin>
                    <ListOfReposContainer>
                    
                                {(props?.following).map(follow => (
                                    <Repo key={follow?.id}>
                                            <img src={follow.avatar_url} alt="" href={follow?.html_url} />
                                            <a href={follow?.html_url} target="_blank">{follow.login}</a>
                                    </Repo>
                                ))}

                        </ListOfReposContainer>
                
        </Section>
    )
}

export default UserFollowing