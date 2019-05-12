import React from "react";
<<<<<<< HEAD
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  if (movies) {
    return (
      <div className="mb-5 mt-5">
        {movies.map(movie => (
          <Movie key={movie._id} {...movie} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default MovieList;
=======
import movies from "../data";
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'



const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const MovieList = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      
    <div>
    <div>
      

      <input type="text" value={transcript} placeholder="Search.." size="55" id="search"/> 
      <button type="submit"><i className="fa fa-search" ></i></button>
      <button  type="reset" value="Reset" id="mic" onClick={{resetTranscript} }><i className="fa fa-microphone"></i></button>
      <button>Start new test</button>
    </div>

    
  </div>
    </div>
  );
};

  
    
  

MovieList.propTypes = propTypes;

export default SpeechRecognition(MovieList);

>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
