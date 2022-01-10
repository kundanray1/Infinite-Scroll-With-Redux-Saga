import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from '../Actions/actions';


function usersFetch() {
    const page=page+1
    console.log('hello')
    return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`).then(response => response.json());
}

function* workGetUsersFetch() {
    const users = yield call(usersFetch);

    yield put({ type: GET_USERS_SUCCESS, users })
}

function* saga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);

}
export default saga;