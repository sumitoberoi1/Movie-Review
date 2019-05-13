import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";

class SpeechToTextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListening: false
    };
    this.onClickSpeech = this.onClickSpeech.bind(this);
  }
  componentDidMount() {
    this.props.resetTranscript();
    this.props.stopListening();
  }
  componentWillUnmount() {
    this.props.resetTranscript();
    this.props.abortListening();
  }
  onClickSpeech(event) {
    event.preventDefault();
    const {
      finalTranscript,
      onFinalTranscript,
      resetTranscript,
      startListening,
      stopListening
    } = this.props;
    if (!this.state.isListening) {
      resetTranscript();
      startListening();
    } else {
      stopListening();
      finalTranscript && onFinalTranscript(finalTranscript);
    }
    this.setState((state, _) => ({
      isListening: !state.isListening
    }));
  }

  render() {
    const { browserSupportsSpeechRecognition } = this.props;
    if (!browserSupportsSpeechRecognition) {
      // If the browser doesn't support speech, then return a disabled
      // button. This way if you run it in Firefox by accident there's a
      // hint that web-speech exists.
      return (
        <div>
            <button className="btn btn-primary mb-2 start-btn" disabled>
                <i class="fas fa-microphone" />
            </button>
        </div>
      );
    }
    return (
      <div>
        <button
          className="btn btn-primary mb-2 start-btn"
          onClick={this.onClickSpeech}
        >
          {this.state.isListening ? (
            <i class="fas fa-microphone-slash" />
          ) : (
            <i class="fas fa-microphone" />
          )}
        </button>
      </div>
    );
  }
}

export default SpeechRecognition({ autoStart: false })(SpeechToTextButton);
