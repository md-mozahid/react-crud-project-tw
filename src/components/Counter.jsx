import React, { useReducer } from 'react'

const initialState = {
  count: 0
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case INCREMENT: {
      return {count: state.count + payload}
    }
    case DECREMENT: {
      return {count: state.count - payload}
    }
    case RESET: {
      return {count: 0}
    }
    default: {
      state
    }
  }
}

// const increment = (dispatch, num) => {
//   dispatch({ type: INCREMENT, payload: num })
// }

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //   const handleIncrement = () => {
  //     increment(dispatch, 5)
  //   }
  //   const handleDecrement = () => {
  //     dispatch({ type: DECREMENT, payload: 2 })
  //   }
  //   const handleReset = () => {
  //     dispatch({ type: RESET })
  //   }
  return (
    
    <div>
      <h1 className="fs-md">{state.count}</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: INCREMENT, payload: 4 })}>
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: DECREMENT, payload: 2 })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: RESET })}>
        Reset
      </button>
    </div>
  )
}

export default Counter
