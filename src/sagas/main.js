import { all, takeEvery, put, call } from 'redux-saga/effects';
import { MEMES_GET, MEMES_LIST, MEMES_ERROR } from 'CONSTANTS'
import { memeAPI } from 'SERVICES/APICalls'

function* getMemesLocal() {
    try {
        const memes = yield call(memeAPI);
        yield put({ type: MEMES_LIST, payload: memes.data });
    } catch (e) {
        yield put({ type: MEMES_ERROR, payload: { error: e } });
    }
}

export function* getMemes() {
    yield takeEvery(MEMES_GET, getMemesLocal);
}

export default function* mainRoot() {
  yield all([
    getMemes(),
  ])
}
