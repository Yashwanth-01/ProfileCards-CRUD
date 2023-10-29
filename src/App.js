import "./App.css";
import {Routes, Route, Router} from 'react-router-dom';
import Home from "./Home";
import { ROUTER } from "./Router";
function App() {
  return (
    <div className="app">
    
      {/* Defining Routes */}
      <Routes>
        {
          ROUTER.map((route, index) => {
            return(
              <Route key={index} path={route.path} element={<route.element/>}/>
            )
          })
        }
      </Routes>
    </div>
  );
}


export default App;
