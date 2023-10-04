import "./App.css";
import FormComponent from "./components/Common/FormComponent";
// import ProfileReducer from "./components/Profiles/ProfileReducer";
import ProfileFormDump from "./components/dump/ProfileFormDump";
function App() {
  return (
    <div className="app">
      {/* <div style={{ display: "grid" }}>
        <p style={{ justifySelf: "center" }}>Innomatics JNTU</p>
      </div> */}
      {/* <ProfileReducer/> */}
      {/* <ProfileFormDump/>*/}
      <FormComponent />
    </div>
  );
}

export default App;
