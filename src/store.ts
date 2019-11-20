import { combineReducers } from 'redux';
import uuid from 'uuid/v4';

const ADD_USER = 'ADD_USER';

type UsersAction = AddUserAction;

interface AddUserAction {
    type: typeof ADD_USER;
    user: User;
}

export const addUser = ({
    id = uuid(),
    userName = 'Anon'
} = {}): UsersAction => ({
    type: ADD_USER,
    user: { id, userName }
});

export interface User {
    id: string;
    userName: string;
}

type UsersState = ReadonlyArray<User>;

const initialUsersState: UsersState = [];

function users(state = initialUsersState, action: UsersAction): UsersState {
    console.log('action type', action.type);
    switch (action.type) {
        case ADD_USER:
            console.log('adding user');
            return [...state, action.user];
        default:
            return state;
    }
}

type PostsAction = AddPostAction;
const ADD_POST = 'ADD_POST';
interface AddPostAction {
    type: typeof ADD_POST;
    post: Post;
}
export const addPost = (post: Post): PostsAction => ({
    type: ADD_POST,
    post
});
export interface Post {
    id: string;
    userId: string;
}

type PostsState = ReadonlyArray<Post>;

const initialPostsState: PostsState = [];

function posts(state = initialPostsState, action: PostsAction): PostsState {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.post];
        default:
            return state;
    }
}

export const rootReducer = combineReducers({ users, posts });

export type AppState = ReturnType<typeof rootReducer>;
export type RootAction = UsersAction | PostsAction;
