import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import UseAxios from "../API";

const getAllProfilesConfig = {
    method: "get",
    url: "profiles",
}
const getAProfileConfig = {
    method: "get",
    url: "profiles/deepak",
}
const searchAProfilesConfig = {
    method: "get",
    url: "profiles?name=deepak",
}
const createAProfileConfig = {
    method: "post",
    url: "profiles",
    data: {
        "image": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        "name": "Deepak",
        "designation": "Engineer"
    }
}
const updateAProfileConfig = {
    method: "put",
    url: "profiles",
    data: {
        "id": "asdad",
        "image": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        "name": "Deepak G",
        "designation": "Engineer"
    }
}
const deleteAProfileConfig = {
    method: "delete",
    url: "profiles/asdad",
}
const Page1 = () => {
    const navigate = useNavigate(); //Programatically navigating
    const location = useLocation(); // to read data passed through routing
    const [params] = useSearchParams();

    useEffect(() => {
        // console.log('ppp', location.state)
    }, [location])

    useEffect(() => {
        // console.log('ppp', params.get('name'));
        // console.log('ppp', params.get('age'));
        // console.log('ppp', params.get('place'));
    }, [params])

    const APICALL = async (config) => {
        const response = await UseAxios(config);
        if (response) console.log("ppp", response.data);
    }

    useEffect(() => {
        // "https://api.publicapis.org/entries",

        const fetchData = async () => {
            try {
            
                const response = await UseAxios(config);
                if (response) console.log("ppp", response.data);
            } catch (error) {
                console.log('ppp', error)
            }
        };
        fetchData();

    }, []);

    return (
        <>
            <h1>This is Page1</h1>
            <button onClick={() => { navigate(-1) }}>Back</button>
        </>
    )
}
export default Page1;