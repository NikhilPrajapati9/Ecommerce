import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice';


export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <>
    </>
  )
}
