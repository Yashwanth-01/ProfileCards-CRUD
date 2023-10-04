import ProfileData from '../mockData/ProfileData.json'
export const initialState = ProfileData;
export const profileReducer = (profileDataState, operation) => {
    // task 3: use object destructuring for operation
    const {newProfileDtls,editIndex,currProfInd,srhText}=operation
    switch (operation.type) {
      case "create":
        return [...profileDataState, { ...newProfileDtls }];
      case "update":
        return profileDataState.map((prof, pInd) => {
          if (editIndex === pInd) {
            prof.profileName = newProfileDtls.profileName;
            prof.profileImage = newProfileDtls.profileImage;
            prof.designation = newProfileDtls.designation;
            return prof;
          } else {
            return prof;
          }
        });
      case "delete":
        return profileDataState.filter((elem, index) => {
          return currProfInd !== index;
        });
      case "search":
        if (srhText === "") {
          return ProfileData;
        } else {
          // return initialState.filter((elem, index) => {
          return ProfileData.filter((elem, index) => {
            return (
              elem.profileName
                .toLowerCase()
                .includes(srhText.toLowerCase()) ||
              elem.designation
                .toLowerCase()
                .includes(srhText.toLowerCase())
            );
          });
        }
      default:
        return ProfileData;
    }
  };
  