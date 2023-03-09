import axios from 'axios';

export const fetchMovies = async (searchTerm) => {
  const res = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: 'a4daa08f',
      s: searchTerm,
    },
  });

  return res.data.Search;
};

export const fetchMovie = async (id) => {
  const res = await axios.get(`http://www.omdbapi.com/`, {
    params: {
      apikey: 'a4daa08f',
      i: id,
    },
  });
  return res.data;
};
