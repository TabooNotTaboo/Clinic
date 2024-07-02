import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("https://api-prn.zouzoumanagement.xyz/api/user/my-profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data.data);
      } else {
        console.error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchUserProfile();
    }
  }, [accessToken]);

  const renderImage = () => {
    const imageSize = "2rem";
    const imageStyle = {
      width: imageSize,
      height: imageSize,
      objectFit: "cover",
      borderRadius: "50%",
    };

    // Sử dụng hình ảnh từ thư mục assets thay vì ảnh từ API

    return <img src="/images/avatar.png" alt="Profile" style={imageStyle} />;
  };

  return (
    <div className="fixed top-0 right-0 bg-[#0d1730] text-white p-4 w-full z-50">
      <div className="container ml-auto flex ">
        <div className="ml-auto flex items-center relative">
          <button onClick={toggleMenu} className="flex items-center p-2">
            <div
              className="rounded-full cursor-pointer border-gray-600 border-solid border-4"
            >
              {renderImage()}
            </div>
          </button>
          {isOpen && (
            <div
              id="userDropdown"
              className="absolute top-full right-0 bg-[#0d1730] text-white p-2 mt-1 rounded-xl border border-white z-50"
            >
              {userData && (
                <>
                  <div className="px-4 py-3 text-sm text-white">
                    <div>{userData.firstName} {userData.lastName}</div>
                    <div className="font-medium truncate">{userData.email}</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={logout}
                    >
                      Sign out
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
