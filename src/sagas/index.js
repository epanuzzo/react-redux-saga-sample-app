import { all } from 'redux-saga/effects';
import mainRoot from './main';

export default function* rootSaga() {
  yield all([
    mainRoot(),
  ])
}
