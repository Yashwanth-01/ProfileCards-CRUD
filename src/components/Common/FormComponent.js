import { useReducer, useState } from "react";
import { crudReducer } from "../../state/crudReducer";
import SearchComponent from "./SearchComponent";
import ListComponent from "./ListComponent";
import "../CSS/crud.css";
function FormComponent(props) {
  const { mainHeader, initialState } = props;
  const [name, setName] = useState(""); // holds value of Profile Name
  const [nameDirty, setNameDirty] = useState(false);
  const [designation, setDesignation] = useState(""); // holds value of Designation
  const [designationDirty, setDesignationDirty] = useState(false);
  const [image, setImage] = useState(""); // holds value of profile Image
  const [imageDirty, setImageDirty] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [dataState, dispatchDataState] = useReducer(crudReducer, initialState);
  const handleChangeName = (e) => {
    setNameDirty(true);
    setName(e.target.value); // setting the Profile Name state
  };
  const handleChangeDesignation = (e) => {
    setDesignationDirty(true);
    setDesignation(e.target.value); // setting the Profile Name state
  };
  const handleChangeImage = (e) => {
    setImageDirty(true);
    setImage(e.target.value); // setting the Profile Name state
  };
  const onSubmit = () => {
    // create and update
    setNameDirty(true);
    setDesignationDirty(true);
    setImageDirty(true);
    if (name.length && image.length && designation.length) {
      dispatchDataState({
        type: editIndex !== -1 ? "update" : "create",
        // name, image, designation
        newDtls: {
          name,
          image,
          designation,
        }, // task 1
        editIndex: editIndex,
        initialState: initialState,
      });
      setName("");
      setDesignation("");
      setImage("");
      setEditIndex(-1);
      setNameDirty(false);
      setDesignationDirty(false);
      setImageDirty(false);
    } else {
      alert("please complete the form");
    }
  };
  const edit = (pIndex) => {
    setName(dataState[pIndex].name);
    setDesignation(dataState[pIndex].designation);
    setImage(dataState[pIndex].image);
    setEditIndex(pIndex);
  };
  return (
    <>
      <div className="rootDivContainer">
        <h2>Add {mainHeader}</h2>
        <div className="formMaintainer">
          <div className="formContainer">
            <div>
              <label>{mainHeader} Name*</label>
              <div style={{ display: "grid" }}>
                <input
                  name={mainHeader + "Name"}
                  value={name}
                  onChange={(e) => {
                    handleChangeName(e);
                  }}
                />
                {
                  // ! not / negation
                  // cond rendering -> tertiary operator / &&
                  !name.length && nameDirty && (
                    <span>{mainHeader} Name is Required</span>
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
              <label>{mainHeader} Image*</label>
              <div style={{ display: "grid" }}>
                <input
                  name={mainHeader + "Image"}
                  value={image}
                  onChange={(e) => {
                    handleChangeImage(e);
                  }}
                />
                {!image.length && imageDirty && (
                  <span>{mainHeader} Image is Required</span>
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
        <SearchComponent
          initialState={initialState}
          mainHeader={mainHeader}
          dispatchDataState={dispatchDataState}
        />
        <ListComponent
          initialState={initialState}
          mainHeader={mainHeader}
          edit={edit}
          dispatchDataState={dispatchDataState}
          dataState={dataState}
        />
      </div>
    </>
  );
}
export default FormComponent;
