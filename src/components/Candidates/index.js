import FormComponent from "../Common/FormComponent";
import CandidatesData from "../../mockData/CandidatesData.json"

const CandidateIndex = () => {
    return(
        <>
        <FormComponent mainHeader = {'Candidate'} initialState = {CandidatesData}/>
        </>
    )
}
export default CandidateIndex;