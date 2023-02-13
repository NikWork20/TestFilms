import axios from 'axios';

export const getMoreFilms = async (page: number) => {
  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?type=ALL&ratingFrom=8&ratingTo=10&yearFrom=2022&yearTo=2024&page=${page}`,
      {
        headers: {
          'X-API-KEY': '55247b0c-e9f9-41ea-baba-6dbf6f82bcb4',
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data.items;
  } catch (e) {
    console.log(e);
  }
};
