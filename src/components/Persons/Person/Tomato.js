import React from 'react';
import './Tomato.css';

const TCount = (props) => {
    return <p onClick={props.click}>number Counting  {props.number} tomatomato</p>
};

const TName = (props) => {
    return (
    <div>
        <p>nameTest: {props.testerName} </p>
        <input type="text" onChange={props.changed} value ={props.testerName}></input>
    </div>)
}

export {TCount,TName,}

// export const testerTomato;
