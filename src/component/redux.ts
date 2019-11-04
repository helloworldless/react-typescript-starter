import { combineReducers } from 'redux'

type UsersAction = AddUserAction
const ADD_USER = 'ADD_USER'
interface AddUserAction {
    type: typeof ADD_USER
    user: User
}
export const addUser = (user: User): UsersAction => ({
    type: ADD_USER,
    user,
})

export interface User {
    id: string
    handle: string
}

function users(state: ReadonlyArray<User> = [], action: UsersAction) {
    console.log('action type', action.type);
    switch(action.type) {
        case ADD_USER:
            console.log('adding user')
            return [...state, action.user];
        default:
            return state;
    }
}

type PostsAction = AddPostAction
const ADD_POST = 'ADD_POST'
interface AddPostAction {
    type: typeof ADD_POST
    post: Post
}
export const addPost = (post: Post): PostsAction => ({
    type: ADD_POST,
    post,
})
export interface Post {
    id: string
    userId: string
}

function posts(state: ReadonlyArray<Post> = [], action: PostsAction) {
    switch(action.type) {
        case ADD_POST:
            return [...state, action.post];
        default:
            return state;
    }
}

export const rootReducer = combineReducers({ users, posts })

export type AppState = ReturnType<typeof rootReducer>;
export type RootAction = UsersAction | PostsAction;