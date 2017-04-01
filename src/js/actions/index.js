// action types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creators
export function incr(value) {
  return {
    type: INCREMENT,
    value
  }
}

export function decr(value) {
  return {
    type: DECREMENT,
    value
  }
}
