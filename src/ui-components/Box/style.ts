import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { IBox, IAbsBox } from './types';

const gapFunction = (args: IBox): SerializedStyles => {
    let styleSheet: SerializedStyles;

    switch (args.flexDirection) {
        case 'row': {
            styleSheet = css`
                && > * + * {
                    margin-right: ${args.gap}px;
                    margin-left: ${args.gap}px;
                }
            `;
            break;
        }
        default: {
            styleSheet = css`
                && > * + * {
                    margin-top: ${args.gap}px;
                    margin-bottom: ${args.gap}px;
                }
            `;
            break;
        }
    }

    return styleSheet;
}

const BoxBaseStyle = css`
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
`;

export const BoxStyleDefault = styled.div`
    ${BoxBaseStyle};
`;

export const BoxStyleFlex = styled.div<IBox>`
    ${BoxBaseStyle};

    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    ${props => props.gap && gapFunction(props)}
    ${props => props.width && `width: ${props.width}`};
    ${props => props.height && `height: ${props.height}`};
    ${props => props.minHeight && `min-height: ${props.minHeight}`};
    ${props => props.padding && `padding: ${props.padding}`};
    ${props => props.margin && `margin: ${props.margin}`};
    ${props => props.alignItems && `align-items: ${props.alignItems}`};
    ${props => props.justifyContent && `justify-content: ${props.justifyContent}`};
    ${props => props.borderBottom && `border-bottom: 1px solid #EFF2F6;`};
    ${props => props.borderLeft && `border-left: 1px solid #EFF2F6;`};
    ${props => props.borderTop && `border-top: 1px solid #EFF2F6;`};
    ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`};
`;

export const BoxAbsoluteStyle = styled.div<IAbsBox>`
    ${BoxBaseStyle};

    position: fixed;
    width: 100%;
    height: auto;
    background-color: #FFF;
    z-index: 9;
    left: 0;
    ${props => props.attachTo === 'bottom' ? `bottom: 0;` : `top: 0;`};
`;