import React from "react";
import { StoreProvider } from "easy-peasy";
import { ChakraProvider } from "@chakra-ui/react";
import store from "../reduxStore";
import theme from "../chakra.theme";

// Default implementation, that you can customize
// https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root
function Root({ children }) {
  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </StoreProvider>
  );
}

export default Root;
