import React from "react";
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

