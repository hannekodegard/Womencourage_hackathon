import { AiFillCiCircle } from "react-icons/ai";
import { events, data } from "./data";
import Eivind from "./Eivind.png";

const Events = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Events</h1>
      <div>
        {events.map((event) => (
          <div
            style={{
              border: "3px solid black",
              width: "100%",
              margin: "10px 0",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
              }}
              src={
                data.filter((art) => art.id == event.id)[0].image_url || Eivind
              }
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0",
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  marginTop: "-5px",
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                {data.filter((art) => art.id == event.id)[0].name}
                {data.filter((art) => art.id == event.id)[0].image_url ===
                  undefined && (
                  <div>
                    <AiFillCiCircle color="red" />
                  </div>
                )}
              </div>
              <div
                style={{
                  marginTop: "-5px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {event.date}
              </div>
              <div
                style={{
                  marginTop: "-5px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Events;
