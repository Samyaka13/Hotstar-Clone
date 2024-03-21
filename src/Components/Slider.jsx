import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import {
  HiArrowLongLeft,
  HiArrowLongRight,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then((resp) => {
        console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const sliderRight = () => {
    console.log("slider right clicked");
    elementRef.current.scrollLeft += screenWidth;
  };
  const sliderLeft = () => {
    console.log("Left");
    elementRef.current.scrollLeft -= screenWidth;
  };
  return (
    <div>
      <HiChevronRight
        className=" hidden md:block text-white text-[30px] right-0 absolute mt-[200px] cursor-pointer"
        onClick={sliderRight}
      />
      <HiChevronLeft
        className=" hidden md:block text-white text-[30px] absolute  mt-[200px] cursor-pointer"
        onClick={sliderLeft}
      />

      <div
        className="flex overflow-auto w-full scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={`${IMAGE_BASE_URL + item.backdrop_path}`}
            alt={`Movie ${index}`}
            className="mb-5 min-w-full md:h-[510px] md:object-cover m-50 object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in px-8 md:px-8"
          />
        ))}
      </div>
    </div>
  );
}
export default Slider;
