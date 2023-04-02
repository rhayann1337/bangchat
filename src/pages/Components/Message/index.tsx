import React from "react"
import { Container, TextAuthor, TextMessage } from "./style"

type MessageProps = {
    author: string
    message: string
}

export const Message: React.FC<MessageProps> = ({message, author}) => {
    return (
        <Container>
            <TextAuthor>
                {author}
            </TextAuthor>
            <TextMessage>
                {message}
            </TextMessage>
        </Container>
    )
}

export default Message