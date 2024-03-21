import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import Card from "./Card";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HorizontalMovieCard from "./HorizontalMovieCard";
const screenWidth = window.innerWidth;
function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const cardRef = useRef();
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const cardRight = (element) => {
    element.scrollLeft += 500;
  };
  const cardLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div>
      <div className="flex text-[30px] ">
        <HiChevronLeft
          className={`hidden md:block absolute ${index_%3==0?'mt-[70px]':'mt-[145px]'} left-5 z-20 hover:cursor-pointer`}
          onClick={() => cardLeft(cardRef.current)}
        />
        <HiChevronRight
          className={`hidden md:block absolute ${index_%3==0?`mt-[70px]`:`mt-[145px]`} right-5 z-20 hover:cursor-pointer`}
          onClick={() => cardRight(cardRef.current)}
        />
      </div>
      <div
        className="flex overflow-auto gap-8 scrollbar-hide scroll-smooth pt-5 pb-5 px-3"
        ref={cardRef}
      >
        {movieList.map((item, index) => (
          <div className="flex overflow-auto scrollbar-hide">
            {index_ % 3 == 0 ? (
              <HorizontalMovieCard movie={item} />
            ) : (
              <Card movie={item} className = "z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieList;
