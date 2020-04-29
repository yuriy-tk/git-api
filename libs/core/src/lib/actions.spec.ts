import { actions, t } from '@git-api/core/src/lib/actions';

describe('actions', () => {
  it('should create an action to load user data', () => {
    const name = 'facebook';
    const expectedAction = {
      type: t.LOAD_USER_DATA,
      name
    };
    expect(actions.loadUserData(name)).toEqual(expectedAction);
  });
});
