import { connect } from 'react-redux'
import { incr, decr } from '../actions'
// import counterReducer from '../reducers'
import CounterView from '../components/CounterView'

const mapStateToProps = state => ({
  value: state.counterNumber
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(incr(1))
  },
  onDecrement: () => {
    dispatch(decr(1))
  }
})

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterView)

export default Counter
