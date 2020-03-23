import {combineReducers} from 'redux';
import detailReducers from './detail'
import bookReducers from './book';
import userReducers from './users';
// import profile from './books';

const reducers = combineReducers({
    book: bookReducers,
    detail: detailReducers,
    users: userReducers
})

export default reducers