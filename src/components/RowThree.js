import {MonthlyActivity} from "@/components/MonthlyActivity/MonthlyActivity";
import {QuizPassing} from "@/components/QuizPassing/QuizPassing";
import {DailyTrainingCompletion} from "@/components/DailyTrainingCompletion/DailyTrainingCompletion";


export const RowThree = () => {
    return <div className="row-3">
        <MonthlyActivity></MonthlyActivity>
        <QuizPassing></QuizPassing>
        <DailyTrainingCompletion></DailyTrainingCompletion>
    </div>
}