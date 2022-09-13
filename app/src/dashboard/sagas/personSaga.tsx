import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPerson } from "../types";
import {
    fetchPersonSuccess
} from "../actions";
import { dashboardTypes } from "../actionTypes";

const getPerson = () =>
    axios.get<IPerson[]>("https://evoteam-verasoft.github.io/data/summary.json");

function* fetchPersonSaga() {
    try {
        const response = yield call(getPerson);
        yield put(
            fetchPersonSuccess({
                person: response.data
            })
        );
    } catch (e) {

    }
}

function* personSaga() {
    yield all([takeLatest(dashboardTypes.FETCH_PERSON_REQUEST, fetchPersonSaga)]);
}

export default personSaga;
