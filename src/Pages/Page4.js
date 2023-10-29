import { useNavigate } from "react-router-dom";

const Page4 = () => {
    const navigate = useNavigate()

    return(
        <>
        <h1>This is Page4</h1>
        <button onClick={() => { navigate(-1)}}>Back</button>
        </>
    )
}
export default Page4;