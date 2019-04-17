import React, { Component } from "react";
import Footer from "./footer";
import "./App.css";
import logops from "./resources/logo.svg";
import playbtn from "./resources/play.svg";
import pausebtn from "./resources/pause.svg";
import logopic from "./resources/logo.svg";
import spectrumpic from "./resources/spectrum.gif";
import spectrumNone from "./resources/spectrum-none.png";
import mutedbtn from "./resources/mute.svg";
import playingbtn from "./resources/playing.svg";
function App() {
  return (
    <div className="App">
      <div>
        <img src={logops} alt="HBR 103.5 Knock-Off Logo" className="ps-logo" />
        {/* Check state of 1.Playing, 2.Paused and 3.Buffering 4.Muted*/}
        <h3> Aligaku - Dasar Aku</h3>
      </div>
      <div>
        <img
          className="ps-mute-btn cursor-hand"
          src={false ? mutedbtn : playingbtn}
          alt="volume button"
          // onClick={this.toggleMuted}
        />
        <input
          type="range"
          min={0}
          max={10}
          step="any"
          value={2}
          // onChange={this.setVolume}
        />
        <label className="ps-right ps-margin">{(12 * 10).toFixed(1)}</label>
      </div>

      {/*The voice spectrum*/}
      {false ? (
        <img className="ps-spectrum" src={spectrumNone} alt="Voice spectrum" />
      ) : (
        <img
          className="ps-spectrum"
          src={true ? spectrumpic : spectrumNone}
          alt="Voice spectrum"
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
