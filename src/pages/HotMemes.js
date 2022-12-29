import React from 'react'
import HotMeme from "../components/HotMeme";

const HotMemes = ({ hotMemes, setRegularMemes, setHotMemes }) => {
  return (
    <>
      <h2 className="sectionTitle">
        hot . hot . hot . hot . hot . hot . hot . hot . hot . hot . hot . hot .
        hot . hot . hot . hot . hot . hot . hot . hot{" "}
      </h2>
      {hotMemes.map((meme, index) => (
        <HotMeme
          key={meme.id}
          id={meme.id}
          src={meme.src}
          title={meme.title}
          setRegularMemes={setRegularMemes}
          setHotMemes={setHotMemes}
          upvotes={meme.upvotes}
          downvotes={meme.downvotes}
        />
      ))}
    </>
  );
};

export default HotMemes