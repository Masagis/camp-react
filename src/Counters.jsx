import React, {useState, useEffect, useContext, useReducer, useMemo, useCallback } from 'react'

//CONTEXT
// const Theme = React.createContext('dark')


//REDUCER
// const initialState = { count: 0 };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }


// USEMEMO
// function ExpensiveCalculationComponent({ input }) {
//   const calculate = useMemo(() => {
//     let result = 0;
//     for (let i = 0; i < 1000000; i++) {
//       result += i;
//     }
//     return result;
//   }, [input]);

//   return <div>{calculate}</div>;
// }


function Counters(props) {
  const [count, setCount] = useState(0)
    // const themes = useContext(Theme)
    // const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   fetch('https://api.example.com/data')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch((err) => err)
  // }, []);



  // const inputEl = useRef(null);
  // const onButtonClick = () => {
  //   inputEl.current.focus();
  // };



  //CALLBACK
  // const [count, setCount] = useState(0);
  // const increment = useCallback(() => setCount(count + 1), [count]);
  

  return (
    <div>
      {/* useState */}
      <p>hai {props.name}, anda menekan tombol sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)} type='button'>Tambah</button>

      {/* useContext */}
      {/* <button className={themes} type='button'>themes</button> */}

      {/* useReducer */}
      {/* <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button> */}

      {/* useRef */}
      {/* <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button> */}

      {/* useCallback */}
      {/* <p>hai {props.name}, anda menekan tombol sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)} type='button'>Tambah</button> */}
    </div>
  )
}

export default Counters
