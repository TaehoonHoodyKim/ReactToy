import React,{useState,useEffect}from 'react';

import styled from 'styled-components';
import MemoList from './MemoList.js';

const MemoContainer = styled.div`
    margin-top: 40px;
    text-align: center;
       
`;

const UserInput = styled.input`
    position: absolute;
    width: 80%;
    left: 10%;
    right: 10%;
    height: 33px;
    padding: 7px;  
    outline: none;
    border: 1px solid darkblue;
    border-radius: 11px;
    background: transparent;
    
    font-size: 22px;
    color: white;    
`;

const memo = () => {
    
    useEffect(()=>{
        localStorage.setItem("userMemo",JSON.stringify(userMemoState.userMemo))
    });

    const [userMemoState,setUserMemoState] = useState({
        userMemo:[ ]
    });

    const deleteUserHandler = (userIndex) =>{
        const newMemoGroup = userMemoState.userMemo;
        newMemoGroup.splice(userIndex,1);
        console.log(newMemoGroup);
        console.log('index : ' + userIndex);
        setUserMemoState({userMemo: newMemoGroup});        
      }    

    const userInputCollect = (event) =>{
        const newMemo = event.target.value;
        if(event.key === "Enter" && newMemo != ""){
            
            console.log("Enter Pressed");
            const newMemoGroup = [...userMemoState.userMemo,newMemo];
            if(newMemoGroup.length <= 8){
                setUserMemoState({userMemo: newMemoGroup}); 
            }else{
                alert("There is no Empty Space!");
            }
            event.target.value="";
        }        
        //console.log(userMemoState.userMemo);
    }

    return(
        <MemoContainer>
            <UserInput 
            placeholder="Write Your Memo" 
            onKeyPress={userInputCollect}></UserInput>
            <br></br>
            <MemoList 
                memoList={userMemoState.userMemo}
                deleteUserHandler={deleteUserHandler}>
            </MemoList>
        </MemoContainer>
    );
}

export default memo;