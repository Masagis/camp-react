import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { types } from './redux/actions/index'

function CounterApp() {
  const number = useSelector((state) => state.number)
  const dispatch = useDispatch()

  return (
    <div className="container text-center">
      <h1>Counter Home</h1>
      <h2>{number}</h2>
        <button
          className="btn btn-warning"
          type="button"
          onClick={() => dispatch({ type: types.MINUS })}
        >
          MINUS
        </button>
        <button
          className="btn btn-danger mx-2"
          type="button"
          onClick={() => dispatch({ type: types.RESET })}
        >
          RESET
        </button>
        <button
          className="btn btn-primary btn-block"
          type="button"
          onClick={() => dispatch({ type: types.PLUS })}
        >
          PLUS
        </button>
    </div>
  )
}

export default CounterApp
