import { useState } from "react";
import Banner from "../Components/Banner/Banner";
import Row from "../Components/Row/Row";
import requests from "../Request";
import { NavBar } from "./NavBar";

const HomePage = () => {
  const [largeRow, isLargeRow] = useState(true);
  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <>
        <Row
          title="CinemCrown Movies"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Top Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title=" Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </>
    </>
  );
};

export default HomePage;
