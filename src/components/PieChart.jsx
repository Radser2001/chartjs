import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  return (
    <div className="mt-20 mb-12">
      <p className="text-3xl mb-12">Pie Chart</p>
      <Pie
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
export default PieChart;
