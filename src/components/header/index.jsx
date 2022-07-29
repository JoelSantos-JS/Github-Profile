import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client'
import { context } from '../../context';

const Header = () => {

    const ctx = useContext(context)

    const [searchValue, setSearchValue ] = useState('')

    async function getUserData() {

        try {
            const response = await client.get(`/${searchValue}`)
            const repos = await client.get(`/${searchValue}/repos`)
            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
        } catch (err) {
            console.log(err)
        }

    }

    const HandleSearch =(e) => {
        
        if(e.keyCode === 13) {
            setSearchValue(e.target.value) 
        }
    }
    
    return (
    <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchValue}  onChange={(e) => setSearchValue(e.target.value)} onKeyUp={HandleSearch}/>
            
            <HeaderSearchButton onClick={getUserData}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
);

}

export default Header;