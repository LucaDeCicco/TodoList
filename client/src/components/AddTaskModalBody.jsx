import React from "react";
import MySelect from "./MySelect";
import MyInput from "./MyInput";
import MyDatePicker from "./MyDatePicker";
import EstimationDuration from "./EstimationDuration";
import { ModalBody } from "@chakra-ui/react";

export default function ComponentName({ data }) {
    return (
        <ModalBody>
            <b>Choose your task type</b>
            <MySelect data={data} />
            <MyInput data="Name" />
            <b>When is the deadline</b>
            <MyDatePicker />
            <EstimationDuration />
        </ModalBody>
    );
}
