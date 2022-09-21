import Question from "../image.png";

export interface Art {
  name: string;
  image_url?: string;
  id: number;
}

interface Cardprops {
  art: Art;
}
const CardComponent = ({ art }: Cardprops) => {
  const colors = [
    "#74CB48",
    "#F57D31",
    "#6493EB",
    "#A7B723",
    "#F9CF30",
    "#70559B",
  ];
  return (
    <div
      style={{
        border: `1px solid ${colors[(art.id - 1) % colors.length]}`,
        borderRadius: "8px",

        overflow: "hidden",
      }}
    >
      <div style={{ padding: " 4px 8px 0px 8px", marginBottom: "-4px" }}>
        <div className="art-id">Art {art.id}</div>
        <img
          src={art.image_url || Question}
          style={{
            width: "100%",
            objectFit: `${art.image_url ? "cover" : "contain"}`,
            height: "72px",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: colors[(art.id - 1) % colors.length],
        }}
      >
        <div className="art-title">{art.name}</div>
      </div>
    </div>
  );
};
export default CardComponent;
