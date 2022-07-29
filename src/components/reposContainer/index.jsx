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
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>

    )
}