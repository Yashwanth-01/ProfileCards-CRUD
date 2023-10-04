import { useReducer, useState } from "react";
import { initialState, profileReducer } from "../../state/profileReducer";
import SearchComponent from "./SearchComponent";
import ListComponent from "./ListComponent";
import "../CSS/Profiles.css"
function FormComponent() {
  const [profileName, setProfileName] = useState(""); // holds value of Profile Name
  const [profNameDirty, setProfNameDirty] = useState(false);
  const [designation, setDesignation] = useState(""); // holds value of Designation
  const [designationDirty, setDesignationDirty] = useState(false);
  const [profileImage, setProfileImage] = useState(""); // holds value of profile Image
  const [profImageDirty, setProfImageDirty] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [profileDataState, dispatchProfileDataState] = useReducer(
    profileReducer,
    initialState
  );
  const handleChangeProfileName = (e) => {
    setProfNameDirty(true);
    setProfileName(e.target.value); // setting the Profile Name state
  };
  const handleChangeDesignation = (e) => {
    setDesignationDirty(true);
    setDesignation(e.target.value); // setting the Profile Name state
  };
  const handleChangeProfileImage = (e) => {
    setProfImageDirty(true);
    setProfileImage(e.target.value); // setting the Profile Name state
  };
  const onSubmit = () => {
    // create and update
    setProfNameDirty(true);
    setDesignationDirty(true);
    setProfImageDirty(true);
    if (profileName.length && profileImage.length && designation.length) {
      dispatchProfileDataState({
        type: editIndex !== -1 ? "update" : "create",
        // profileName, profileImage, designation
        newProfileDtls: {
          profileName,
          profileImage,
          designation,
        }, // task 1
        editIndex: editIndex,
      });
      setProfileName("");
      setDesignation("");
      setProfileImage("");
      setEditIndex(-1);
      setProfNameDirty(false);
      setDesignationDirty(false);
      setProfImageDirty(false);
    } 
    // else {
    //   alert("please complete the form");
    // }
  };
  const editProfile = (pIndex) => {
    setProfileName(profileDataState[pIndex].profileName);
    setDesignation(profileDataState[pIndex].designation);
    setProfileImage(profileDataState[pIndex].profileImage);
    setEditIndex(pIndex);
  };
  return (
    <>
      <div className="rootDivContainer">
        <h2>{editIndex !== -1 ? "Edit Profile" : "Add Profile"}</h2>
        <div className="formMaintainer">
          <div className="formContainer">
            <div>
              <label>Profile Name*</label>
              <div style={{ display: "grid" }}>
                <input
                  name="ProfileName"
                  value={profileName}
                  onChange={(e) => {
                    handleChangeProfileName(e);
                  }}
                />
                {
                  // ! not / negation
                  // cond rendering -> tertiary operator / &&
                  !profileName.length && profNameDirty && (
                    <span>Profile Name is Required</span>
                  )
                }
              </div>
            </div>
            <div>
              <label>Designation*</label>
              <div style={{ display: "grid" }}>
                <input
                  name="Designation"
                  value={designation}
                  onChange={(e) => {
                    handleChangeDesignation(e);
                  }}
                />
                {!designation.length && designationDirty ? (
                  <span>Designation is Required</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div>
              <label>Profile Image*</label>
              <div style={{ display: "grid" }}>
                <input
                  name="ProfileImage"
                  value={profileImage}
                  onChange={(e) => {
                    handleChangeProfileImage(e);
                  }}
                />
                {!profileImage.length && profImageDirty && (
                  <span>Profile Image is Required</span>
                )}
              </div>
            </div>
          </div>
          <button
            style={{ justifySelf: "end" }}
            // onClick={onSubmit}
            onClick={() => {
              onSubmit();
            }}
          >
            {editIndex !== -1 ? "EDIT" : "Submit"}
          </button>
        </div>
        <SearchComponent dispatchProfileDataState={dispatchProfileDataState} />
        <ListComponent
          editProfile={editProfile}
          dispatchProfileDataState={dispatchProfileDataState}
          profileDataState={profileDataState}
        />
      </div>
    </>
  );
}
export default FormComponent;
