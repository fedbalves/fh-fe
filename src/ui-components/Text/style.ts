import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IText } from './types';

const TextBaseStyle = css`
    color: #2A333D;
`;

export const TextStyleDefault = styled.span<IText>`
    ${TextBaseStyle};

    ${props => props.color && `color: ${props.color};`}
`;

export const TextStyleP = styled.p`
    ${TextBaseStyle};
    font-size: 14px;
`;

export const TextStyleH1 = styled.h1<IText>`
    ${TextBaseStyle};
    font-size: 16px;
    flex-grow: 2;
    ${props => props.textAlign && `text-align: ${props.textAlign};`}
    ${props => props.fontSize && `font-size: ${props.fontSize};`}
`;