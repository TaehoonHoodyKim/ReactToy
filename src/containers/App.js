//App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import Persons from '../components/Persons/Persons.js'
import {TCount,TName} from '../components/Persons/Person/Tomato.js'

import ClockContainer from '../components/Clocks/ClockContainer.js'

import bonobono from './bono.jpg'


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;
  margin: 16px auto; 
  &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: white;
  };
`;

const StyledDiv = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bonobono});
  background-size: cover; 

`;

const app = props => {

  useEffect(()=>{
    document.title = `${tomatoNumberState.number}번째 손님`;
  });

  //useState() for Name
  const [tomatoState, setTomatoState]= useState({
    tomatoGroup: [
      {id: 'ksh', name: '권성호', age:27},
      {id: 'nhj', name: '노현종', age:29},
      {id: 'kth', name: '김태훈', age:30}
    ]
  });

  //useState() for Number
  const [tomatoNumberState,setTomatoNumberState] =useState({
    number: 0
  });
  //useState() for changeNAme
  const [tomatoChangeNameState, setTomatoChangeNameState] = useState({
    tester: "..."
  });
  //useState() for view handling
  const [tomatoViewState, setTomatoViewState] = useState({
    viewCheck: false
  });
  

  //new function   

  const swtichNumHandler = () => {
    setTomatoNumberState({number: tomatoNumberState.number +1 })

  }

  //Trying To change it with button works.
  const changeNameHandler = (newTester) => {
    // if(tomatoNumberState.number %2 === 0){
    //   setTomatoChangeNameState({tester: "Porche"})
    // }else{
    //   setTomatoChangeNameState({tester: "Hyundai"})
    // }  
    setTomatoChangeNameState({tester: newTester})
    console.log('now the name is : ' + tomatoChangeNameState.tester)
    console.log('now the name is : ' + newTester)
  }

  //using onChange name
  //The purpose of this function is when user write something, then 
  //element of the list is changed by this event
  //almost do the similar way with deleteUserHandler function's copying object
  const nameChangedHandler = (event,tomatoId) => {
    //find the idnex number from the list 
    const tomatoIndex = tomatoState.tomatoGroup.findIndex(changingTomato => {
      return changingTomato.id === tomatoId;
    });
   
    //copy the element
    const newTomato = {
      ...tomatoState.tomatoGroup[tomatoIndex]
    };
   
    newTomato.name = event.target.value; // 

    //copy the original list's elements with spread
    const newTomatoGroup = [...tomatoState.tomatoGroup]; 
    // overwrite new element
    newTomatoGroup[tomatoIndex] = newTomato; 
    setTomatoState({tomatoGroup: newTomatoGroup});  

  }

  //user name change

  
  const visualHandler = () => {
    console.log('intial' + tomatoViewState.viewCheck);
    const checkShow = tomatoViewState.viewCheck;

    setTomatoViewState({viewCheck: !checkShow}) 
  }
  //when click the user box, then delete that user from the list
  const deleteUserHandler = (userIndex) =>{
    const newTomatoGroup = tomatoState.tomatoGroup;
    newTomatoGroup.splice(userIndex,1);
    setTomatoState({tomatoGroup: newTomatoGroup});
  }


  //Stylingf


  return (
    
    <div className="App">
    <StyledDiv>
        <h1>TOMATOMATOMATO</h1>
        <button className="btn" onClick={swtichNumHandler}>Butttttton</button>
        <StyledButton alt={tomatoViewState.viewCheck} onClick={visualHandler}> hide Contents</StyledButton>
        {/* <button style={mystyle} onClick={visualHandler}>View Change</button> */}
        {
          tomatoViewState.viewCheck === true ?
          <div>
          
          <Persons 
            persons={tomatoState.tomatoGroup}
            clicked={deleteUserHandler}
            changed={nameChangedHandler}
            ></Persons>
          {/* <p className={classes.join(' ')}>추천인은 노현종</p>
            */}
            <TCount 
              number ={tomatoNumberState.number}
              click={swtichNumHandler}></TCount>
            <TName 
              testerName = {tomatoChangeNameState.tester}
              changed={nameChangedHandler}></TName>
          </div> : null
        }     
        <ClockContainer></ClockContainer>
      </StyledDiv> 
    </div>
  
  );  
}

export default app;