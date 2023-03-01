import React from 'react';
import MyNumberInput from "./MyNumberInput";
import '../style/EstimationDuration.css';

const EstimationDuration = () => {
    return (
        <div className={"parentOfNumberInputs"}>
            <MyNumberInput className={"daysEstimation"}/>
            <MyNumberInput className={"hoursEstimation"}/>
            <MyNumberInput className={"minEstimation"}/>
        </div>
    )
};

export default EstimationDuration;