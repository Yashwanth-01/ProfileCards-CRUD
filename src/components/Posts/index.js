import { useState } from "react";
import Feeds from "../Feeds";

const Posts = () => {
    const [story, setStory] = useState("");
    const [storyList, addStory] = useState([]);
    const handleChange = (e) => {
        setStory(e.target.value);
    }
    const onsubmit = () => {
        if(story.length){
            addStory((prevList) => {
                return [...prevList, story];
            });
        }
        setStory('');
    }
    
    return(
        <>
        <p>Posts</p>
        <div className="formContainer">
        <textarea name="description"
            placeholder="write story here..."
            rows={10}
            columns={10}
            value={story}
            onChange={handleChange}
        />
        </div>
        <button onClick={onsubmit}>Submit</button>
        <Feeds storyList = {storyList}/>
        </>
    )
}
export default Posts;