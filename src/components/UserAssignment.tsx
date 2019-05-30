import * as React from "react";
import Select, { components } from "react-select";
import { Tabs } from "./Tabs";
import { TabItem } from "./TabItem";
import { MenuListComponentProps } from "react-select/lib/components/Menu";
import { Avatar } from "./avatars";

export class UserAssignment extends React.Component<Props> {
  public render() {
    const { options } = this.props;
    return (
      <Select
        menuIsOpen
        isMulti
        options={options}
        components={{ MenuList: MenuList(this.props), Option }}
        onChange={this.props.onChange}
        theme={theme => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary25: "#E9F2EC",
            primary50: "#E9F2EC",
            primary: "#E9F2EC",
            WebkitTapHighlightColor: "#E9F2EC"
          }
        })}
        styles={selectStyles}
      />
    );
  }
}

export type Props = {
  options: any;
  tabs: Array<TabItemModel>;
  selectedTab?: string;
  onChange?(value: any, action: ActionMeta): void;
  onTabChange?(value: string): void;
};

const MenuList = (userAssignmentProps: Props) => (
  props: MenuListComponentProps<any>
) => {
  return (
    <components.MenuList {...props}>
      <Tabs>
        {userAssignmentProps.tabs.map((tab: TabItemModel, index: number) => {
          const isSelected =
            userAssignmentProps.selectedTab === tab.value
              ? true
              : tab.isDefault && !userAssignmentProps.selectedTab;

          return (
            <TabItem
              key={`${tab.value}-${index}`}
              value={tab.value}
              isSelected={isSelected}
              {...userAssignmentProps}
            >
              {tab.label}
            </TabItem>
          );
        })}
      </Tabs>
      {props.children}
    </components.MenuList>
  );
};

const Option: React.FC = (props: any) => {
  console.log(props);

  return (
    <components.Option {...props}>
      <Avatar displayName={props.label} /> {props.label}
    </components.Option>
  );
};

const selectStyles = {
  option: (provided: any, _state: any) => ({
    ...provided,
    color: "#414141",
    fontFamily: "Calibri",
    fontSize: "14px",
    lineHeight: "36px",
    textAlign: "left"
  })
};

export type TabItemModel = {
  value: string;
  label: string;
  isDefault?: boolean;

  onTabChange?(value: string): void;
};

export type ActionTypes =
  | "select-option"
  | "deselect-option"
  | "remove-value"
  | "pop-value"
  | "set-value"
  | "clear"
  | "create-option";

export interface ActionMeta {
  action: ActionTypes;
}
