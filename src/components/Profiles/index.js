import FormComponent from "../Common/FormComponent";
import ProfileData from '../../mockData/ProfileData.json'
const ProfileIndex = () => {
  return (
    <>
      <FormComponent mainHeader={'Profile'} initialState = {ProfileData}/>
    </>
  );
};

export default ProfileIndex;
