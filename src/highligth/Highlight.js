import React, { useEffect, useState } from "react";
import "./highlight.css";
import Tmdb from "../Tmdb";
import Youtube from "react-youtube";

export default function Highlight({item}) {
  const [movieData, setMovieData] = useState({});
  const [movieTrailer, setMovieTrailer] = useState({});
  const [mediaTypeDetails, setMediaTypeDetails] = useState(<></>);
  const firstTrend = item;
  const movieID = firstTrend?.id;
  let mediaType = undefined
  if(item.release_date){mediaType = "movie"}
  else if(item.first_air_date){mediaType = "tv"}

  useEffect(() => {
    const loadData = async () => {
    let data = await Tmdb.getMovieDetails(movieID, mediaType);
    setMovieData(data);
    };
    loadData();
  }, [movieID]);

  useEffect(() => {
    const loadData = async () => {
      const data = await Tmdb.getMovieTrailer(movieID, mediaType);
      if (data) {
        setMovieTrailer(data);
      }
    };
    loadData();
  }, [movieID]);

  useEffect(() => {
    const genres = movieData.genres?.map((genre) => genre.name).join(", ");
    if (mediaType === "movie") {
      setMediaTypeDetails(
        <>
          <h2>{firstTrend.title}</h2>
          <h4>Genres: {genres}</h4>
          <h4>Description: {firstTrend.overview}</h4>
          <h4>User rating: {firstTrend.vote_average}</h4>
          <h4>Release Date: {firstTrend.release_date}</h4>
          <h4>Runtime: {movieData.runtime}min</h4>
        </>
      );
    } else if (mediaType === "tv") {
      setMediaTypeDetails(
        <>
          <h2>{firstTrend.name}</h2>
          <h4>Genres: {genres}</h4>
          <h4>Description: {firstTrend.overview}</h4>
          <h4>User rating: {firstTrend.vote_average}</h4>
          <h4>Release Date: {firstTrend.first_air_date}</h4>
          <h4>Seasons: {movieData.number_of_seasons}</h4>
          <h4>Number of episodes: {movieData.number_of_episodes}</h4>
        </>
      );
    }
  }, [firstTrend, mediaType, movieData]);

  if (!firstTrend) {
    return null;
  } else {
    return (
        <div className="trending-div">
          <div className="poster-description">
            <img
              className="trend-img"
              src={`http://image.tmdb.org/t/p/w300${firstTrend.poster_path}`}
            />
            <div className="trend-description">
              {mediaTypeDetails}
            </div>
          </div>
          <div className="div-player">
            {movieTrailer && movieTrailer.videos && (
              <Youtube
                className="youtube"
                videoId={movieTrailer.videos && movieTrailer.videos.results && movieTrailer.videos.results.find(
                    (vid) => vid.name === "Official Trailer" || "Official Trailer 1"
                  )?.key
                }
                origin="https://www.youtube.com/"
                autoplay={false}
              />
            )}
          </div>
        </div>
    );
  }
}
