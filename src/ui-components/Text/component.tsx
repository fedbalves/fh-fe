import React from 'react';
import { IText } from './types';
import { TextStyleDefault, TextStyleH1, TextStyleP } from './style';

export const TextComponent = (args: IText) => {
    const { text, variant, children, ...props } = args;
    let Text: React.FC;

    switch (variant) {
        case 'p': {
            Text = TextStyleP;
            break;
        }
        case 'h1': {
            Text = TextStyleH1;
            break;
        }
        default: {
            Text = TextStyleDefault;
            break;
        }
    }

    return <Text {...props}>{text || children}</Text>;
}