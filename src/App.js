import { useState } from "react";
import "./App.css";
import ProfileIndex from "./components/Profiles";
import UserIndex from "./components/Users";
import CandidateIndex from "./components/Candidates";
import Posts from "./components/Posts";
import { flushSync } from "react-dom";
function App() {
  const [pageState, setPageState] = useState("");

  function renderPage(){
    switch(pageState){
      case 'Profiles':
        return <ProfileIndex />;
      case 'Users':
        return <UserIndex />;
      case 'Candidates':
        return <CandidateIndex/>;
      default:
        return null;
    }
  }

  // function handleButtonClick(page){
  //   setPageState(page);
  // }

  
  return (
    <div className="app">
      <div style={{ display: "grid" }}>
        <p style={{ justifySelf: "center" }}>Innomatics JNTU</p>
      </div>
      <button className={ pageState === "Profiles" ? "focused-button" : ""}
        onClick={() => {
          setPageState("Profiles");
        }}
      >
        Profiles
      </button>
      <button className={ pageState === "Users" ? "focused-button" : ""}
        onClick={() => {
          setPageState("Users");
        }}
      >
        Users
      </button>
      <button className={ pageState === "Candidates" ? "focused-button" : ""}
        onClick={() => {
          setPageState("Candidates");
        }}
      >Candidates</button>
      {renderPage()}

      {/* {pageState === "Profiles" ? (
        <ProfileIndex />
      ) : pageState === "Users" ? (
        <UserIndex />
      ) : (
        <CandidateIndex/>
      )} */}

      <Posts/>
    </div>
    
  );
}

export default App;
