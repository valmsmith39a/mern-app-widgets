import {
  ADD_WIDGET,
  FETCH_WIDGETS
} from '../actions/widgets'
const initialState = {
  widgets: ['widget 1', 'widget 2', 'widget 3']
};

function widgetsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WIDGETS: 
      return {
        widgets: action.payload
      }
    case ADD_WIDGET:
      return {
        widgets: [...state.widgets, ...action.payload]
      }
    default: 
      return state
  }
};

export default widgetsReducer
