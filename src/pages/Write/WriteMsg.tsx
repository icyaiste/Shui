import { collection, getFirestore, addDoc } from 'firebase/firestore';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const db = getFirestore();

interface WriteMsgProps {
    text: string;
    username: string;
}

const WriteMsg: React.FC<WriteMsgProps> = ({ text: initialText, username: initialUsername }) => {
    const [text, setText] = useState(initialText);
    const [username, setUsername] = useState(initialUsername);

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log("form submitted");
        console.log("Text: ", text);
        console.log("Username: ", username);
        try {
            await addDoc(collection(db, "Messages"), { text, username });
            alert("Message posted!");
        } catch (error) {
            console.error("Error posting message: ", error);
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <img alt="logotyp" />
                <article>
                    <label htmlFor="messageInput">Message:</label>
                    <input
                        id="messageInput"
                        title="Enter your message"
                        placeholder="Enter your message"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                </article>
                <input
                    id="usernameInput"
                    title="Username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button type="submit">Publicera</button>
            </form>
            <button onClick={goHome} type="button">Show Flow</button>
        </section>
    );
}

export default WriteMsg
