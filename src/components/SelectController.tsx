/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import Select, {
  GroupTypeBase,
  OptionTypeBase,
  ValueContainerProps,
  ControlProps,
  OptionProps,
  InputProps,
  PlaceholderProps,
  IndicatorProps,
  IndicatorContainerProps,
  SingleValueProps,
  components,
} from "react-select";
import { CSSObject } from "@emotion/serialize";
import { useStoreActions, useStoreState } from "../reduxStore";
import styles from "./SelectController.module.scss";
import theme from "../theme";

export interface OptionType extends OptionTypeBase {
  label: string;
  value: string;
}

export type GroupType = GroupTypeBase<OptionType>;

const formatGroupLabel = (data: GroupTypeBase<OptionType>) => (
  <div className={styles.groupStyles}>
    <span>{data.label}</span>
    <span className={styles.groupBadgeStyles}>{data.options.length}</span>
  </div>
);

type Props = {
  placeholder: string;
  values: ReadonlyArray<string | OptionType | GroupType>;
  property: string | undefined;
  ignorePrefix?: boolean;
  isDisabled?: boolean;
  onMouseEnter?: boolean;
  cleanPropertys?: Array<string>;
};

const SelectController: React.FC<Props> = ({
  placeholder,
  values,
  property,
  ignorePrefix,
  isDisabled,
  onMouseEnter,
}: Props): JSX.Element => {
  // const className = useStoreState((state) => state.controlles.className);
  const setClassName = useStoreActions((actions) => actions.controlles.setClassName);

  const options = useMemo(() => {
    if (typeof values[0] === "string") {
      return (values as ReadonlyArray<string>).map((v) => {
        let label = v;
        if (ignorePrefix) {
          label = v.startsWith("-")
            ? `-${v.split("-").splice(2).join("-")}`
            : v.split("-").splice(1).join("-");
        }
        return {
          value: v,
          label,
        };
      });
    }
    return values as ReadonlyArray<OptionType | GroupType>;
  }, [ignorePrefix, values]);

  const MouseEnterOption = (props: OptionProps<OptionType, boolean, GroupType>) => {
    const {
      data: { label, value },
    } = props;

    return (
      <div onMouseEnter={() => setClassName(value)}>
        <components.Option {...props} />
      </div>
    );
  };

  return (
    <Select
      components={{
        Option: onMouseEnter ? MouseEnterOption : components.Option,
      }}
      placeholder={placeholder}
      isClearable
      // menuIsOpen
      isDisabled={isDisabled}
      options={options}
      value={property ? { value: property, label: property } : null}
      formatGroupLabel={formatGroupLabel}
      onChange={(ovalue, { action }) => {
        if (action === "clear" && property) {
          setClassName("");
        } else if (action === "select-option") {
          const value = (ovalue as OptionType).value;
          setClassName(value);
          location.hash = "#" + value;
        }
      }}
      className={styles.select}
      styles={{
        // https://react-select.com/styles#provided-styles-and-state
        dropdownIndicator: (
          provided: CSSObject,
          state: IndicatorProps<OptionType, boolean, GroupType>
        ) => ({
          display: "none",
        }),
        indicatorSeparator: (
          provided: CSSObject,
          state: IndicatorProps<OptionType, boolean, GroupType>
        ) => ({
          display: "none",
        }),
        indicatorsContainer: (
          provided: CSSObject,
          state: IndicatorContainerProps<OptionType, boolean, GroupType>
        ) => ({
          ...provided,
          width: 30,
          height: 30,
          justifyContent: "center",
        }),
        control: (provided: CSSObject, state: ControlProps<OptionType, boolean, GroupType>) => {
          // state.isFocused
          return {
            ...provided,
            boxShadow: "none",
            borderRadius: 0,
            border: "none",
            // borderBottom: `1px solid ${property ? theme.colors.teal['400'] : theme.colors.gray['200']}`,
            borderBottom: `1px solid ${
              state.isFocused && property ? theme.colors.teal["500"] : "transparent"
            }`,
            cursor: "pointer",
            minHeight: undefined,
            "&:hover": {
              borderBottom: `1px solid ${
                property ? theme.colors.teal["500"] : theme.colors.gray["300"]
              }`,
            },
          };
        },
        singleValue: (provided: CSSObject, props: SingleValueProps<OptionType, GroupType>) => ({
          ...provided,
          margin: 0,
          color: property ? theme.colors.teal["500"] : theme.colors.gray["400"],
        }),
        valueContainer: (
          provided: CSSObject,
          state: ValueContainerProps<OptionType, boolean, GroupType>
        ) => ({
          ...provided,
          padding: "2px 4px",
        }),
        placeholder: (
          provided: CSSObject,
          state: PlaceholderProps<OptionType, boolean, GroupType>
        ) => ({
          ...provided,
          margin: 0,
        }),
        input: (provided: CSSObject, state: InputProps) => ({
          ...provided,
          margin: 0,
        }),
        option: (provided: CSSObject, props: OptionProps<OptionType, boolean, GroupType>) => ({
          ...provided,
          padding: "4px 8px",
        }),
      }}
    />
  );
};

SelectController.defaultProps = {
  ignorePrefix: true,
  isDisabled: false,
  onMouseEnter: true,
};

export default SelectController;
