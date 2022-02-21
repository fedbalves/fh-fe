import React from 'react';
import { BoxStyleDefault, BoxStyleFlex, BoxAbsoluteStyle } from './style';
import { IBox, IAbsBox } from './types';

export const BoxComponent = (args: IBox) => {
    const { variant, ...props } = args;
    let Box: React.FC;

    switch (variant) {
        case 'flex': {
            Box = BoxStyleFlex;
            break;
        }
        default: {
            Box = BoxStyleDefault;
            break;
        }
    }

    return <Box {...props} />;
}

export const FlexComponent = (args: IBox) => (
    <BoxComponent {...args} variant='flex' />
);

export const AbsBoxComponent = (args: IAbsBox) => (
    <BoxAbsoluteStyle {...args} />
);