import { useState } from "react"



const OptionItem = (props) => {

    const selectedStyle = {
        color: "white", backgroundColor: "#0D62FF"
    }

    return <div onClick={props.changeState} className="option-item" style={props.selected ? selectedStyle : {}} >{props.value}</div>
}




export const Options = () => {

    const [selected, setSelected] = useState(0)

    const options = [
        "Dashboard", "Trainings", "Users", "Analytics", "My Account", "Support"
    ]
    return <div className="options">
        {options.map((opt, index) =>
            <OptionItem value={opt} selected={selected === index} key={index} changeState={() => setSelected(index)} ></OptionItem>
        )}
    </div>
}