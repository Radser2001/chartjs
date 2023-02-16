import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ScatterChart = ({ chartData }) => {
  return (
    <div className="mt-20 mb-12">
      <p className="text-3xl mb-12">Scatter Chart</p>
      <Scatter
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
export default ScatterChart;
