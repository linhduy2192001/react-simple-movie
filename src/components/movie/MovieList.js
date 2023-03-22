import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher, tmdbAPI } from "../../config";
import useSWR from "swr";
import MovieCard from "./MovieCard";

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
