import { useEffect, useState } from "react";
import News from "../News";
import { useScreen } from "../../state/ScreenContext";
import { useSelector } from "react-redux";

// ()=>{}
const Feeds = (props) => {

  const { latitude, longitude } = useSelector((state) => state.location);

  // following useEffect will execute only 1 time - because [] empty dependecy array
  // on initial render of a component
  // useEffect(()=>{
  //   console.log('ppp',)
  // },[])
  useEffect(()=>{
    console.log('ppp',props)
  },[props])

  // const [counter, setCounter] = useState(0);
  // const incrementcounter = () => {
  //   setCounter(counter+1)
  // }
  // const decrementCounter = () => {
  //   setCounter(counter-1)
  // }

  return (
    <>
      <p>Feeds</p>
      <p>location:</p>
            <ul>
                <li>{latitude}</li>
                <li>{longitude}</li>
            </ul>

      {/* <p>Counter: {counter}</p>
      <button onClick={incrementcounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button> */}
      <News/>
    </>
  );
};

// const TodoListComp = () => {
//   return(
//     <>
//     <p>TodoList component</p>
//     </>
//   )
// }

export default Feeds;
