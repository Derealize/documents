import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "../../reduxStore";
import SelectController from "../SelectController";
import "./display.css";

export const DisplayValues = [
  "block",
  "inline-block",
  "inline",
  "flex",
  "inline-flex",
  "table",
  // 'inline-table',
  // 'table-caption',
  // 'table-cell',
  // 'table-column',
  // 'table-column-group',
  // 'table-footer-group',
  // 'table-header-group',
  // 'table-row-group',
  // 'table-row',
  "flow-root",
  "grid",
  "inline-grid",
  "contents",
  "list-item",
  "hidden",
];

// wait CSS-in-JS: https://docusaurus.io/docs/styling-layout#css-in-js

const Display: React.FC = (): JSX.Element => {
  const className = useStoreState<string>((state) => state.controlles.className);

  return (
    <Flex>
      <Flex flex="0 0 200px" alignItems="center">
        <SelectController
          placeholder="select-display"
          values={DisplayValues}
          property={className}
          ignorePrefix={false}
          onMouseEnter={false}
        />
      </Flex>
      <Box flex="1 1 auto">
        <div className="playground">
          <article className={"m-5 p-3 " + className}>
            <span>{"m-5 p-3 " + className}</span>
            <span className="bg-black p-3">{"p-3"}</span>
            <span className="bg-black p-3">{"p-3"}</span>
            <span className="bg-black p-3">{"p-3"}</span>
          </article>

          <article className={"m-5 p-3 " + className}>
            <span>{"m-5 p-3 " + className}</span>
            <span className="bg-black p-3">{"p-3"}</span>
            <span className="bg-black p-3">{"p-3"}</span>
            <span className="bg-black p-3">{"p-3"}</span>
          </article>
        </div>
      </Box>
    </Flex>
  );
};

export default Display;
