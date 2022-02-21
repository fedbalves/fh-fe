import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ButtonBaseStyle = css`
    display: block;
    position: relative;
    border-radius: 6px;
    padding: 12px;
    border: none;
    width: inherit;
    height: auto;

    span {
        font-weight: bold;
    }
`;

export const ButtonStyleDefault = styled.button`
    ${ButtonBaseStyle};
    background-color: unset;
`;

export const ButtonStyleAuxiliary = styled.button`
    ${ButtonBaseStyle};

    background-color: #F7FBFF;
    border: 1px solid #DAE9FA;
    
    span {
        color: #0071F3;
    }
`;

export const ButtonStyleCTA = styled.button`
    ${ButtonBaseStyle};

    background-color: #0071F3;
    width: 100%;

    span {
        color: #FFF;
    }
`;