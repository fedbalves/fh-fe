import React from 'react';

import { Flex, AbsBox } from '../../ui-components/Box';
import { IconButton } from '../../ui-components/IconButton';
import { Text } from '../../ui-components/Text';

import { IconClearProps } from '../../assets/icons/content/clear.svg';

export const HeaderComponent = () => (
    <AbsBox attachTo="top">
        <Flex borderBottom flexDirection="row" alignItems='center' padding="8px">
            <IconButton variant='clean' icon={IconClearProps} />
            <Text variant="h1" textAlign="center">Who is staying?</Text>
        </Flex>
    </AbsBox>
);