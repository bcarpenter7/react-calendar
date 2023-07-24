import "./DaysItem.css"
import { useState } from "react";

export default function DaysItem({date, idx, days, isActive}){
    const [itemActive, setItemActive] = useState(false)

    function handleClick(e){
        if(isActive.length > 0){

            if(itemActive.active == true && itemActive.color == isActive){
                setItemActive({
                    active: false,
                    color: "none"
                    }
                )
            } else {
                setItemActive({
                    active: true,
                    color: isActive
                    }
                )
            }
        }
    }

    return (
        <div onClick={handleClick}
        className={ itemActive.active ? ` item-div active-${itemActive.color}` : 'item-div'}
 >          
            <h2>{ days[idx % 7].name }</h2>
            <h2>{ date } </h2>
        </div>
    )
}