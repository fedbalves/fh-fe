import React from 'react';
import { connect } from 'react-redux';

import Actions from '../../providers/actions';

import { Flex } from '../../ui-components/Box';
import { Text } from '../../ui-components/Text';
import { IconButton } from '../../ui-components/IconButton';
import { Dropdown } from '../../ui-components/Dropdown';

import { IconAddProps } from '../../assets/icons/content/add.svg';
import { IconRemoveProps } from '../../assets/icons/content/remove.svg';
import { IconClearProps } from '../../assets/icons/content/clear.svg';

import { IAssessmentDom } from './types';

const AssessmentDomItemComponent = (args: IAssessmentDom & any) => {
    const { type = 'adult', roomID, addOccupant, removeOccupant, GuestPicker, setOccupantAge } = args;
    const label = type === 'children' ? 'Children' : 'Adults';

    const dropdownOptions = ['Age', ...Array(8).fill(null).map((_, idx) => idx + 1)];

    const ChildrenItem = () => {
        return (
            <Flex borderLeft margin="8px 8px 8px 16px" padding="0 0 0 8px" gap={8}>
                {GuestPicker.items[roomID].children.map(({ id, age }, idx: number) => (
                    <Flex key={id} flexDirection="row" alignItems="flex-end">
                        <Text variant="h1" text={`Child ${idx + 1} age`} />
                        <Dropdown
                            selected={age}
                            options={dropdownOptions}
                            onSelect={(value) => setOccupantAge({ id: roomID, oid: id, value })}
                        />
                        <IconButton
                            variant="clean"
                            icon={{ ...IconClearProps, fillAll: 'red' }}
                            onClick={() => removeOccupant({ id: roomID, oid: id, type })}
                        /> 
                    </Flex>
                ))}
            </Flex>
        );
    };

    const itemCounter = () => {
        const room = GuestPicker.items[roomID];
        return type === 'children' ?
            room.children.length :
            room.adults;
    }

    return (
        <Flex gap={8}>
            <Flex flexDirection="row" justifyContent="space-between" padding="8px 0">
                <Text variant="h1">{label}</Text>
                <Flex flexDirection="row" justifyContent="space-evenly">
                    <IconButton
                        icon={IconRemoveProps}
                        onClick={() => removeOccupant({ id: roomID, type })} />
                    <Flex width="60px" justifyContent="center">
                        <Text
                            variant="h1"
                            textAlign="center"
                            text={String(itemCounter())}
                        />
                    </Flex>
                    <IconButton
                        icon={IconAddProps}
                        onClick={() => addOccupant({ id: roomID, type })} />
                </Flex>
            </Flex>
            {args.type === 'children' && GuestPicker.items[roomID].children.length > 0 && (
                <ChildrenItem />
            )}
        </Flex>
    );
}

export default connect(
    ({ GuestPicker }: any) => ({ GuestPicker }), 
    {
        addOccupant: Actions.GuestPickerAddOccupant,
        removeOccupant: Actions.GuestPickerRemoveOccupant,
        setOccupantAge: Actions.GuestPickerSetOccupantAge,
    }
)(AssessmentDomItemComponent);