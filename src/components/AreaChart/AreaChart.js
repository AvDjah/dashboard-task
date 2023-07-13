import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const options = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip : {
            enabled : false
        },
    },
}


const data = {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J'],
    datasets: [
        {
            label: 'Sales',
            data: [120, 190,20,90,10,120,120],
            backgroundColor: 'rgba(75,192,192,0.2)', // Area fill color
            borderColor: 'rgba(75,192,192,1)', // Border color
            borderWidth: 1,
            fill : true
        },
    ],
};



export const AreaChart = ()=> {


        return            <Line data={data} options={options}></Line>

}