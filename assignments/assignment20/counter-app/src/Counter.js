import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counterSlice';

export default function Counter() {
    const counter = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className='d-flex align-items-center border p-4 rounded shadow-sm'>
       
        
        <button
          id='decrease'
          className='btn btn-danger ms-3'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <div className='count display-4 mx-3'>{counter}</div>
        <button
          id='increase'
          className='btn btn-primary me-3'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
