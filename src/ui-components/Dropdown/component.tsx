import React, { useState } from 'react';

import {
    DropdownHeaderStyle,
    DropdownListStyle,
    DropdownListItemStyle,
    DropdownListContainerStyle,
} from './style';

import { IDropdown } from './types';

import { Flex } from '../Box';
import { Text } from '../Text';
import { Svg } from '../Svg';

import { IconRemoveProps } from '../../assets/icons/content/remove.svg';
import { IconExpandProps } from '../../assets/icons/navigation/expand.svg';

export const DropdownComponent = ({ options, onSelect, selected }: IDropdown) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected as string);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        onSelect(value);
        setIsOpen(false);
    };

    const dropdownIconProps = isOpen ? IconRemoveProps : IconExpandProps;

    return (
        <Flex alignItems="center">
            <DropdownHeaderStyle onClick={toggleDropdown}>
                <Text text={selectedOption || 'Age'} />
                <Svg {...dropdownIconProps} />
            </DropdownHeaderStyle>
            {isOpen && (
                <DropdownListContainerStyle>
                    <DropdownListStyle>
                        {options.map((option, idx) => (
                            <DropdownListItemStyle onClick={onOptionClicked(option)} key={idx}>
                                {option}
                            </DropdownListItemStyle>
                        ))}
                    </DropdownListStyle>
                </DropdownListContainerStyle>
            )}
        </Flex>
    );
}