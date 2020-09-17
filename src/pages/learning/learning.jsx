import React, { useState } from "react";
import _ from "lodash";
import "../../App.css";
import gallery1 from "../../assets/gallery-1.jpg";
import playAudio from "../../utils/playAudio";

const Learning = () => {
  const [gifNumber, setGifNumber] = useState(0);

  function handleCharacterClick(name) {
    playAudio(name);
    showGif(name);
  }

  function showGif(name) {
    setGifNumber(name);
  }

  return (
    <React.Fragment>
      <div className="App mt-3 md:mt-0 overflow-hidden ">
        <h1 className="--gradient text-2xl md:text-5xl font-bold leading-tight text-indigo-800">
          Hiragana
        </h1>
        <span className="italic text-gray-600">
          Click the item you want to learn. And make sure speaker is on.
        </span>
        <div className="container m-auto ">
          <div
            className="relative w-full h-auto m-auto mt-3 --center"
            style={{ zIndex: 99 }}
          >
            {_.range(1, 47).map((item, index) => {
              return (
                <React.Fragment key={item}>
                  <img
                    alt={item}
                    src={require(`../../../public/data/characters/${item}.png`)}
                    onClick={() => handleCharacterClick(item)}
                    title="Click to listen"
                    className="inline-block border p-2 w-16 md:w-20 cursor-pointer"
                  />
                  {(index + 1) % 5 === 0 && <br />}
                </React.Fragment>
              );
            })}
            {/* gif */}
            <div className="absolute top-0">
              {gifNumber > 0 && (
                <img
                  alt={gifNumber}
                  src={require(`../../../public/data/characters/gifs/${gifNumber}.gif`)}
                  className="fixed right-0 w-32 transform -translate-x-80 border border-pink-300 shadow-lg"
                />
              )}
            </div>
            {/* end gif */}
          </div>
        </div>
      </div>
      <div
        className="fixed w-full bottom-0 text-center mb-1 md:block hidden"
        style={{ zIndex: -1 }}
      >
        <p className="italic text-gray-500 text-sm">
          Hiragana - Version 1 <br />
          Practice your writing with digital teacher. <br />
        </p>
        <p className="italic text-gray-500 text-xs">
          &#169; mr.htetphyonaing@gmail.com
        </p>
      </div>
      <img
        src={gallery1}
        alt="Abstract"
        className="fixed bottom-0 opacity-10"
        style={{ zIndex: -10 }}
      />
      <svg
        className="bottom-0 hidden md:block fixed"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ zIndex: -5 }}
      >
        <path
          fill="#f3f4f5"
          fillOpacity="0.8"
          d="M0,160L24,165.3C48,171,96,181,144,202.7C192,224,240,256,288,256C336,256,384,224,432,229.3C480,235,528,277,576,288C624,299,672,277,720,245.3C768,213,816,171,864,133.3C912,96,960,64,1008,64C1056,64,1104,96,1152,138.7C1200,181,1248,235,1296,213.3C1344,192,1392,96,1416,48L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default Learning;
