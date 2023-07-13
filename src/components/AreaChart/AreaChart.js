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
    scales : {
        x : {
            grid : {
                display : false,
            }
        },
        y : {
            ticks : {
              display : false
            },
            grid : {
                display : false
            },
            border : {
                display : false
            }
        }
    }
}


const data = {
    labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J'],
    datasets: [
        {
            label: 'Sales',
            data: [120, 190,80,90,70,120,120],
            backgroundColor: 'rgba(75,192,192,0.2)', // Area fill color
            borderColor: 'rgba(75,192,192,1)', // Border color
            borderWidth: 0,
            fill : true,
            pointStyle:  false
        },
    ],
};



export const AreaChart = ()=> {


        return            <Line data={data} options={options}></Line>

}