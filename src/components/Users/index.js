import FormComponent from "../Common/FormComponent"
import UserData from "../../mockData/UserData.json"
const ProfileIndex = () => {
    return(
        <>
        <FormComponent mainHeader={'User'} initialState = {UserData}/>
        </>
    )
}
export default ProfileIndex;