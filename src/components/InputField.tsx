import React from 'react';
import "./styles.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
    return (
        <form className='input'>
            <input className='input__box' type="input" placeholder='Write your task name' value={todo} onChange={ } />
            <button className='input__submit' type="submit">Add</button>
        </form>
    )
}

export default InputField
