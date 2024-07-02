import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

function ProfileForm() {
    const [userData, setUserData] = useState({
        id: null,
        firstName: "",
        lastName: "",
        gender: 0,
        address: "",
        dateOfBirth: "",
        phoneNumber: "",
        cccd: null,
        email: "",
        groupId: 0,
        type: null,
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("accessToken"); // Fetch token from localStorage
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json", // Adjust content type as needed
            };

            const response = await axios.get(
                "https://api-prn.zouzoumanagement.xyz/api/user-profile/get-profile-by-customer",
                { headers }
            );

            const profileData = response.data.data[0]; // Extract the first item from the 'data' array
            setUserData(profileData);
        } catch (error) {
            console.error("Error fetching profile:", error);
            // Handle error, e.g., show an error message or retry
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem("accessToken"); // Fetch token from localStorage
            const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json", // Adjust content type as needed
            };

            await axios.put(
                "https://api-prn.zouzoumanagement.xyz/api/user-profile/update-profile",
                userData,
                { headers }
            );

            console.log("Profile updated successfully");
            // Optionally, you can refresh the profile data after update
            fetchProfile();
        } catch (error) {
            console.error("Error updating profile:", error);
            // Handle error, e.g., show an error message to the user
        }
    };

    return (
        <div className="bg-gray-100 border border-4 rounded-lg shadow relative mt-10 max-w-screen-xl mx-auto">
            <div className="flex items-start justify-between p-5 border-b rounded-t border-gray-400">
                <h3 className="text-xl font-semibold">Profile</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="firstName"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="shadow-sm bg-gray-50 border mb-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.firstName}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="lastName"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.lastName}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="gender"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Gender
                            </label>
                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.gender}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="address"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.address}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="dateOfBirth"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.dateOfBirth}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="phoneNumber"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.phoneNumber}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="cccd"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                CCCD
                            </label>
                            <input
                                type="text"
                                name="cccd"
                                id="cccd"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.cccd}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="groupId"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Group ID
                            </label>
                            <input
                                type="text"
                                name="groupId"
                                id="groupId"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.groupId}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="type"
                                className="text-sm font-semibold text-gray-900 block mb-2"
                            >
                                Type
                            </label>
                            <input
                                type="text"
                                name="type"
                                id="type"
                                className="shadow-sm bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={userData.type}
                                onChange={handleInputChange}
                                required
                                style={{ fontWeight: "inherit" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 flex justify-end">
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default ProfileForm;
