import React from 'react';
import './Person.css';
import styled from 'styled-components';


const StyledDiv = styled.div`  
    
    width: 400px;
    margin: 16px 0px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 5px;
    text-align: center;
    background-color: skyblue;

    @media (min-width: 300px) {
        width: 450px;
    }
`;

const person = (props) => {
    return (
        //<div className="Person" style ={mediaStyle} >
        <StyledDiv>
            <p onClick = {props.click}>I am {props.name} and number {props.age} tomatomato</p>
            <p>{props.children}</p>
            <input  type="text" onChange={props.changed} ></input>        
        </StyledDiv>
    )
};

export default person;
