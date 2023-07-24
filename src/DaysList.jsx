import DaysItem from "./DaysItem"
import "./DaysList.css"

export default function DaysList({days, dates, isActive}){
    return (
        <div className="list-div">
        {
            dates.map((d, idx) => (
                <DaysItem date={d} idx={idx} days={days} isActive={isActive}/>
            ))
        }
        </div>
    )
}