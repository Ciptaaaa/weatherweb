import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  // console.log(weather)

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-transparent w-[15rem] overflow-hidden shadow-none rounded flex items-center p-2 gap-2">
          <div className="flex rounded-full border-2 border-black overflow-hidden max-w-md mx-auto">
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  // sumit the form
                  submitCity();
                }
              }}
              type="text"
              placeholder="Search city"
              className="focus:outline-none w-full text-[#212121] text-lg  outline-none bg-white px-3 py-3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="flex items-center justify-center  px-6 bg-white"
              onClick={submitCity}
            >
              <img
                src={search}
                alt="search"
                className="w-[1.5rem] h-[1.5rem] bg-white "
              />
            </button>
          </div>
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
    
  );
}

export default App;
