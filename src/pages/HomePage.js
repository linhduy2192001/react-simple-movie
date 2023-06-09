import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Now Playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
