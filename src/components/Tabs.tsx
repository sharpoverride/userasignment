import * as React from "react";
import { NavWrapper, Nav } from "./styled";

export class Tabs extends React.Component {
  public render() {
    return (
      <NavWrapper>
        <Nav>{this.props.children}</Nav>
      </NavWrapper>
    );
  }
}
