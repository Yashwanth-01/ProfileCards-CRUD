import "./App.css";
import FormComponent from "./components/Common/FormComponent";
// import ProfileReducer from "./components/Profiles/ProfileReducer";
import ProfileFormDump from "./components/dump/ProfileFormDump";
import Users from "./components/Users/Users"

function App() {
  return (
    <div className="app">
      {/* <div style={{ display: "grid" }}>
        <p style={{ justifySelf: "center" }}>Innomatics JNTU</p>
      </div> */}
      {/* <ProfileReducer/> */}
      {/* <ProfileFormDump/>*/}
      <FormComponent />
      {/* <Users/> */}
    </div>
  );
}

export default App;
