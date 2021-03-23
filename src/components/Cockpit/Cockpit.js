import React from 'react';

import classes from './Cockpit.css';


const cockpit = (props) => {
    
    //let classes = ['red', 'bold'].join(' '); //이렇게 추가도 가능함
    const classes =[];
    if(tomatoState.tomatoGroup.length <= 2){
        classes.push('red'); /// classes = ['red']
        console.log(classes);
    }
    if(tomatoState.tomatoGroup.length <= 1){

        classes.push('bold'); // classes = ['red', 'bold'] 만약 length 가1이면 여기까지
        console.log(classes);
    }

    return ();
};

export default cockpit;