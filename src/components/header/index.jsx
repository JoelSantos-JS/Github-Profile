import { useContext, useEffect, useRef, useState } from 'react';
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

    const  inputRef = useRef(null)
    const ctx = useContext(context)

    const [searchValue, setSearchValue ] = useState('')


    useEffect(() => {
        if(inputRef) inputRef.current.focus()
    }, [])

    async function getUserData() {

        try {
            const response = await client.get(`/${searchValue}`)
            const repos = await client.get(`/${searchValue}/repos`)
            const followers = await client.get(`/${searchValue}/followers`)
            const following = await client.get(`/${searchValue}/following`)
            ctx.setUserData(response.data)
            ctx.setRepos(repos.data)
            ctx.setFollowers(followers.data)
            ctx.setFollowing(following.data)
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        
        setSearchValue(e.target.value)
    }

    function search()  {
        const query = inputRef.current.value
    }

    const HandleSearch =(e) => {
        
            if (e.keyCode === 13) {
                
            }
        
    }
    
    return (
    <HeaderSection>
        <span></span>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput type='search' value={searchValue}  onChange={ handleChange} onKeyUp={HandleSearch} ref={inputRef}/>
            
            <HeaderSearchButton onClick={getUserData}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
);

}

export default Header;