import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { App as UnconnectedApp, AppProps } from './App';
import { RootAction, rootReducer } from './redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Unclear why this is needed here but not in AsyncFetchComponent.test.tsx
// https://github.com/testing-library/jest-dom/issues/123
import '@testing-library/jest-dom/extend-expect';

const aloha = 'Aloha!';
const props: AppProps = {
    message: aloha,
    users: [],
    posts: [],
    dispatch: (action: RootAction) => {}
};

it('renders without crashing', () => {
    render(<UnconnectedApp {...props} />);
});

it('displays the provided message', () => {
    const { getByTestId } = render(<UnconnectedApp {...props} />);
    const messageElement = getByTestId('message');
    expect(messageElement.innerHTML).toBe(aloha);
});

it('adds a user and displays it', async () => {
    const store = createStore(rootReducer);

    const { getByTestId } = render(
        <Provider store={store}>
            <App message="test with redux" />
        </Provider>
    );
    const button = getByTestId('add-user-button');
    fireEvent.click(button);

    expect(getByTestId('users')).toHaveTextContent('sam91');
});
