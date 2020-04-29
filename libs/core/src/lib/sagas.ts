import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { actions, t } from './actions';
import { NotificationManager } from 'react-notifications';

const baseUrl = 'https://api.github.com/users';

function* loadUserData(action) {
  try {
    const response = yield axios.get(`${baseUrl}/${action.name}`);
    yield put(actions.loadUserDataSuccess(response.data));
    yield loadUserRepos(response.data);
  } catch (error) {
    NotificationManager.error(error.message, error.name, 5000);
    yield put(actions.setError(error));
  }
}

function* loadUserRepos(action) {
  try {
    const response = yield axios.get(`${action.repos_url}`);
    yield put(actions.loadUserRepositorySuccess(response.data));
  } catch (error) {
    NotificationManager.error(error.message, error.name, 5000);
    yield put(actions.setError(error));
  }
}

export function* watchSaga() {
  yield takeLatest(t.LOAD_USER_DATA, loadUserData);
  yield takeLatest(t.LOAD_USER_REPOSITORY, loadUserRepos);
}
