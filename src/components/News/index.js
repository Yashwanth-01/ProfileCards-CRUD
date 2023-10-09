import Stories from "../Stories";

const News = (props) => {
    const {storyList} = props;
    return(
        <>
        <p>News</p>
        <Stories storyList = {storyList}/>
        </>
    )
}
export default News;