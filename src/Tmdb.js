import axios from "axios";
import {useState,useEffect} from "react";
const API_KEY = '289c0c6aa3ba03d5ca9385e885b210ca';
const API_BASE = 'https://api.themoviedb.org/3';
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
  getHomeList: async () => {
    const trending = await axios.get(`${API_BASE}/trending/all/week?sort_by=popularity.desc&api_key=${API_KEY}`);
    const movies = await axios.get(`${API_BASE}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
    const series = await axios.get(`${API_BASE}/discover/tv?sort_by=popularity.desc&api_key=${API_KEY}`);
  
    return [
      {
        slug: 'trending',
        title: 'Trending',
        items: trending.data
      },
      {
        slug: 'movies',
        title: 'Movies',
        items: movies.data
      },
      {
        slug: 'series',
        title: 'Series',
        items: series.data
      }
    ];
  },
  

      getMoviesTvGenres: async (type, genres,title) => {
        const trending = await axios.get(`${API_BASE}/trending/${type}/week`, {
            params: {
              api_key: API_KEY,
              sort_by: "popularity.desc"
            },
          });

        const genre1 = await axios.get(`${API_BASE}/discover/${type}`, {
          params: {
            api_key: API_KEY,
            with_genres: genres[0],
            sort_by: "popularity.desc"
          },
        });
      
        const genre2 = await axios.get(`${API_BASE}/discover/${type}`, {
          params: {
            api_key: API_KEY,
            with_genres: genres[1],
            sort_by: "popularity.desc"
          },
        });
      
        const genre3 = await axios.get(`${API_BASE}/discover/${type}`, {
          params: {
            api_key: API_KEY,
            with_genres: genres[2],
            sort_by: "popularity.desc"
          },
        });
      
        const genre4 = await axios.get(`${API_BASE}/discover/${type}`, {
          params: {
            api_key: API_KEY,
            with_genres: genres[3],
            sort_by: "popularity.desc"
          },
        });
      
        const genre5 = await axios.get(`${API_BASE}/discover/${type}`, {
          params: {
            api_key: API_KEY,
            with_genres: genres[4],
            sort_by: "popularity.desc"
          },
        });
      
        const genre6 = await axios.get(`${API_BASE}/discover/${type}`, {
          params: {
            api_key: API_KEY,
            with_genres: genres[5],
            sort_by: "popularity.desc"
          },
        });
      
        return [
          {
                title: "Trending",
                items: trending.data
          },
          {
            title: title[0],
            items: genre1.data
          },
          {
            title: title[1],
            items: genre2.data
          },
          {
            title: title[2],
            items: genre3.data
          },
          {
            title: title[3],
            items: genre4.data
          },
          {
            title: title[4],
            items: genre5.data
          },
          {
            title: title[5],
            items: genre6.data
          },
        ];
      },
      
    getTrending: async () =>{
        let data = await axios.get(`${API_BASE}/trending/all/week`,{
            params:{
                api_key: API_KEY
            }
        })
        return data.data;
    },

    getMovieDetails: async (movie_id, mediaType) => {
      const response = await axios.get(`${API_BASE}/${mediaType}/${movie_id}?api_key=${API_KEY}`);
      return response.data;
    },

    getMovieTrailer: async (movie_id, mediaType) =>{
      let data = await axios.get(`${API_BASE}/${mediaType}/${movie_id}`,{
        params:{
            api_key: API_KEY,
            append_to_response: "videos"
        }
      })
      return data.data;
    },

    getSearchList: async (searchInput) =>{
        let data = await axios.get(`${API_BASE}/search/multi`,{
            params:{
                api_key: API_KEY,
                query: searchInput
            }
        })
        return data.data;
    }
}