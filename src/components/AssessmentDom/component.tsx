import React from 'react';
import { connect } from 'react-redux';

import Actions from '../../providers/actions';

import { Flex } from '../../ui-components/Box';
import { Text } from '../../ui-components/Text';
import { Button } from '../../ui-components/Button';

import { AssessmentDomItem } from '../AssessmentDomItem';

const AssessmentDomComponent = ({ idx, roomID, removeRoom }) => {
    const label = `Room ${idx}`;

    return (
        <Flex borderBottom padding="8px 0">
            <Flex flexDirection="row" justifyContent="space-between">
                <Text variant="h1" fontSize="20px">{label}</Text>
                {idx > 1 && (
                    <Button
                        color="red"
                        onClick={() => removeRoom({ id: roomID })}
                        text="Remove room"
                    />
                )}
            </Flex>
            <AssessmentDomItem roomID={roomID} />
            <AssessmentDomItem type="children" roomID={roomID} />
        </Flex>
    );
}

export default connect(
    ({ GuestPicker }: any) => ({ GuestPicker }),
    {
        removeRoom: Actions.GuestPickerRemoveRoom,
    }
)(AssessmentDomComponent);