import "./Profiles.css";

const ProfileData = [
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Hemanth",
    designation: "Software Developer",
  },
  {
    profileImage:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    profileName: "Deepak",
    designation: "Doctor",
  },
  {
    profileImage:
      "https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg",
    profileName: "Kalyan",
    designation: "Police",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Nikitha",
    designation: "Teacher",
  },
];
function Profiles() {
  return (
    <div className="rootDivContainer">
      <h2>Add Profile</h2>
      <div className="formContainer">
        <div>
          <label>Profile Name*</label>
          <div style={{ display: "grid" }}>
            <input name="ProfileName" />
            {/* <span>Profile Name is Required</span> */}
          </div>
        </div>
        <div>
          <label>Designation*</label>
          <div style={{ display: "grid" }}>
            <input name="Designation" />
            {/* <span>Designation is Required</span> */}
          </div>
        </div>
        <div>
          <label>Profile Image*</label>
          <div style={{ display: "grid" }}>
            <input name="ProfileImage" />
            {/* <span>Profile Image is Required</span> */}
          </div>
        </div>
      </div>
      <button>Submit</button>
      <h2>Profiles</h2>
      <div className="rootContainer">
        {ProfileData.map((profile, index) => {
          return (
            <>
              <div className="card">
                <img
                  src={profile.profileImage}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h4>
                    <b>{profile.profileName}</b>
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent:'space-between',
                      alignItems:'center'
                    }}
                  >
                    <p>{profile.designation}</p>
                    <img
                      alt="delete"
                      style={{ width: "10%", height:'10%', cursor:'pointer' }}
                      src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Profiles;
