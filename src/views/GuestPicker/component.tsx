import React from 'react';

import { Flex } from '../../ui-components/Box';
import { Header } from '../../components/Header';
import { AssessmentDomList } from '../../components/AssessmentDomList';

export const GuestPickerView = () => (
    <>
        <Header />
        <Flex padding="60px 16px 80px" >
            <AssessmentDomList />
        </Flex>
    </>
);