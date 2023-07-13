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
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip : {
            enabled : false
        }
    },
    scales: {
        y: {
            border: {
                display: false
            },
            ticks: {
                stepSize: 40,
                maxRotation: 0,
            },
        },
        x: {
            ticks: {
                maxRotation: 0,
            },
            offset: true,
            grid: {
                display: false
            },
            border: {
                display: false
            },

        },

    },
};

const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function generateRandomIntArray(length, min, max) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomInt);
    }
    return arr;
}

const randomArray = generateRandomIntArray(7, 10, 100);

const data = {
    labels,
    datasets: [
        {
            data: randomArray,
            backgroundColor: '#397eff',
            grouped: false,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
        },
        {
            data: randomArray.map(num => num * 1.5),
            backgroundColor: '#e6efff',
            borderRadius: 100,
            categoryPercentage: 0.6,
            barPercentage: 0.6,
        },
    ],
};

export const DailyTrainingCompletion = () => {
    return <div className="row-3-item" style={{width: "589px"}}>
        <div>Daily Training Completions</div>
        <div></div>
        <Bar data={data} options={options}></Bar></div>
}