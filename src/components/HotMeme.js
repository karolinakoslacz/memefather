import { useEffect, useState } from 'react'
import DefaultImage from '../assets/default-image.jpg';
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
const HotMeme = (props) => {
    const [upvote, setUpvote] = useState(null)
    const [downvote, setDownvote] = useState(null)
  
    useEffect(() => {
      setUpvote(props.upvotes)
      setDownvote(props.downvotes)
    }, [])    //ustawia początkową wartość upvotes i downvotes 
  
    useEffect(() => {
      // obsluzenie warunku poczatkowego, gdy upvote = null i downvote = null, warunek upvote - downvote < 5
      // jest spelniony, wiec element automatycznie jest usuwany z tablicy hotMemes
      //logika do usuwania mema z HotMeme do RegularMeme
      if(upvote !== null && downvote !== null && upvote - downvote < 5) {
        const currentMeme = {
          downvotes: downvote,
          upvotes: upvote,
          id: props.id,
          title: props.title,
          src: props.src
        }
        props.setHotMemes(currentHotMemes => currentHotMemes.filter(meme => meme.id !== props.id))
        props.setRegularMemes(currentRegularMemes => [...currentRegularMemes, currentMeme])
      }
    }, [upvote, downvote])
  
    const onUpvoteHandler = () => {
      setUpvote(upvote + 1)
    }
  
    const onDownvoteHandler = () => {
      setDownvote(downvote + 1)
    }
  
  
    return <div className="meme">
      <h1>{props.title}</h1>
      <img src={props.src || DefaultImage}/>
      <div className='votes'>
      Upvotes: {upvote} <button onClick={onUpvoteHandler}>
      <img src={like} alt=''/>
      </button>
      Downvotes: {downvote} <button onClick={onDownvoteHandler}>
      <img src={dislike} alt=''/>
      </button>
      </div>
    </div>
  }

  export default HotMeme