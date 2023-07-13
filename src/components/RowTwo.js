
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { BarChart } from './BarChart/BarChart'

ChartJS.register(ArcElement, Tooltip, Legend);

const ItemOne = () => {


    const bgColor = {
        0: "#0e62ff",
        1: "#c2c2c2",
        2: "#8400d5",
        3: "#425f57",
        4: "#ed1c25",
    };


    const data = {

        labels: [
            "Finished Training",
            "Chapter A",
            "Chapter B",
            "Chapter C",
            "Haven't Started Yet",
        ],
        datasets: [
            {
                data: [22, 20, 7, 22, 34],
                backgroundColor: ["#fff"],
                hoverBackgroundColor: [
                    "#0e62ff",
                    "#c2c2c2",
                    "#8400d5",
                    "#425f57",
                    "#ed1c25",
                ],
                borderColor: ["#ebebeb"],
                borderWidth: 2,
            },
        ],
    };


    const hoverLabel = {
        id: "hoverLabel",
        afterDraw(chart, args, options) {
            const { ctx, chartArea: { left, right, top, bottom, width, height } } = chart
            // Save Parameters
            ctx.save()

            if (chart._active.length > 0) {
                const textLabel = chart.config.data.labels[chart._active[0].index]
                ctx.font = '16px Arial';
                ctx.fillStyle = 'black'
                ctx.textAlign = 'center'
                ctx.fillText(textLabel, width / 2, height / 2)
            }

        }
    }



    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: true,
                position: "bottom",
                color: "#333",
                align: "start",
                labels: {
                    textAlign: 'center',
                    usePointStyle: true,
                    generateLabels: function (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, index) => {
                                const dataset = data.datasets[0];
                                const backgroundColor = bgColor[index];
                                const borderColor =
                                    dataset.borderColor[index % dataset.borderColor.length];

                                return {
                                    text: label,
                                    fillStyle: backgroundColor,
                                    strokeStyle: borderColor,
                                    lineWidth: dataset.borderWidth,
                                    hidden: !chart.getDataVisibility(index),
                                    index: index,
                                };
                            });
                        }
                        return [];
                    },
                    font: {
                        size: 15,
                    },
                    padding: 20,
                },
            },
        },
        animation: {
            onComplete: function ({ chart }) {
                var ctx = chart.ctx
                console.log("ctx", chart)
                console.log(ctx)
            }
        }
    };

    // TODO : Fix tooltip and display percentages on the chart.

    return <div className="row-2-item"> <div style={{fontSize: "1.4rem`"}} >Chapter Wise Status</div> < div style={{width : "316px"
    , position : "relative" , top : "20px" }} > <Doughnut data={data} options={options}
        plugins={[hoverLabel]}
    ></Doughnut></div></div >
}








export const RowTwo = () => {

    return <div className="row-2">
        <ItemOne></ItemOne>
        <BarChart></BarChart>
    </div>
}