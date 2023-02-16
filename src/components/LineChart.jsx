import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData }) => {
  return (
    <div className="mt-20">
      <p className="text-3xl mb-12">Line Chart</p>
      <Line
        className=""
        //data for the chart
        data={{
          labels: chartData.label,
          datasets: chartData.datasets,
        }}
      />
    </div>
  );
};
export default LineChart;
