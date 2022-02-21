import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Actions from '../../providers/actions';
import { GuestPickerTypes } from '../../providers/resources/GuestPicker';
import { appProps } from '../App/props';

import { Flex, AbsBox } from '../../ui-components/Box';
import { Button } from '../../ui-components/Button';

import { AssessmentDom } from '../AssessmentDom';

import { IconSearchProps } from '../../assets/icons/action/search.svg';
import { IconAddProps } from '../../assets/icons/content/add.svg';

export const AssessmentDomListComponent = (params: any) => {
    const { GuestPicker, addRoom, submit, recover } = params;
    const rooms = Object.values(GuestPicker.items);

    const totalRooms = rooms.length;
    const totalGuests = rooms.reduce((acc: number, cur: GuestPickerTypes.TRoom) => {
        return acc + cur.adults + cur.children.length;
    }, 0);

    useEffect(() => {
        const search = window.location.search;
        const name = new URLSearchParams(search).get('recover');

        if (search !== '' && name !== 'null') {
            recover(name);
            return;
        }

        if (rooms.length === 0) {
            addRoom();
            return;
        }
    }, []);

    const handleSubmit = () => {
        const { items } = GuestPicker;
        const payload = Object.values(items).reduce((acc: string, cur: GuestPickerTypes.TRoom) => {
            const adultLen = cur.adults;
            const childrenLen = cur.children.length;

            let childrenStr = '';
            if (childrenLen > 0) {
                childrenStr = cur.children
                    .filter((child) => child.age !== undefined)    
                    .map((child) => child.age)
                    .join(',');
            }

            const roomSeparator = acc === '' ? '' : '|';
            const childrenSeparator = childrenLen === 0 ? '' : ':';

            return acc + roomSeparator + adultLen + childrenSeparator + childrenStr;
        }, '');

        alert(payload);
        submit(payload);
    }

    const checkRooms = (): boolean => {
        const roomsLen = Object.values(GuestPicker.items).length;
        return roomsLen >= appProps.limits.rooms.max;
    }

    return (
        <>
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
                    disabled={checkRooms() ? 'disabled' : undefined}
                />
            </Flex>
            <AbsBox attachTo="bottom">
                <Flex borderTop flexDirection="row" alignItems='center' padding="16px">
                    <Button
                        icon={{ ...IconSearchProps, fillAll: '#FFF' }}
                        variant="CTA"
                        onClick={handleSubmit}
                        text={`Search ${totalRooms} room${totalRooms > 1 ? 's' : ''} \u2022 ${totalGuests} guest${totalGuests > 1 ? 's' : ''}`}
                    />
                </Flex>
            </AbsBox>
        </>
    );
}

export default connect(
    ({ GuestPicker }: any) => ({ GuestPicker }),
    {
        addRoom: Actions.GuestPickerAddRoom,
        submit: Actions.GuestPickerSubmit,
        recover: Actions.GuestPickerRecover,
    },
  )(AssessmentDomListComponent);