





export const MonthlyActivity = ()=> {

    const courses = ['course a', 'course b', 'course c', 'course d'];
    const workers = [23, 253, 253, 253];
    return <div className="row-3-item" style={{ width : "300px" }} >
        <div className="month-header-main" ><h1>Monthly Training Activity</h1></div>
        <div className="month-header-sub">16% more enrollees this month</div>
        <div className="monthly-item">
            {courses.map((item,index)=>{
                return (<>
                    <div key={index+1} className="monthly-item-header" >{item}</div>
                    <h3 key={index+10}  className="monthly-item-sub">{workers[index]} workers took this course this week</h3>
                </>)
            })}
        </div>
    </div>

}