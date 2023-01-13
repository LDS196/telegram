import React, { useState} from 'react';
import Input from "./Input";
import Button from "./Button";
import s from './Messenger.module.css'
import {MessagesType} from "../App";
import user1Link from './Assets/user1.png'

type Messenger = {
    messages: MessagesType
    addMessage: (value: string, avatar: string) => void
    setMessages: (messages: MessagesType) => void
    avatar: string
}
export const Messenger: React.FC<Messenger> = ({avatar, setMessages, addMessage, messages}) => {

    const errorText = 'Incorrect value'
    let [inputValue, setInputValue] = useState<string>('')
    let [error, setError] = useState<string>('')

    const onChangeInputValue = (inputValue: string) => {
        setInputValue(inputValue)
        setError('')
    }
    const addNewMessage = () => {
        if (inputValue.trim()) {
            addMessage(inputValue, avatar)
            setInputValue('')
        } else {
            setError(errorText)
        }
    }

    const removeLastMessageHandler = () => {
        setMessages([...messages].slice(0, messages.length - 1))
    }
    const removeAllMessagesHandler = () => {
        setMessages([])
    }

    console.log(avatar)
    console.log(user1Link)
    // const finalClassForMessage = `${s.message} ${avatar === user1Link? s.user1 : s.user2}`
    let messagesForRender = messages.map((el) => <li
        className={el.avatar === user1Link
        ?s.user2 + ' ' + s.message
        :s.user1 + ' ' + s.message}
        key={el.id}><img className={s.ava} src={el.avatar} alt="Ava"/>{el.message}

    </li>)
    return (
        <div className={s.messenger}>
            <div><img className={s.logo} src={avatar} alt="Ava"/></div>
            <p>Only 10 messages</p>
            <div className={s.menu}>
                <Input inputValue={inputValue} callback={onChangeInputValue} addNewMessage={addNewMessage}/>
                <Button title={'Send'} callback={addNewMessage}/>
                <Button title={'Clear'} callback={removeAllMessagesHandler}/>
            </div>
            <div>{error ? error : ''}</div>

            <div className={s.messages}>
                {messages.length
                    ? messagesForRender
                    : <p>No messages</p>}
            </div>
            <div><Button title={'Delete last message'} callback={removeLastMessageHandler}/></div>
        </div>
    );
};


