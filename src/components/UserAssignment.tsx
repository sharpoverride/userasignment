import * as React from "react";
import Select, { components } from "react-select";
import { Tabs } from "./Tabs";
import { TabItem } from "./TabItem";
import { MenuListComponentProps } from "react-select/lib/components/Menu";

const selectStyles = {
  option: (provided: any, _state: any) => ({
    ...provided,
    color: "#414141",
    lineHeight: "36px",
    textAlign: "left"
  })
};

export class UserAssignment extends React.Component<Props> {
  public render() {
    const { options } = this.props;
    return (
      <Select
        isMulti
        options={options}
        components={{ MenuList: MenuList(this.props), Option }}
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
  onChange?(): void;
  onTabChange?(value: string): void;
};

export type TabItemModel = {
  value: string;
  label: string;
  isDefault?: boolean;

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
  return <components.Option {...props} />;
};
