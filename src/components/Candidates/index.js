import FormComponent from "../Common/FormComponent";
import CandidatesData from "../../mockData/CandidatesData.json"

const CandidateIndex = () => {
    return(
        <>
        <FormComponent mainHeader = {'Candidates'} initialState = {CandidatesData}/>
        </>
    )
}
export default CandidateIndex;