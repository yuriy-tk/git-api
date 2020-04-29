import { selectActiveUser } from '@git-api/core/src/lib/selectors';

describe('Active user', () => {
  const activeUser = {
    name: 'test'
  };

  describe('#selectActiveUser', () => {
    it('only returns active clients', () => {
      const mockedState = {
        users: {
          currentUserId: 1,
          users: {
            1: {
              name: 'test'
            }
          }
        }
      };

      const activeUserSelector = selectActiveUser(mockedState);

      expect(activeUserSelector).toEqual(activeUser);
    });
  });
});
