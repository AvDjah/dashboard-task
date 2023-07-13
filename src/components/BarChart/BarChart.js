import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    // responsive: true,
    layout: {
        padding: {
            // left: 400
        }
    },
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales : {
        x: {
            border : {
                display : false
            },
            grid: {
                display: false,
            }
        },
        y: {
            border: {
                display: false
            },
            grid: {
                display : false
            },
        }
    },
    maintainAspectRatio: false
}


const labels = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan', '11 Jan', '12 Jan'];

function generateRandomIntArray(length, min, max) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomInt);
    }
    return arr;
}

const randomArray = generateRandomIntArray(labels.length, 100, 500);






const data = {
    labels,
    datasets: [
        {
            data: randomArray,
            backgroundColor: '#397eff',
            borderRadius: 100,
            borderSkipped: false,
            grouped: false,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
        },
        {
            data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
            backgroundColor: '#e6efff',
            borderRadius: 100,
            borderSkipped: false,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
        },
    ],
};





export const BarChart = () => {

    return <div className="row-2-item" style={{width: "1053px"}}>
        <div style={{display : "flex", justifyContent: "space-between", fontSize: "1.3em"}}>
            <span style={{display: "inline-block"}}>
            Last 14 Days Active Workers In Training
            </span>
            <span style={{display: "inline-block"}}>
                Last 14 Days
            </span>

        </div>
        <div style={{height: "350px", textAlign: "center", padding: "35px"}} >
            <Bar data={data} options={options}></Bar>
        </div>
    </div>
}