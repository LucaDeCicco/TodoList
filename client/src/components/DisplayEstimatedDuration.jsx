import React from 'react';
import { Divider } from '@chakra-ui/react'

const DisplayEstimatedDuration = (props) => {

    const {data} = props;

    return (
        <div>
            <Divider style={{marginBottom:"0.5em", marginTop:"0.5em"}}/>
            <p style={{float:"left"}}>Estimated duration : &nbsp;&nbsp;&nbsp;</p>
            <p style={{float:"left"}}>days:{data.days}/</p>
            <p style={{float:"left"}}>hours:{data.hours}/</p>
            <p>min:{data.min}</p>
        </div>
    )
};

export default DisplayEstimatedDuration;