import "./DaysItem.css"





export default function DaysItem({date, idx, days}){
    return (
        <div className="item-div">
            <h2>{ days[idx % 7].name }</h2>
            <h2>{ date } </h2>
        </div>
    )
}