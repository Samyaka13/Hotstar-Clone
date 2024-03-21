import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
// import CHECK from './Components/CHECK'

import Slider from "./Components/Slider";
import Production from "./Components/Production";
import GenreMovieList from "./Components/GenreMovieList";
import Slider2 from "./Components/Slider2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="">
        <Slider />
      </div>
      <div>
        <Production />
      </div>
      <div className="absolute w-[full] overflow-auto bg-[#131520]">
        <GenreMovieList />
      </div>
      {/* <CHECK/> */}
    </div>
  );
}

export default App;
