import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest';
import { Header } from '../components/Header';
import store from '../providers/store';

expect.addSnapshotSerializer(createSerializer());

describe('Header', () => {
    it('Should render fixed on top of the screen', async () => {
        render(<Provider store={store}><Header /></Provider>);

        const element = renderer.create(<Provider store={store}><Header /></Provider>).toJSON();
        const headerClass = element.props.className;
        const HeaderStyle = Array.from(document.getElementsByClassName(headerClass));
        const style = window.getComputedStyle(HeaderStyle[0]);

        expect(style.position).toBe('fixed');
        expect(style.top).toBe('0px');
    })
});