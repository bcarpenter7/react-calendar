 import "./styles.css";
import DaysList from "./DaysList"
import CategoryList from "./CategoryList"
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
    return (
      <div className="App">
        <h1>React Calendar</h1>
        <div className="categories-div">
          <CategoryList categories={categories} />
        </div>
        <div className="calendar-div">
          <DaysList days={days} dates={dates} />
        </div>
      </div>
    );
  }