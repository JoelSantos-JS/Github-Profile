import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import  UserDetails  from '../components/userDetails';
import UserNumbers from '../components/userNumbers';
import  UserPicture  from '../components/userPicture';
import { context } from '../context';

export default function Home() {

    const ctx = useContext(context)
    return (
        <Container>
            <Header />
            <UserContainer>

                {ctx.userData?.name ?
                <React.Fragment>
                <UserPicture  url={ctx.userData?.avatar_url}/>
                <UserDetails name= {ctx.userData?.name} login= {ctx.userData.login} bio={ctx.userData?.bio} />
                <UserNumbers/>
                </React.Fragment>
             : undefined}
            </UserContainer>
        </Container>
    );
}