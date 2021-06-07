import React from "react";
import tw from "twin.macro";
// ts-type unsupport 'css'
// import tw, { css } from "twin.macro";
import { useStoreActions, useStoreState } from "../../reduxStore";
import SelectController from "../SelectController";

const Input = tw.input`border hover:border-black`;

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
// or twin.macro ts-type support for 'css'  https://github.com/ben-rogerson/twin.macro

const Display: React.FC = (): JSX.Element => {
  const className = useStoreState<string>((state) => state.controlles.className);

  return (
    <>
      <SelectController
        placeholder="display"
        values={DisplayValues}
        property={className}
        onMouseEnter={false}
      />

      <div className="playground pg-display" tw={className}>
        <article>
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </article>

        <article>
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </article>
      </div>
    </>
  );
};

export default Display;
