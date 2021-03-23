import React,{useState} from 'react';
import styled from 'styled-components';
import Clock from './Clock.js'

import Memo from '../Memo/Memo.js'

const ClockContainer = () => {
    return (
    <Container>
        <Clock></Clock>
        <Memo></Memo>
    </Container>);
};

const Container = styled.div`
    position: absolute;
    right: 1px;
    top: 33px;
    width: 350px;
    height: calc(80%);
    bottom: 50px;
    color: white;
    overflow-y: auto;

    

`;


export default ClockContainer;