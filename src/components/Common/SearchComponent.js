import { useState } from "react";

/**
 {
    dispatchProfileDataState:dispatchProfileDataState()
 }
 */
const SearchComponent = (props) => {
  const { dispatchProfileDataState } = props;
  const [searchInp, setSearchInp] = useState(""); // holds value of Search Input

  const onSearch = (e) => {
    setSearchInp(e.target.value);
    dispatchProfileDataState({
      type: "search",
      srhText: e.target.value,
    });
  };

  return (
    <>
      <h2>Search Profile</h2>

      <div className="formMaintainer">
        <div className="formContainer">
          <div>
            <label>Search</label>
            <div style={{ display: "grid" }}>
              <input
                onChange={onSearch}
                value={searchInp}
                style={{ width: "100%" }}
                name="Search"
                placeholder="Search by Profile Name or Designation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchComponent;
