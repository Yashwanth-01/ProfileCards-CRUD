import { useState } from "react";
import "./App.css";
import ProfileIndex from "./components/Profiles";
import UserIndex from "./components/Users";
import CandidateIndex from "./components/Candidates";
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
  return (
    <div className="app">
      <div style={{ display: "grid" }}>
        <p style={{ justifySelf: "center" }}>Innomatics JNTU</p>
      </div>
      <button
        onClick={() => {
          setPageState("Profiles");
        }}
      >
        Profiles
      </button>
      <button
        onClick={() => {
          setPageState("Users");
        }}
      >
        Users
      </button>
      <button
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
    </div>
  );
}

export default App;
