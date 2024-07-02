import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Dashboard() {
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        if (myChart) {
            myChart.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["A", "B", "C", "D"],
                datasets: [{
                    label: "Data",
                    data: [10, 15, 20, 25],
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []);

    return (
        <div className="bg-gray-100 border border-4 rounded-lg shadow relative mt-10 ">
            <div className="flex items-start justify-between p-5 border-b rounded-t border-gray-400">
                <h3 className="text-xl font-semibold">
                    Total Amount
                </h3>
            </div>

            <div className="p-6 border-t border-gray-400 rounded-b border-gray-400">
                <canvas ref={chartRef}></canvas>
                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
            </div>
        </div>
    );
}

export default Dashboard;

