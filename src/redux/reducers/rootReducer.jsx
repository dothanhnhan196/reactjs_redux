import { combineReducers } from 'redux'
import { GioHangReducer } from './gioHangReducer.jsx'
import { BurgerReducer } from './burgerReducer.jsx'


// store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    GioHangReducer,
    BurgerReducer
})