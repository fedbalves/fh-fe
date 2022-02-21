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
import { appProps } from '../App/props';

const AssessmentDomItemComponent = (args: IAssessmentDom & any) => {
    const { type = 'adult', roomID, addOccupant, removeOccupant, GuestPicker, setOccupantAge } = args;
    const label = type === 'children' ? 'Children' : 'Adults';

    const dropdownOptions = ['Age', ...Array(17).fill(null).map((_, idx) => String(idx))];

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

    const checkOccupantLimits = ({ action, type, ID }: { action: 'add' | 'sub', type: IAssessmentDom['type'], ID: string }): boolean => {
        const room = GuestPicker.items[ID];
        const { occupancy, children, adults } = appProps.limits;
        const totalAdults = room.adults;
        const totalChildren = room.children.length;

        switch (true) {
            case totalAdults === adults.max && type === 'adult' && action === 'add':
            case totalChildren === children.max && type === 'children' && action === 'add':
            case totalAdults === adults.min && type === 'adult' && action === 'sub':
            case totalChildren === children.min && type === 'children' && action === 'sub':
            case (totalAdults + totalChildren) === occupancy.max && action === 'add':
                return true;
            default:
                return false;
        }
    }

    return (
        <Flex gap={8}>
            <Flex flexDirection="row" justifyContent="space-between" padding="8px 0">
                <Text variant="h1">{label}</Text>
                <Flex flexDirection="row" justifyContent="space-evenly">
                    <IconButton
                        icon={IconRemoveProps}
                        disabled={checkOccupantLimits({ action: 'sub', type, ID: roomID }) ? 'disabled' : undefined}
                        onClick={() => removeOccupant({ id: roomID, type })} />
                    <Flex width="60px" justifyContent="center">
                        <Text
                            variant="h1"
                            textAlign="center"
                            text={String(itemCounter())}
                        />
                    </Flex>
                    <IconButton  
                        disabled={checkOccupantLimits({ action: 'add', type, ID: roomID }) ? 'disabled' : undefined}
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