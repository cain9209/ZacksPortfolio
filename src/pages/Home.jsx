import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Slideshow from "../components/SlideShow/SlideShow";

const Home = () => {
    return (
        <div className="Header">
            <Header />
            <Slideshow />
        </div>
    );
};

export default Home;
