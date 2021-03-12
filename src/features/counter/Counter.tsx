import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { RootState } from "../../reducers";
import { decrement, increment } from "../../actions/counterActions";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  });

  return (
    <div className="counter">
      <div className="item">
        <h3>COUNT: {count}</h3>
        <div className="btn">
          <button type="button" onClick={() => dispatch(increment())}>
            <BsPlus />
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            <BiMinus />
          </button>
        </div>
      </div>
    </div>
  );
}
