import React from "react";
import "react-multi-carousel/lib/styles.css";

const MyProfile = ({ user }) => {
  return (
    <>
      <h1 className="text-3xl pl-32 pb-4"> Personal Info </h1>
      <div className="sidebar mb-16">
        <div className="profile-info">
          <p className="key">First Name : </p>
          <p className="value">{user.first_name}</p>
        </div>
        <div className="profile-info">
          <p className="key">Last Name : </p>
          <p className="value">{user.last_name}</p>
        </div>
        <div className="profile-info">
          <p className="key">Email : </p>
          <p className="value">{user.email}</p>
        </div>

        <div className="profile-info">
          <p className="key">Hobbies : </p>
          <p className="value">{user.interests}</p>
        </div>
      </div>
      <div className="content">
        <div className="work-experience p-10">
          <h1 className="text-3xl"> About Me </h1>
          <div className="info">
            <p>{user.about_me}</p>
          </div>
        </div>
      </div>
      <style>{`
            .sidebar {
                width:60%;
                margin-left: 10%;
                background: #4fbd67;
                color: white;
            }
            .profile-info {
                padding: 20px 10px;
                border-bottom: 1px solid #058722;
            }
    
             .profile-info p{
                margin-left: 10px;
                display: inline-block;
                vertical-align: top;
            }
    
            .profile-info .key{
                font-weight: bold;	
            }
    
            .profile-info .value{
            }
    
            .content {
                width: 60%;
                margin-left: 10%;
                display: inline-block;
                vertical-align: top;
            }
    
            .work-experience{
                margin-bottom: 30px;
                background: white;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
            }
    
            .info {
                padding: 2% 1%;
                border-bottom: 1px solid #bdbdbd;
            }

        `}</style>
    </>
  );
};

export default MyProfile;
