
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
//
//
ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
    labels: ['Passed', 'Failed'],
    datasets: [
        {
            label: 'No of Workers',
            data: [1423, 134],
            backgroundColor: [
                '#008e41',
                '#ed1c25'
            ],
            borderColor: [
                '#008e41',
                '#ed1c25'
            ],
            borderWidth: 1,
            cutout: 70,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: true,
        },
        legend: {
            display: true,
            position: "right",
            color: "#000",
            align: "start",
            labels: {
                textAlign: 'center',
                usePointStyle: true,
                font: {
                    size: 12,
                    weight: 'bolder'
                },
                padding: 15,
            },
        },
    },
};


export const QuizPassing = () => {
    return <div className="row-3-item"><div className="quiz-header" style={{width: "385px"}} >Quiz Passing</div>
        <div style={{ height: "300px", width: "300px",}} >
            <Doughnut data={data} options={options}></Doughnut>
        </div></div>
}