import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { increment } from "../../actions/counterActions";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  });

  return (
    <div>
      <h1>Willian david</h1>
      <h3>Count: {count}</h3>
      <button type="button" onClick={() => dispatch(increment())}>
        Click
      </button>
    </div>
  );
}
