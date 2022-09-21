import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsTextRight } from "react-icons/bs";
import { CgRuler } from "react-icons/cg";
import { GiPaintBucket } from "react-icons/gi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { data } from "./data";
import "./Artdex.css";

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
    <div style={{ paddingTop: 20, padding: 10 }}>
      <div>
        <Link
          style={{ textDecoration: "none", color: "#000", paddingRight: 20 }}
          to={"/map"}
        >
          <AiOutlineArrowLeft size={30} />
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
          }}
          to={"/"}
        >
          <AiOutlineSearch size={30} />
        </Link>

        <Link to={""} onClick={clickFavourite} style={{ paddingLeft: 250 }}>
          {favourite && favourite ? (
            <IoMdHeart size={30} />
          ) : (
            <IoMdHeartEmpty size={30} />
          )}
        </Link>
      </div>
      <div>
        <div>
          <h1 style={{ textAlign: "left" }}>{currentArt.name}</h1>
          <h5>Art #{currentArt.id}</h5>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img style={{ width: 300 }} src={currentArt.image_url} />
        </div>
        <div style={{ marginBottom: "80px" }}>
          <h3>About</h3>
          <h4>{currentArt.about}</h4>
          <h5>
            <BsFillCalendarWeekFill /> {currentArt.year}{" "}
            <span>
              <CgRuler /> {currentArt.height}
            </span>
            <span>
              <GiPaintBucket /> {currentArt.artist}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};
