import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest';
import { Header } from '../components/Header';

expect.addSnapshotSerializer(createSerializer());

describe('Header', () => {
    it('Should render fixed on top of the screen', async () => {
        render(<Header />);

        const element = renderer.create(<Header />).toJSON();
        const headerClass = element.props.className;
        const HeaderStyle = Array.from(document.getElementsByClassName(headerClass));
        const style = window.getComputedStyle(HeaderStyle[0]);

        expect(style.position).toBe('fixed');
        expect(style.top).toBe('0px');
    })
});