import * as React from "react";
import { NavItem, NavLine } from "./styled";
import { PropsWithChildren } from "react";

export type TabItemProps = {
  isSelected?: boolean;
  value: string;
  onTabChange?(value: string): void;
};
export const TabItem: React.FC<Readonly<PropsWithChildren<TabItemProps>>> = (
  props: Readonly<PropsWithChildren<TabItemProps>>
) => {
  return (
    <NavItem
      onClick={() => {
        if (props.onTabChange) {
          props.onTabChange(props.value);
        }
      }}
    >
      {props.children}
      {props.isSelected ? <NavLine /> : null}
    </NavItem>
  );
};
