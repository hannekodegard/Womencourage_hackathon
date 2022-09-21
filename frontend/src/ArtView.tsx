import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsTextRight } from "react-icons/bs";
import { CgRuler } from "react-icons/cg";
import { GiPaintBucket } from "react-icons/gi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
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
      <div style={{ marginTop: 15 }}>
        <Link
          style={{ textDecoration: "none", color: "#000", margin: 10 }}
          to={"/artdex"}
        >
          <AiOutlineArrowLeft />
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#000", margin: 5 }}
          to={"/artdex"}
        >
          <AiOutlineSearch />
        </Link>

        <Link
          style={{
            textDecoration: "none",
            color: "#000",
            justifyContent: "right",
            margin: 200,
          }}
          to={""}
          onClick={clickFavourite}
        >
          {favourite && favourite ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </Link>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <h1>{currentArt.name}</h1>
          <h5>Art #{currentArt.id}</h5>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <img src={currentArt.image_url} />
        </div>
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
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
