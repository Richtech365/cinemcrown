import { Box, Button, Flex } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import requests from "../../Request";
import Axios from "../../Axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomIndex]);
      return request;
    }
    getData();
  }, [requests.fetchNetflixOriginals]);

  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Box
      position={"relative"}
      height={"448"} // Change h to height
      width={"100%"}
      top={10}
      color={"white"}
      objectFit={"contain"}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Box ml={"30px"} pt={"200px"} height={"190px"} borderBottomRadius={10}>
        <h1 className="text-4xl font-extrabold pb-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <Box>
          {" "}
          <Flex p={0}>
            <Button colorScheme="blue">Watch Now</Button>{" "}
            <Button ml={2} colorScheme="pink">
              <FaRegHeart />
            </Button>
          </Flex>
          <Flex className=" text-sm max-w-80  h-8">
            <span>
              <p>{movie?.first_air_date}</p>
            </span>
            <span>{truncate(movie?.overview, 150)}</span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
