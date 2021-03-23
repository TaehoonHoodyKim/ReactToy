import React from 'react';
import styled from 'styled-components';

const MemoRowContainer = styled.div`
    margin-top: 20px;
    font-size: 24px;
    border: 1px solid darkblue;
    border-radius: 11px;
    width: 80%;
    text-align: left + 1px;
    word-break: break-all;
`;

const MemoListRow = ({memo,index,deleteUserHandler}) =>{
    return <MemoRowContainer 
            onClick={()=>deleteUserHandler(index)}>{memo}</MemoRowContainer>
}

export default MemoListRow;