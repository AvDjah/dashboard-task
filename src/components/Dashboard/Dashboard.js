import Banner from "../Banner"
import { RowOne } from "../RowOne"
import { RowThree } from "../RowThree"
import { RowTwo } from "../RowTwo"


const Dashboard = () => {
    return <div className="dashboard">
        <Banner></Banner>
        <div className="row-container">
            <RowOne></RowOne>
            <RowTwo></RowTwo>
            <RowThree></RowThree>
        </div>
    </div>
}


export default Dashboard