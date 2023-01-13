import React, {useEffect, useState} from 'react';
import './App.css';
import {Messenger} from "./Components/Messenger";

import avaUser1Link from './Components/Assets/user1.png'
import avaUser2Link from './Components/Assets/user2.png'
import {v1} from "uuid";

export type MessageType = {
    id: string
    message: string
    avatar:string
}
export type MessagesType = MessageType[];

function App() {
    const maxNumberMessage = 10
    let [messages, setMessages] = useState<MessagesType>([])
    let [messages2, setMessages2] = useState<MessagesType>([])
    let [firstRendering, setFirstRendering] = useState<boolean>(true)

    useEffect(() => {
        if (!firstRendering) {
            localStorage.setItem('messages', JSON.stringify(messages))
            localStorage.setItem('messages2', JSON.stringify(messages2))
        }
        setFirstRendering(false)
    }, [messages, messages2])

    useEffect(() => {
        const messages = localStorage.getItem('messages');
        if (messages) {
            setMessages(JSON.parse(messages))
        };
        const messages2 = localStorage.getItem('messages2');
        if (messages2) {
            setMessages2(JSON.parse(messages2))
        }
    }, []);

    const addMessage = (value:string, avatar:string) => {
        if(messages.length < maxNumberMessage) {
                const newMessage = {id: v1(), message: value.trim(), avatar}
                setMessages([...messages,newMessage ])
                setMessages2([...messages2, newMessage ])
        } else return
    };

    return (
        <div className="App">

            <Messenger addMessage={addMessage}
                       setMessages={setMessages}
                       messages={messages}
                       avatar={avaUser1Link}/>
            <Messenger addMessage={addMessage}
                       setMessages={setMessages2}
                       messages={messages2}
                       avatar={avaUser2Link}/>
        </div>
    );
}

export default App;
