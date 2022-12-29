import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { memeArray } from "./memes";
import flame from "./assets/flame.png";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Banner from "./components/Banner";
import HomePage from "./pages/HomePage";
import HotMemes from "./pages/HotMemes";
import RegularMemes from "./pages/RegularMemes"; 

function App() {
  const [regularMemes, setRegularMemes] = useState([]);
  const [hotMemes, setHotMemes] = useState([]);

  const { pathname } = useLocation()

  useEffect(() => {
    const filteredHotMemes = memeArray.filter(
      (meme) => meme.upvotes - meme.downvotes > 5
    );
    const filteredRegularMemes = memeArray.filter(
      (meme) => meme.upvotes - meme.downvotes < 5
    );
    setHotMemes(filteredHotMemes);
    setRegularMemes(filteredRegularMemes);
  }, []);

  return (
    <div className="App">
      <Banner />
      
        <div className="navigation">
          <button className={`welcome ${pathname === '/' && 'active'}`}>
          <Link to="/">Welcome</Link>
          </button>
          <Link to="/hot">
            <button className={`hotClick ${pathname === '/hot' && 'active'}`}>
              <img src={flame} alt="" />
              Hot
              <img src={flame} alt="" />
            </button>
          </Link>
          <Link to="/regular">
            <button className={`regClick ${pathname === '/regular' && 'active'}`}>Regular</button>
          </Link>
        </div>
        <Routes>
          <Route
            path="/hot"
            element={
              <HotMemes
                hotMemes={hotMemes}
                setRegularMemes={setRegularMemes}
                setHotMemes={setHotMemes}
              />
            }
          />
          <Route
            path="/regular"
            element={
              <RegularMemes
                regularMemes={regularMemes}
                setRegularMemes={setRegularMemes}
                setHotMemes={setHotMemes}
              />
            }
          />
          <Route path="/" element={<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;
