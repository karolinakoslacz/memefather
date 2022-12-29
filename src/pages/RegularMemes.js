import React from "react";
import RegularMeme from "../components/RegularMeme";

const RegularMemes = ({ regularMemes, setRegularMemes, setHotMemes }) => {
    return (
      <>
        <h2 className="sectionTitle">
          regular . regular . regular . regular . regular . regular . regular .
          regular . regular . regular . regular
        </h2>
        {regularMemes.map((meme, index) => (
          <RegularMeme
            key={meme.id}
            src={meme.src}
            id={meme.id}
            setRegularMemes={setRegularMemes}
            setHotMemes={setHotMemes}
            title={meme.title}
            upvotes={meme.upvotes}
            downvotes={meme.downvotes}
          />
        ))}
      </>
    );
  };

  export default RegularMemes