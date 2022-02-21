import React from 'react';
import { connect } from 'react-redux';

import Actions from '../../providers/actions';

import { Flex, AbsBox } from '../../ui-components/Box';
import { IconButton } from '../../ui-components/IconButton';
import { Text } from '../../ui-components/Text';

import { IconClearProps } from '../../assets/icons/content/clear.svg';

const HeaderComponent = ({ clear, addRoom }) => {
    const handleClick = () => {
        clear();
        addRoom();
    }

    return (
        <AbsBox attachTo="top">
            <Flex borderBottom flexDirection="row" alignItems='center' padding="8px">
                <IconButton variant='clean' icon={{ ...IconClearProps, fillAll: '#2A333D' }} onClick={handleClick} />
                <Text variant="h1" textAlign="center">Who is staying?</Text>
            </Flex>
        </AbsBox>
    );
}

export default connect(
    null,
    {
        clear: Actions.GuestPickerClear,
        addRoom: Actions.GuestPickerAddRoom,
    },
  )(HeaderComponent);