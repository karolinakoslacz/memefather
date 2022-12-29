import { useEffect, useState } from 'react'
import DefaultImage from '../assets/default-image.jpg';
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

const RegularMeme = (props) => {
    const [upvote, setUpvote] = useState(0)
    const [downvote, setDownvote] = useState(0)
  
    useEffect(() => {
      setUpvote(props.upvotes)
      setDownvote(props.downvotes)
    }, [])
  
    useEffect(() => {
      if(upvote - downvote >= 5) {
        const currentMeme = {
          downvotes: downvote,
          upvotes: upvote,
          id: props.id,
          title: props.title,
          src: props.src
        }
        props.setRegularMemes(currentRegularMemes => currentRegularMemes.filter(meme => meme.id !== props.id))
        props.setHotMemes(currentHotMemes => [...currentHotMemes, currentMeme])
      }
    }, [upvote, downvote])
  
    const onUpvoteHandler = () => {
      setUpvote((upvote) => upvote + 1)
    }
  
    const onDownvoteHandler = () => {
      setDownvote((downvote) => downvote + 1)
    }
  
  
    return <div className="meme">
      <h1>{props.title}</h1>
      <img src={props.src || DefaultImage}/>
      <div className="votes">
      {upvote} <button onClick={onUpvoteHandler}>
      <img src={like} alt=''/>
      </button>
      <button onClick={onDownvoteHandler}>
      <img src={dislike} alt=''/>
      </button>
      {downvote}
      </div>
    </div>
  }

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

  export default RegularMeme