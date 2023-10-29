import { decrement, increment } from "../../store/counterSlice";
import Stories from "../Stories";
import {useSelector, useDispatch} from 'react-redux'

const News = (props) => {
  const counter = useSelector((state) => state.counter); //State subscription
  const dispatch = useDispatch();

  const { latitude, longitude } = useSelector((state) => state.location);
  return (
    <>
      <p>News</p>
      
      <p>location:</p>
      <ul>
          <li>{latitude}</li>
          <li>{longitude}</li>
      </ul>
      <Stories/>

      <h2>Counter:{counter}</h2>
      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Decrement</button>

    </>
  );
};

export default News;
