import React, { Fragment, Dispatch } from 'react';

import { connect } from 'react-redux';
import { RootAction, addUser, AppState, User } from '../store';

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
    const [user, setUser] = React.useState({} as Partial<User>);
    return (
        <Fragment>
            <h1 data-testid="message">{message}</h1>
            <input
                type="text"
                onChange={e => setUser({ userName: e.target.value })}
                data-testid="new-userName-input"
            />
            <button
                data-testid="add-user-button"
                onClick={() => dispatch(addUser(user))}
            >
                Add User
            </button>
            <h1 data-testid="users">{JSON.stringify(users)}</h1>
            <h1 data-testid="posts">{JSON.stringify(posts)}</h1>
        </Fragment>
    );
};

const mapStateToProps = ({ users, posts }: AppState) => ({ users, posts });

export default connect(mapStateToProps)(App);
