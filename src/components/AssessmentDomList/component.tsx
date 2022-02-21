import React from 'react';
import { connect } from 'react-redux';

import Actions from '../../providers/actions';

import { Flex, AbsBox } from '../../ui-components/Box';
import { Button } from '../../ui-components/Button';

import { AssessmentDom } from '../AssessmentDom';

import { GuestPickerTypes } from '../../providers/resources/GuestPicker';

import { IconSearchProps } from '../../assets/icons/action/search.svg';
import { IconAddProps } from '../../assets/icons/content/add.svg';

export const AssessmentDomListComponent = (params: any) => {
    const { GuestPicker, addRoom, submit } = params;
    const rooms = Object.values(GuestPicker.items);

    const totalRooms = rooms.length;
    const totalGuests = rooms.reduce((acc: number, cur: GuestPickerTypes.TRoom) => {
        return acc + cur.adults + cur.children.length;
    }, 0);

    if (rooms.length === 0) {
        addRoom();
        return;
    }

    return (
        <Flex>
            <Flex gap={16}>
                <Flex gap={8}>
                    {rooms.map(({ id }, idx: number) => (
                        <AssessmentDom
                            key={id}
                            idx={idx + 1}
                            roomID={id}
                        />
                    ))}
                </Flex>
                <Button
                    icon={IconAddProps}
                    variant="action"
                    onClick={addRoom}
                    text="Add Room"
                />
            </Flex>
            <AbsBox attachTo="bottom">
                <Flex borderTop flexDirection="row" alignItems='center' padding="16px">
                    <Button
                        icon={{ ...IconSearchProps, fillAll: '#FFF' }}
                        variant="CTA"
                        onClick={submit}
                        text={`Search ${totalRooms} room${totalRooms > 1 ? 's' : ''} \u2022 ${totalGuests} guest${totalGuests > 1 ? 's' : ''}`}
                    />
                </Flex>
            </AbsBox>
        </Flex>
    );
}

export default connect(
    ({ GuestPicker }: any) => ({ GuestPicker }),
    {
        addRoom: Actions.GuestPickerAddRoom,
        submit: Actions.GuestPickerSubmit,
    },
  )(AssessmentDomListComponent);