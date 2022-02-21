import React from 'react';
import { IconButtonStyleDefault, IconButtonStyleClean } from './style';
import { IIconButton } from './types';

import { Svg } from '../Svg';

export const IconButtonComponent = (args: IIconButton) => {
    const { icon, variant, ...props } = args;
    let IconButton: React.FC;

    switch (variant) {
        case 'clean': {
            IconButton = IconButtonStyleClean;
            break;
        }
        default: {
            IconButton = IconButtonStyleDefault;
            break;
        }
    }

    return (
        <IconButton {...props}>
            <Svg {...icon} />
        </IconButton>
    );
}