import React, {useRef, useEffect} from 'react'
import { Container, InputWrapper, Input, InputIcon, Messages } from './styles'
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if(div){
            div.scrollTop = div.scrollHeight;
        }
    });

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => {
                    return <ChannelMessage author="André Bitencourt" date="20/06/2020" content="Este é um texto de testes"/>
                })}

                <ChannelMessage
                    author="Bot Teste" date="20/06/2020"
                    content={
                        <>
                            <Mention>André Bitencourt</Mention>, Mensagem de testes para menção
                        </>
                    }
                    isBot
                    hasMention
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;