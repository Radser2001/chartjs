import { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import { UserData } from "./data/Data";

function App() {
  const [userGainedData, setUserData] = useState({
    label: UserData ? UserData.map((user) => user.year) : "No Data",
    datasets: [
      {
        label: "Users Gained",
        data: UserData ? UserData.map((user) => user.userGain) : "No Data",
        backgroundColor: ["#64B5F6", "#9575CD"],
        borderColor: "#64B5F6",
        borderWidth: 2,
      },
    ],
  });

  const [userLostData, setUserLostData] = useState({
    label: UserData ? UserData.map((user) => user.year) : "No Data",
    datasets: [
      {
        label: "Users Gained",
        data: UserData ? UserData.map((user) => user.userLost) : "No Data",
        backgroundColor: ["#EF9A9A", "#D32F2F"],
        borderColor: "#EF9A9A",
        borderWidth: 2,
      },
    ],
  });

  //pie chart
  const [userGainedDataPie, setUserDataPie] = useState({
    label: UserData ? UserData.map((user) => user.year) : "No Data",
    datasets: [
      {
        label: "Users Gained",
        data: UserData ? UserData.map((user) => user.userGain) : "No Data",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const [userLostDataPie, setUserLostDataPie] = useState({
    label: UserData ? UserData.map((user) => user.year) : "No Data",
    datasets: [
      {
        label: "Users Gained",
        data: UserData ? UserData.map((user) => user.userLost) : "No Data",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // red
          "rgba(255, 159, 64, 0.2)", // orange
          "rgba(255, 206, 86, 0.2)", // yellow
          "rgba(75, 192, 192, 0.2)", // teal
          "rgba(54, 162, 235, 0.2)", // blue
          "rgba(153, 102, 255, 0.2)", // purple
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // red
          "rgba(255, 159, 64, 1)", // orange
          "rgba(255, 206, 86, 1)", // yellow
          "rgba(75, 192, 192, 1)", // teal
          "rgba(54, 162, 235, 1)", // blue
          "rgba(153, 102, 255, 1)", // purple
        ],
      },
    ],
  });

  return (
    <div className="App">
      <h1 className="text-center mt-8 text-5xl">ChartJS Testing</h1>
      <div className="flex flex-col items-center justify-center   ">
        <div className="h-6/12 w-4/12">
          <BarChart chartData={userGainedData} />
          <BarChart chartData={userLostData} />
          <LineChart chartData={userGainedData} />
          <LineChart chartData={userLostData} />
          <PieChart chartData={userGainedDataPie} />
          <PieChart chartData={userLostDataPie} />
          <ScatterChart chartData={userGainedData} />
          <ScatterChart chartData={userLostData} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
