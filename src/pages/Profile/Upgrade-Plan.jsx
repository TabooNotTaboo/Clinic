import React from "react";
import { Switch, Typography } from "@material-tailwind/react";

function UpgradePlan() {
    return (
        <div className="bg-gray-100 border border-4 rounded-lg shadow mt-10 max-w-screen-xl mx-auto">

            <div className="flex items-start justify-between p-5 border-b rounded-t border-gray-400">
                <h3 className="text-xl font-semibold">
                    Upgrade Plan
                </h3>
            </div>

            <div className="p-6 space-y-6">
                <form action="#">
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex flex-col gap-4 border border-gray-300 p-4 rounded-md">
                            <Switch
                                label={
                                    <div>
                                        <Typography color="blue-gray" className="font-medium">
                                            Automatic renewal
                                        </Typography>
                                    </div>
                                }
                            />
                            <Switch
                                label={
                                    <div>
                                        <Typography color="blue-gray" className="font-medium">
                                            Notification when expired
                                        </Typography>
                                    </div>
                                }
                            />
                            <Switch
                                label={
                                    <div>
                                        <Typography color="blue-gray" className="font-medium">
                                            Notification via email
                                        </Typography>
                                    </div>
                                }
                            />
                        </div>

                        <div>
                            <Typography color="blue-gray" className="font-medium text-2xl">
                                Service in use
                                <Typography variant="small" color="gray" className="font-normal">
                                    Utilities included when registering for the service
                                </Typography>
                            </Typography>
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

export default UpgradePlan;
