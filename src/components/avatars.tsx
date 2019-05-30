import * as React from "react";

import { trim } from "lodash";
import styled from "styled-components";

export function Avatar(props: { displayName: string }) {
  const initials = getUserAvatarLetters(props.displayName),
    avatarColor = getUserAvatarColor(initials);
  return (
    <UserAvatarSmall style={{ backgroundColor: avatarColor }}>
      {initials}
    </UserAvatarSmall>
  );
}

const UserAvatar = styled.div`
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  margin: -3px 5px 0 -3px;
  vertical-align: middle;
  background: #e1e7eb 50% 50%;
  background-size: cover;
`;
const UserAvatarSmall = styled(UserAvatar)`
  width: 28px;
  height: 28px;
  line-height: 28px;
  font-size: 11px;
`;

export function getAvatar(displayName: string, qtip: string, cls: string) {
  cls = cls || "user-avatar-sm";
  var initials = getUserAvatarLetters(displayName),
    avatarColor = getUserAvatarColor(initials),
    dataQTip = qtip ? 'data-qtip="' + qtip + '"' : "";

  return (
    '<div class="user-avatar ' +
    cls +
    '" style="background-color: ' +
    avatarColor +
    '" ' +
    dataQTip +
    ">" +
    initials +
    "</div>"
  );
}

function getUserAvatarLetters(displayName: string): string {
  if (displayName) {
    // eslint-disable-next-line
    var names = trim(displayName.replace(/[\(\-_\"\)]/gi, " ")).split(/\s+/),
      char1 = names[0] ? names[0][0].toUpperCase() : "",
      char2 = names[1] ? names[1][0].toUpperCase() : "";
    return char1 ? char1 + char2 : "-";
  } else {
    return "LC";
  }
}

function getUserAvatarColor(initials: string) {
  var charIndex =
      initials[0].charCodeAt(0) +
      (typeof initials[1] !== "undefined" ? initials[1].charCodeAt(0) : 0) -
      65,
    colourIndex = charIndex % avatarColours.length;
  return avatarColours[colourIndex];
}
const avatarColours = [
  "#1abc9c",
  "#6E8B3D",
  "#25bd59",
  "#4876FF",
  "#3498db",
  "#8968CD",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#104E8B",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d"
];
