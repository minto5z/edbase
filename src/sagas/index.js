import {call, put, takeEvery} from "redux-saga/effects";
import {failed, succeed,} from '../reducers/apiSlice';
import fetcher from '../lib/fetcher'
import {setToastAlert} from "../reducers/toastAlertSlice";
// import Cookies from "js-cookie";
import * as React from "react";

export default function* sagas() {
    yield takeEvery(({
                         payload: {
                             operationId = null
                         }
                     }) => {
        return typeof operationId === 'string' && operationId.length > 0;
    }, performApiAction);
}

function* performApiAction(action) {

    const {
        payload: {
            output = 'output',
            operationId = '',
            parameters = {}
        }
    } = action;

    try {

        let response = yield call(() => fetcher(operationId, parameters));

        if (response.message !== null && response.status !== undefined) {
            yield put(setToastAlert({
                type: response.status,
                message: response.message
            }));
        }

        if (response.error !== undefined && response.error == 'invalid_client') {
            yield put(setToastAlert({
                type: 'error',
                message: response.message
            }));
            // Cookies.remove('access_token');
            // Cookies.remove('auth_user_type');
            // Cookies.remove('auth_user');
        }

        if (response.error !== undefined && (response.error == 'invalid_grant' || response.error == 'invalid_request')) {
            yield put(setToastAlert({
                type: 'error',
                message: 'Invalid credentials.'
            }));
            // Cookies.remove('access_token');
            // Cookies.remove('auth_user_type');
            // Cookies.remove('auth_user');
        }

        if (response.code !== undefined && response.code == 401) {
            // Cookies.remove('access_token');
            // Cookies.remove('auth_user_type');
            // Cookies.remove('auth_user');
        }

        yield put(succeed({
            response,
            output
        }));

    } catch (error) {

        yield put(failed({
            error: error.response
                ? error.response.obj.error : {
                    message: 'Api call failed or check your internet connection'
                }
        }));

    }

}
