import React from 'react'
import { Container, Avatar, UserData, Icons, Profile, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>André Bitencourt</strong>
                    <span>#1234</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>

        </Container>
    )
};

export default UserInfo;