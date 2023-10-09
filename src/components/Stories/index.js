import { Fragment } from "react";

const Stories = (props) => {
    const {storyList} = props;
    return(
        <>
        <p>Stories</p>
        <div className="rootContainer">
        {storyList.map((story, index) => {
          return (
            <Fragment key={index}>
              <div className="card">
                <div className="container">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{story}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
        </>
    )
}
export default Stories;