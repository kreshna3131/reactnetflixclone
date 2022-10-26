import React from "react"
import Header from "./Header"
import Footer from "./Footer"
// import ListsOfMovies from "../movieslist/ListsOfMovies"
import ListsOfMovies from "../movielist/ListsOfMovies"
import Welcome from "react-welcome-page"

const Home = () => {
  return (
    <div>
      <Welcome
        loopDuration={4000}
        data={[
          {
            image: require("./images/applogo3.png"),
            imageAnimation: "zoomIn",
            backgroundColor: "black",
            // textAnimation: "flip",
            //textColor: '#cc0000',
            text: "",
          },
        ]}
      />
      <Header />

      <ListsOfMovies />
      <Footer />
    </div>
  )
}

export default Home
