import {combineReducers} from 'redux'
import {bookListReducer} from './books_list'


const rootReducer = combineReducers({
    books: bookListReducer,
})


export default rootReducer;