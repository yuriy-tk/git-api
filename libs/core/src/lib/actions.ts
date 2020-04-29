export const t = {
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  LOAD_USER_DATA_SUCCESS: 'LOAD_USER_DATA_SUCCESS',
  LOAD_USER_REPOSITORY: 'LOAD_USER_REPOSITORY',
  LOAD_USER_REPOSITORY_SUCCESS: 'LOAD_USER_REPOSITORY_SUCCESS',
  SET_ERROR: 'SET_ERROR'
};

export const actions = {
  loadUserData: name => ({
    type: t.LOAD_USER_DATA,
    name
  }),

  loadUserDataSuccess: data => ({
    type: t.LOAD_USER_DATA_SUCCESS,
    data
  }),

  loadUserRepository: data => ({
    type: t.LOAD_USER_REPOSITORY,
    data
  }),

  loadUserRepositorySuccess: data => ({
    type: t.LOAD_USER_REPOSITORY_SUCCESS,
    data
  }),

  setError: data => ({
    type: t.SET_ERROR,
    data
  })
};
