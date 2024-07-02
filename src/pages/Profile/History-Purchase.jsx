import React, { useState } from "react";

function HistoryPurchase() {
    const [landline, setLandline] = useState("");
    const [mobile, setMobile] = useState("");
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (type) => {
        setActiveButton(type);
        if (type === "landline") {
            setLandline("Your landline number");
            setMobile("");
        } else if (type === "mobile") {
            setLandline("");
            setMobile("Your mobile number");
        }
    };

    return (
        <div className="bg-gray-100 border border-4 rounded-lg shadow relative mt-10 =lg:w-[62rem]">

            <div className="flex items-start justify-between p-5 border-b rounded-t border-gray-400">
                <h3 className="text-xl font-semibold">
                    History Purchase
                </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border-t border-gray-200 rounded-b">
                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email ID</label>
                                    <input type="text" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Email id" required="" />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="current-password" className="text-sm font-medium text-gray-900 block mb-2">Current Password</label>
                                    <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Current password" required="" />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="new-password" className="text-sm font-medium text-gray-900 block mb-2">New Password</label>
                                    <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="New password" required="" />
                                </div>
                                <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="confirm-password" className="text-sm font-medium text-gray-900 block mb-2">Confirm Password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Confirm password" required="" />
                                </div>
                            </div>
                            <div className="mt-2 font-serif text-red-600">Password should be ... </div>
                        </form>
                    </div>
                </div>
                <div className="border-l border-gray-400">
                    <div className="flex items-start justify-between p-5 border-b rounded-t border-gray-400">
                        <h3 className="text-xl font-semibold">
                            Transactions during the month
                        </h3>
                        <button className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset</button>
                    </div>
                </div>
            </div>

            <div className="p-6 border-t border-gray-400 rounded-b border-gray-400">
                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
            </div>

        </div>
    );
}

export default HistoryPurchase;
