import styled from "styled-components";

const gridSize = 5;
// TabPane
export const NavWrapper = styled.div`
  position: relative;
`;

export const Nav = styled.div`
  display: flex;
  font-weight: 500;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: baseline;
`;

const labelColor = "#000";
const hoverLabelColor = "#000";
const activeLabelColor = "#000";
const focusLabelColor = "#000";
const borderRadius = 0;

export const NavItem = styled.div`
  flex: 1;
  color: ${labelColor};
  cursor: pointer;
  line-height: 1.8;
  margin: 0;
  padding: ${gridSize / 2}px ${gridSize}px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${hoverLabelColor};
  }
  &:active,
  &:active::before {
    color: ${activeLabelColor};
  }

  &:focus {
    border-radius: ${borderRadius}px;
    box-shadow: 0 0 0 2px ${focusLabelColor} inset;
    outline: none;
  }
`;
const underlineColor = "#25BD59";
const underlineHeight = "3px";

export const NavLine = styled.span`
  background-color: ${underlineColor};
  border-radius: ${underlineHeight};
  bottom: 0;
  content: "";
  height: ${underlineHeight};
  left: ${gridSize}px;
  margin: 0;
  position: absolute;
  right: ${gridSize}px;
  width: inherit;
`;
