import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const ClockDiv = styled.div`
    margin-top: 20px;
    font-size: 40px;
    text-align: center;
`;

const CurDate = styled.div`
    font-size: 30px;
`;

const CurDay = styled.div`
    font-style: Italic;
`;

const CurTime = styled.div`
    font-size: 55px;
    font-weight: 600;
`;

const CurAMPM = styled.div`
    font-size: 30px;
    font-weight:600;    
`;

const clock = () => {
    const [currDate, setCurrentDate] = useState({
        date: new Date()
    });


    useEffect(()=>{
        const oneMinuteCall = setInterval(()=> setCurrentDate({date: new Date()},1000));
    });



    return (
        <ClockDiv>
            <CurDate> 
                {currDate.date.getFullYear()} &nbsp;/ &nbsp;
                {currDate.date.getMonth()+1} &nbsp;/ &nbsp;
                {currDate.date.getDate()}
            </CurDate>
            <CurDay>
                {currDate.date.getDay() === 0
                 ? "Sunday"
                 : currDate.date.getDay() === 1
                 ? "Monday"
                 : currDate.date.getDay() === 2
                 ? "Tuesday"
                 : currDate.date.getDay() === 3
                 ? "Wednesday"
                 : currDate.date.getDay() === 4
                 ? "Thrusday"
                 : currDate.date.getDay() === 5
                 ? "Friday"
                 : "Saturday"}
            </CurDay>

            <CurTime>
                {currDate.date.getHours() < 10 
                    ? "0"+currDate.date.getHours() 
                    : currDate.date.getHours() >12
                    ? currDate.date.getHours()-12
                    : currDate.date.getHours()}
                &nbsp;:&nbsp;
                {currDate.date.getMinutes() < 10 ? "0"+currDate.date.getMinutes() : currDate.date.getMinutes()}
                &nbsp;:&nbsp;
                {currDate.date.getSeconds() < 10 ? "0"+currDate.date.getSeconds() : currDate.date.getSeconds()}
                <CurAMPM>
                 {currDate.date.getHours()<12 ? "AM" : "PM"}
                </CurAMPM>
            </CurTime>
            


        </ClockDiv>

    );
    

}

export default clock;