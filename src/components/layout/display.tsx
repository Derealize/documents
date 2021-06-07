import React from "react";
import { useStoreActions, useStoreState } from "../../reduxStore";
import SelectController from "../SelectController";
import "../../css/layout.scss";

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
    <>
      <SelectController
        placeholder="display"
        values={DisplayValues}
        property={className}
        onMouseEnter={false}
      />

      <div className={`playground pg-display ${className}`}>
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
