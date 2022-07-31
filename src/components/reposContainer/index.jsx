import { ListOfReposContainer, Repo, Section, Title , Back } from "./styles";
import { useHistory } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi'

export default function ReposCotainer(props) {
    const history = useHistory()

    const HandleOnclick = route => history.push(route)

    return (
        <Section>
            <Back onClick={() => HandleOnclick('./')}><FiArrowLeft/></Back>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (

                    
                    <Repo  key={repo?.id}>
                        <a  href={repo?.html_url} target="_blank">{repo?.name}</a>
                        <p>{repo?.description}</p>
                        
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>

    )
}