
import Posts from "./components/Posts";
import { StoryProvider } from "./state/StoryContext";
import { ScreenProvider, useScreen } from "./state/ScreenContext";
import FormComponent from "./components/Common/FormComponent";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "./store/locationSlice";

const Home = () => {
    // const [position, setPosition] = useState({ latitude: '', longitude: '' })
    const { latitude, longitude } = useSelector((state) => state.location);
    const dispatch = useDispatch();

    useEffect(() => {
        if (navigator.geolocation) {
            // first check if the browser provided location api
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    //   console.log("ppp", position.coords.latitude);
                    //   console.log("ppp", position.coords.longitude);
                    // const { latitude, longitude } = position.coords;
                    dispatch(setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}));
                },
                (error) => {
                    console.log("ppp there is a problem while fetching the location");
                }
            );
        } else {
            console.log("ppp your browser does not provide location");
        }
    }, []);

    return (
        <>
            <ScreenProvider>
                <Main />
            </ScreenProvider>
            <StoryProvider>
                <Posts />
            </StoryProvider>
            {/* {
                position.latitude && position.longitude ? (
                    <>
                        <p>location:</p>
                        <ul>
                            <li>{position.latitude}</li>
                            <li>{position.longitude}</li>
                        </ul>
                    </>
                ) : (
                    <p>fetching....</p>
                )
            } */}
            
            <p>location:</p>
            <ul>
                <li>{latitude}</li>
                <li>{longitude}</li>
            </ul>
        </>
    )

}
const Main = () => {
    const { pageState, setPageState } = useScreen();
    const navigate = useNavigate();
    const location = {
        name: "Max",
        age: 20,
        place: 'Hyderabad'
    }
    return (
        <>
            <div style={{ display: "grid" }}>
                <p style={{ justifySelf: "center" }}>Innomatics JNTU</p>
            </div>
            <button className={pageState === 'Profile' ? 'focusedButton' : ''}
                onClick={() => {
                    setPageState("Profile");
                }}
            >
                Profiles
            </button>
            <button className={pageState === 'User' ? 'focusedButton' : ''}
                onClick={() => {
                    setPageState("User");
                }}
            >
                Users
            </button>
            <button className={pageState === 'Candidate' ? 'focusedButton' : ''}
                onClick={() => {
                    setPageState("Candidate");
                }}
            >
                Candidates
            </button>
            <button onClick={() => {
                navigate(`/page1?name=${location.name}&age=${location.age}&place=${location.place}`,
                    {
                        state: {
                            name: 'Yash',
                            age: 10,
                            place: 'Hyderabad'
                        }
                    }
                )
            }}>Page1</button>
            <button onClick={() => { navigate('/page2/12345') }}>Page2</button>
            <button onClick={() => { navigate('/page3') }}>Page3</button>
            <button onClick={() => { navigate('/page3') }}>Page4</button>
            {/* {pageState === "Profiles" ? (
        <ProfileIndex />
        ) : pageState === "Users" ? (
        <UserIndex />
        ) : (
        <></>
        )} */}

            {(() => {
                switch (pageState) {
                    case "Profile":
                        // return <ProfileIndex />;
                        return <FormComponent />
                    case "User":
                        // return <UserIndex />;
                        return <FormComponent />
                    case "Candidate":
                        // return <CandidateIndex />;
                        return <FormComponent />
                    default:
                        return <></>;
                }
            })()}
        </>
    );
}


export default Home;
