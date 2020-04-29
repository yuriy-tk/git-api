import { UserStateType } from '@git-api/core/src/lib/user.reducer';
import { createSelector } from '@reduxjs/toolkit';

export const getUserState = (state): UserStateType => state.users;
export const getUserReposState = state => state.repos;

export const selectActiveUser = createSelector(
  getUserState,
  state => state.users[state.currentUserId]
);

export const selectActiveUserRepos = createSelector(
  getUserReposState,
  state => state.repos
);
