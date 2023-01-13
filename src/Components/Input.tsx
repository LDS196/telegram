import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputType = {
    inputValue: string
    callback: (value: string) => void
    addNewMessage: () => void


}
const Input: React.FC<InputType> = ({inputValue, callback, addNewMessage,}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.value)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewMessage()
        }
    }

    return (
        <div>
            <input autoFocus={true} value={inputValue} onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler} />
        </div>
    );
}


export default Input;