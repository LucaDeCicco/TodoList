import React from "react";
import { CircularProgress } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Loading() {
    return (
        <ChakraProvider>
            <CircularProgress isIndeterminate color="green.300" />
        </ChakraProvider>
    );
}
