import React, { useState } from 'react';

function SettingOutgoingMail() {
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddSkill = () => {
        if (inputValue.trim() !== '') {
            setSkills([...skills, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
    };

    return (
        <div className="bg-gray-100 border border-4 rounded-lg shadow relative ">
            <div className="flex items-start justify-between p-5 border-b rounded-t border-gray-400">
                <h3 className="text-xl font-semibold">
                    General Settings
                </h3>
            </div>
            <div className="ml-6 font-semibold text-lg text-gray-700">User detail</div>

            <div className="p-6 space-y-6">
                <form action="#">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="user-id" className="text-sm font-medium text-gray-900 block mb-2">User ID</label>
                            <input type="text" name="user-id" id="user-id" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="User ID" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="joining-date" className="text-sm font-medium text-gray-900 block mb-2">Joining Date</label>
                            <input type="date" name="joining-date" id="joining-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="language" className="text-sm font-medium text-gray-900 block mb-2">Language</label>
                            <select name="language" id="language" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="">
                                <option value="english">English</option>
                                <option value="french">French</option>
                                <option value="spanish">Spanish</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="time-zone" className="text-sm font-medium text-gray-900 block mb-2">Time Zone</label>
                            <select name="time-zone" id="time-zone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="">
                                <option value="GMT-12">GMT-12</option>
                                <option value="GMT-11">GMT-11</option>
                                <option value="GMT-10">GMT-10</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="skills" className="text-sm font-medium text-gray-900 block mb-2">Skills</label>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <div key={index} className="bg-gray-200 px-3 py-1 rounded-md flex items-center">
                                        <span>{skill}</span>
                                        <button
                                            className="ml-2 text-pink-200"
                                            onClick={() => handleRemoveSkill(index)}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    id="skills"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Enter a skill"
                                />
                                <button
                                    className="ml-2 px-3 py-1 bg-cyan-600 text-white rounded-md"
                                    onClick={handleAddSkill}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="ml-5 font-semibold text-lg text-gray-700">Education detail</div>
            <div className="p-6 space-y-6">
                <form action="#">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="schooling" className="text-sm font-medium text-gray-900 block mb-2">Schooling</label>
                            <input type="text" name="schooling" id="schooling" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Schooling" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="schooling-joining-date" className="text-sm font-medium text-gray-900 block mb-2">Joining Date</label>
                            <input type="date" name="schooling-joining-date" id="schooling-joining-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="schooling-complete-date" className="text-sm font-medium text-gray-900 block mb-2">Complete Date</label>
                            <input type="date" name="schooling-complete-date" id="schooling-complete-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="graduation" className="text-sm font-medium text-gray-900 block mb-2">Graduation</label>
                            <input type="text" name="graduation" id="graduation" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Graduation" required="" />
                        </div>

                    </div>
                </form>
            </div>

            <div className="ml-5 font-semibold text-lg text-gray-700">Work Experience</div>
            <div className="p-6 space-y-6">
                <form action="#">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="work-1" className="text-sm font-medium text-gray-900 block mb-2">Work 1</label>
                            <input type="text" name="work-1" id="work-1" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Work 1" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="designation" className="text-sm font-medium text-gray-900 block mb-2">Designation</label>
                            <input type="text" name="designation" id="designation" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Designation" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="work-joining-date" className="text-sm font-medium text-gray-900 block mb-2">Joining Date</label>
                            <input type="date" name="work-joining-date" id="work-joining-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="work-complete-date" className="text-sm font-medium text-gray-900 block mb-2">Complete Date</label>
                            <input type="date" name="work-complete-date" id="work-complete-date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b border-gray-400">
                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
            </div>
        </div>
    );
}

export default SettingOutgoingMail;
