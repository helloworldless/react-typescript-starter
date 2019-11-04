import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import AsyncFetchComponent from './AsyncFetchComponent';

import mockAxios from 'axios';

jest.mock('axios');

// @ts-ignore
mockAxios.get.mockImplementation(() =>
    Promise.resolve({
        data: { uuid: '2e3a1441-b97a-45d9-892d-782f64e03c06' }
    })
);

it('fetchiest data and displays it', async () => {
    const { getByTestId } = render(<AsyncFetchComponent />);

    const greetingTextNode = await waitForElement(() =>
        getByTestId('fetch-data')
    );

    expect(greetingTextNode).toHaveTextContent('uuid');
});
