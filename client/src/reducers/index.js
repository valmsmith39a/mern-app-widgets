import widgetsReducer from './widgets'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  widgetsPage: widgetsReducer
})

export default rootReducer;