import { t } from './actions';

export class User {}

export interface UserStateType {
  users: { [key: number]: User };
  currentUserId: number;
  error: any;
}

export const initState: UserStateType = {
  users: {},
  currentUserId: null,
  error: null
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case t.LOAD_USER_DATA_SUCCESS: {
      if (getUserById(state.users, action.data.id)) {
        return {
          ...state,
          currentUserId: action.data.id
        };
      } else {
        const users = Object.assign(state.users, {
          [action.data.id]: action.data
        });

        return {
          ...state,
          users,
          currentUserId: action.data.id
        };
      }
    }

    case t.SET_ERROR: {
      return {
        ...state,
        error: action.data
      };
    }

    default:
      return state;
  }
};

function getUserById(users: any, id: number): boolean {
  return users && users[id];
}
