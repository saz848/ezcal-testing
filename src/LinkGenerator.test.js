import React from 'react';
import ReactDOM from 'react-dom';
import LinkGenerator from './LinkGenerator'
import {render, fireEvent} from '@testing-library/react'

it('successful render', () => {
    const div = document.createElement('div');
    const {getByTestId} = render(<LinkGenerator link="dummy.com" />);
    const elem = getByTestId('link-holder');
    expect(elem.innerHTML).toBe('dummy.com');
    ReactDOM.unmountComponentAtNode(div);
})

it('link clickable', () => {
    const div = document.createElement('div');
    const {getByTestId} = render(<LinkGenerator link="dummy.com" />);
    fireEvent.click(getByTestId('copy-button'));
    const elem = getByTestId('copy-button');
    expect(elem.innerHTML).toBe("Copied!");
})