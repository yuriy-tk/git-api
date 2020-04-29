import { initState, userReducer } from '@git-api/core/src/lib/user.reducer';
import { t } from './actions';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initState);
  });

  it('should handle LOAD_USER_DATA_SUCCESS', () => {
    const mockUser = {
      name: 'test',
      id: 1
    };

    expect(
      userReducer(initState, {
        type: t.LOAD_USER_DATA_SUCCESS,
        data: mockUser
      })
    ).toEqual({
      users: {
        1: mockUser
      },
      currentUserId: 1,
      error: null
    });
  });
});
