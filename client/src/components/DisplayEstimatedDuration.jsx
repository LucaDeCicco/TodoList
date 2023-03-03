import React from "react";
import { Divider } from "@chakra-ui/react";
import "../style/DisplayEstimatedDuration.css";

export default function DisplayEstimatedDuration({ data }) {
    return (
        <div>
            <Divider className="setTimeDivider" />
            <p className="setTime">Estimated duration:</p>
            <p className="setTime">days: {data.days}/</p>
            <p className="setTime">hours: {data.hours}/</p>
            <p>min: {data.min}</p>
        </div>
    );
}
