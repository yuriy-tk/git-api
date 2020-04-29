import { t } from './actions';

const initState = {
  repos: null
};

export const reposReducer = (state = initState, action) => {
  switch (action.type) {
    case t.LOAD_USER_REPOSITORY_SUCCESS:
      return {
        ...state,
        repos: action.data
      };

    default:
      return state;
  }
};
