import React from 'react';
import "./styles.css";

const InputField = () => {
    return (
        <form className='input'>
            <input className='input__box' type="input" placeholder='Write your task name' />
            <button className='input__submit' type="submit">Add</button>
        </form>
    )
}

export default InputField
