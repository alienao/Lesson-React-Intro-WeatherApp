import "./App.css";
import sunny from "./images/01.svg";
import halfSunny from "./images/05.svg";
import rainy from "./images/09.svg";
// import sunnyRainy from "./images/17.svg";

const weatherPredictions = [
  {
    weekDay: "Monday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    weekDay: "Tuesday",
    imgURL: halfSunny,
    temp: "32C",
  },
  {
    weekDay: "Wednesday",
    imgURL: rainy,
    temp: "35C",
  },
  {
    weekDay: "Thursday",
    imgURL: rainy,
    temp: "45C",
  },
  {
    weekDay: "Friday",
    imgURL: rainy,
    temp: "36C",
  },
  {
    weekDay: "Saturday",
    imgURL: sunny,
    temp: "37C",
  },
  {
    weekDay: "Sunday",
    imgURL: halfSunny,
    temp: "39C",
  },
];
const allDays = weatherPredictions.map((el) => {
  return (
    <div className="weekDays" key={el.weekDay}>
      <p className="WeekDay">{el.weekDay}</p>
      <img className="image" src={el.imgURL} alt="day" />
      <p className="temp">{el.temp}</p>
    </div>
  );
});

function App() {
  return <div className="App">{allDays}</div>;
}

export default App;
