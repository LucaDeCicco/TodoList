import React from "react";
import { CircularProgress } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const Loading = () => (
  <div>
    <ChakraProvider>
      <CircularProgress isIndeterminate color="green.300" />
    </ChakraProvider>
  </div>
);

export default Loading;
