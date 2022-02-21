// import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DropdownHeaderStyle = styled("div")`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 6px;
  padding: 6px 8px;
  border: 1px solid #BED2E9;
  justify-content: space-around;
  align-items: center;
  width: 96px;

  span {
      font-weight: bold;
  }
`;

export const DropdownListContainerStyle = styled("div")`
  position: absolute;
  z-index: 1;
`;

export const DropdownListStyle = styled("ul")`
  padding: 0;
  margin: 0;
  position: absolute;
  width: 93px;
  left: -46px;
  top: 38px;
  padding-left: 1em;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  background-color: #FFF;

  &:first-of-type {
    padding-top: 0.8em;
  }
`;

export const DropdownListItemStyle = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;