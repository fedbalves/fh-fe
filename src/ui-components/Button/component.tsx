import React from 'react';
import { ButtonStyleDefault, ButtonStyleAuxiliary, ButtonStyleCTA } from './style';
import { IButton } from './types';

import { Flex } from '../Box';
import { Text } from '../Text';
import { Svg } from '../Svg';

export const ButtonComponent = (args: IButton) => {
    const { text, variant, children, color, icon, ...props } = args;
    let Button: React.FC;

    switch (variant) {
        case 'CTA': {
            Button = ButtonStyleCTA;
            break;
        }
        case 'action': {
            Button = ButtonStyleAuxiliary;
            break;
        }
        default: {
            Button = ButtonStyleDefault;
            break;
        }
    }

    return (
        <Button {...props}>
            <Flex gap={4} alignItems="center" justifyContent="center" width="100%" flexDirection="row">
                {icon && <Svg {...icon} />}
                <Text color={color}>{text || children}</Text>
            </Flex>
        </Button>
    );
}