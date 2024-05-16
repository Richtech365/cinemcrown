import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Axios from "../../Axios";
import "./Navstyle.css";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <>
      <div className="text-white flex  custom-scrollbar overflow-y-hidden overflow-x-scroll p-5">
        <Text>{title}</Text>
        {movies.map((movie) => (
          <img
            className="max-h-28 p-0"
            key={movies.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </>
  );
};

export default Row;
