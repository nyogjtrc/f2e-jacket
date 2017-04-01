import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from '../actions'

const counterNumber = (value = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return value + action.value
    case DECREMENT:
      return value - action.value
    default:
      return value
  }
}

const counterReducer = combineReducers({
  counterNumber
})

export default counterReducer
