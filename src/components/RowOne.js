
import {AreaChart} from "@/components/AreaChart/AreaChart";
import {AiOutlineStock} from 'react-icons/ai'

const CardOne = (props) => {

    const itemBottomRowStyle = { display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "1px", height: "500px", alignItems: "end" }




    console.log(props.data)
    const data = props.data;
    return <div className="row-1-item">
        <div ><span style={{fontWeight : "normal",fontSize : "1.5rem"}} >{props.data.heading}</span></div>
        <div style={itemBottomRowStyle}>
            <div style={{width : "90px"}}>
                <div className="info-bold" >
                    {data.num1}
                </div>
                <div className="info-small">
                    <span className="info-small-span" style={{background : "#cff6de", color: "#2ba964", borderRadius : "8%"}}  > <AiOutlineStock /> {data.num2}% </span> <span className="info-small-span">  {data.num3} </span>
                </div>
            </div>
            <div className="area-chart-container" >
                <AreaChart></AreaChart>
            </div>
        </div>
    </div>
}


export const RowOne = () => {

    const data = [
        {
            heading: "In Training Workers",
            num1: 3354, num2: 20, num3: 234
        },
        {
            heading: "Video Watch Time (Hrs)",
            num1: 2433, num2: 20, num3: 435

        },
        {
            heading: "% Workers Passing Quiz",
            num1: 95, num2: 20, num3: 24
        },
        {
            heading: "Avg. Days Taken",
            num1: 6, num2: 20, num3: 3
        }
    ]




    return <div className="row-1">
        {data.map((d, index) => <CardOne data={d} key={index} ></CardOne>)}
    </div>
}