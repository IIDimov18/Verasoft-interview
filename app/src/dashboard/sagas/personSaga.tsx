import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPerson } from "../types";
import {
    fetchPersonSuccess
} from "../actions";
import { dashboardTypes } from "../actionTypes";

const getPerson = () =>{
    let response = axios.get("https://evoteam-verasoft.github.io/data/summary.json")

    return response.then((response) => response.data)

}
function* fetchPersonSaga() {
    try {
        const response:IPerson = yield call(getPerson);
        yield put(
            fetchPersonSuccess({
                person: response
            })
        );
    } catch (e) {

    }
}

function* personSaga() {
    yield all([takeLatest(dashboardTypes.FETCH_PERSON_REQUEST, fetchPersonSaga)]);
}

export default personSaga;
