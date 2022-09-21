import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { CgRuler } from "react-icons/cg";
import { GiPaintBucket } from "react-icons/gi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { data } from "./data";

export const ArtView = ({ currentId }: { currentId: number }) => {
  const [currentArt, setCurrentArt] = useState(data[currentId - 1]);
  const [favourite, setFavourite] = useState(false);

  const clickFavourite = () => {
    if (!favourite) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  };

  return (
    <div>
      <div>
        <button>
          <AiOutlineArrowLeft />
        </button>
        <button>
          <AiOutlineSearch />
        </button>

        <button onClick={clickFavourite}>
          {favourite && favourite ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </button>
      </div>
      <div>
        <h1>{currentArt.name}</h1>
        <h5>Art #{currentArt.id}</h5>
        <img src={currentArt.image_url} />
        <div>
          <h3>About</h3>
          <h4>{currentArt.about}</h4>
          <h5>
            <BsFillCalendarWeekFill /> {currentArt.year}{" "}
            <span>
              <CgRuler /> {currentArt.height}
            </span>{" "}
            <span>
              <GiPaintBucket /> {currentArt.artist}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};
