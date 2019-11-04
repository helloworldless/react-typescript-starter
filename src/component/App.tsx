import React, { Dispatch } from 'react';

import { connect } from 'react-redux';
import { RootAction, addUser, AppState } from './redux';

export interface OwnProps {
    message: string;
}

export type AppProps = OwnProps &
    ReturnType<typeof mapStateToProps> & { dispatch: Dispatch<RootAction> };

export const App: React.FC<AppProps> = ({
    message,
    users,
    posts,
    dispatch
}) => {
    console.log('rendering App');
    return (
        <>
            <h1 data-testid="message">{message}</h1>
            <button
                data-testid="add-user-button"
                onClick={() => dispatch(addUser({ id: '1', handle: 'sam91' }))}
            >
                Add User
            </button>
            <h1 data-testid="users">{JSON.stringify(users)}</h1>
            <h1 data-testid="posts">{JSON.stringify(posts)}</h1>
        </>
    );
};

const mapStateToProps = ({ users, posts }: AppState) => ({ users, posts });

export default connect(mapStateToProps)(App);
