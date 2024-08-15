interface MessageProps {
    text: string;
    username: string;
}

function Message(props: MessageProps) {
    const { text, username } = props;

    return (
        <div>
            <h2>{text}</h2>
            <p>{username}</p>
        </div>
    )
}

export default Message
