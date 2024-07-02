import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import "./Profile.css"
import fetchUserProfile from "../redux/Slice/profileSlice";
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadImageProfile from "./Profile/UploadImageProfile"

const Profile = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); 
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const renderImage = () => {
    const imageSizeW = "13rem"; 
    const imageSizeH = "11rem";
    const imageStyle = {
      width: imageSizeW,
      height: imageSizeH,
      objectFit: "cover", 
    };
  
    if (userData && userData.imagePath) {
      const baseUrl = "https://api-dev.ezcount.vn";
      const validUrl = baseUrl + userData.imagePath;
      return <img src={validUrl} alt="image" style={imageStyle} />;
    }
    return <img src="placeholder-image-url" alt="Placeholder" style={imageStyle} />;
  };
  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
const fetchUserData2 = async () => {
      setLoading(true); 
      const userData = await fetchUserProfile(token);
      setUserData(userData);
      setLoading(false); 
    };
  useEffect(() => {
    fetchUserData2();
  }, [token]);

  return (
    <div className="flex"> 
      {loading ? ( 
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : (
        <div className="max-w-xs fixed h-screen overflow-y-auto"> 
          <h1 className="text-2xl font-bold mb-2 p-3">Profile Settings</h1> 
          <div className="max-w-xs rounded-lg shadow-lg bg-gray-200">
            <div className="w-[13rem] p-4 rounded-t-lg rounded-b-lg">
              <button onClick={handleUploadClick} >{renderImage()}</button>
            </div>
            <div className="px-4 py-2">
              <div className="mt-2">
                <div className="flex flex-col">
                  <Link 
                    to="dashboard/profile/profile-user" 
                    className={`bg-gray-300 hover:bg-blue-100 text-blue-gray-700 font-bold py-2 px-4 rounded-t-lg rounded-b-lg mb-2 text-sm ${activeLink === "profile-company" ? "active-link" : ""}`}
                    onClick={() => handleSetActiveLink("profile-company")}
                  >
                    Profile Company
                  </Link> 
                  <Link 
                    to="dashboard/profile/setting-outgoing-mail" 
                    className={`bg-gray-300 hover:bg-blue-100 text-blue-gray-700 font-bold py-2 px-4 rounded-t-lg rounded-b-lg mb-2 text-sm ${activeLink === "setting-outgoing-mail" ? "active-link" : ""}`}
                    onClick={() => handleSetActiveLink("setting-outgoing-mail")}
                  >
                    Setting Outgoing Mail
                  </Link> 
                  <Link 
                    to="dashboard/profile/dashboard" 
                    className={`bg-gray-300 hover:bg-blue-100 text-blue-gray-700 font-bold py-2 px-4 rounded-t-lg rounded-b-lg mb-2 text-sm ${activeLink === "dashboard" ? "active-link" : ""}`}
                    onClick={() => handleSetActiveLink("dashboard")}
                  >
                    Dashboard
                  </Link> 
                  <Link 
                    to="dashboard/profile/history-purchase" 
                    className={`bg-gray-300 hover:bg-blue-100 text-blue-gray-700 font-bold py-2 px-4 rounded-t-lg rounded-b-lg mb-2 text-sm ${activeLink === "history-purchase" ? "active-link" : ""}`}
                    onClick={() => handleSetActiveLink("history-purchase")}
                  >
                    History Purchase
                  </Link> 
                  <Link 
                    to="dashboard/profile/upgrade-plan" 
                    className={`bg-gray-300 hover:bg-blue-100 text-blue-gray-700 font-bold py-2 px-4 rounded-t-lg rounded-b-lg text-sm ${activeLink === "upgrade-plan" ? "active-link" : ""}`}
                    onClick={() => handleSetActiveLink("upgrade-plan")}
                  >
                    Upgrade Plan
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 ml-[14rem] mr-3">
        <Outlet /> 
      </div>
      <UploadImageProfile showPopup={showPopup} handleClosePopup={handleClosePopup} />
    </div>
    
  );
};

export default Profile;
