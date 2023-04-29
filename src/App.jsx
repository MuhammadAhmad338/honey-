import React from "react"
import Header from "./Components/header"
import Home from "./Components/home"
import Container from "./Components/container"
import AboutUs from "./Components/about-us"
import OurShop from "./Components/ourShop"
import Reviews from "./Components/reviews"
import Contactus from "./Components/contactus";
import ScrollTop from "./Components/scrollTop.jsx";

function App() {
  return (
    <React.Fragment>
        <Header />
        <Home />
        <Container />
        <AboutUs />
        <OurShop />
        <Reviews />
        <Contactus />
        <ScrollTop />
    </React.Fragment>
  )
}

export default App
