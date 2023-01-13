import React from 'react';

type ButtonType = {
    title: string
    callback: () => void
}
const Button: React.FC<ButtonType> = ({title, callback}) => {
    // const onClickHandler = () => {
    //     callback()
    // }
    return (
        <div>
            <button className={ ''} onMouseDown={callback}>{title}</button>
        </div>
    );
};

export default Button;