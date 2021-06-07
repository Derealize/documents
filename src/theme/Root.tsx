import React from "react";
import { StoreProvider } from "easy-peasy";
import store from "../reduxStore";

// Default implementation, that you can customize
// https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root
function Root({ children }) {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}

export default Root;
