 import "./styles.css";
import DaysList from "./DaysList"
import { useState } from "react";
  export default function App() {

    const days = [
      {
        name: "Sunday"
      },
      {
        name: "Monday"
      },
      {
        name: "Tuesday"
      },
      {
        name: "Wednesday"
      },
      {
        name: "Thursday"
      },
      {
        name: "Friday"
      },
      {
        name: "Saturday"
      },
    ]

    // The following creates an array of numbers from [1..28]
    const dates = Array.from({length: 28}, (x, i) => i + 1)

    const categories = [
      {
        name: "Holiday"
      },
      {
        name: "Work"
      },
      {
        name: "Errands"
      },
      {
        name: "Sick"
      }
    ]

    const [isActive, setIsActive] = useState("")

    function handleCategoryClick(e, idx){
            e.preventDefault()
            setIsActive(e.target.id)
            console.log({isActive})
    }



    return (
      <div className="App">
        <h1>React Calendar</h1>
        
        <div className="categories-div">
            <div className="list-div-categories">
              { categories.map((c, idx) => (
                      <div id={idx}
                      className={ 
                          isActive == idx ? `active item-div-category item-${idx}` :
                          ` item-div-category item-${idx}`
                      }
                      onClick={ handleCategoryClick}
                      >
                          <h2>{ c.name }</h2>
                      </div>
              
                  ))
                  }
            </div> 


          {/* <CategoryList categories={categories} /> */}
        </div>
        <div className="calendar-div">
          <DaysList days={days} dates={dates} isActive={isActive} />
        </div>
      </div>
    );
  }