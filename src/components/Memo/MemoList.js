import React from 'react';
import styled from 'styled-components';

import MemoListRow from './MemoRow.js'

const MemoListContainer = styled.div`
    top: 60px;
    height:33px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MemoList= ({memoList,deleteUserHandler}) => {
    return (
    <MemoListContainer>
    {
        memoList.map((memo,index)=> (
            <MemoListRow 
                memo ={memo} 
                key={index} 
                index = {index}
                deleteUserHandler={deleteUserHandler}></MemoListRow>
        ))
    }
    </MemoListContainer>
    
    );
}

export default MemoList;