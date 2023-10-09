import News from "../News";

const Feeds = (props) => {
    const {storyList} = props
    return(
        <>
        <p>Feeds</p>
        <News storyList = {storyList}/>
        </>
    )
}
export default Feeds;