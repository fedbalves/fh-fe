import { css } from '@emotion/react';
import styled from '@emotion/styled';

const IconButtonBaseStyle = css`
    display: block;
    position: relative;
    border-radius: 6px;
    padding: 8px 8px 4px;
    width: min-content;
`;

export const IconButtonStyleDefault = styled.button`
    ${IconButtonBaseStyle};
    background-color: #F7FBFF;
    border: 1px solid #DAE9FA;
`;

export const IconButtonStyleClean = styled.button`
    ${IconButtonBaseStyle};
    background-color: unset;
    border: none;
`;