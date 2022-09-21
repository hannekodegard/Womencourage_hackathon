type Data = {
  name: string;
  image_url?: string;
  id: number;
  artist?: string;
  artType?: string;
  about?: string;
  year?: number;
  height?: string;
};
export const data: Data[] = [
  {
    name: "Gutt på huske",
    image_url: "https://www.fineart.no/i/og/1016945-0.jpg",
    id: 1,
    artist: "Ståle Gerhardsen",
    artType: "Street art",
    about:
      "This artpiece is made by Ståle Gerhardsen, a norwegian graphical designer and street artist. He has several different pieces of art around Trondheim, and this person is a familiar part of his pieces.",
    year: 2018,
    height: "3 m",
  },
  {
    name: "Gutt på huske",
    image_url:
      "https://images.squarespace-cdn.com/content/v1/56ddc091b09f95fd0a61b7e2/1519896978572-F4H3JSMQKVV8NVDADB8W/GerhardsenKarlsen_staale_silketrykk_110.JPG?format=750w",
    id: 2,
    artist: "Ståle Gerhardsen",
    artType: "Street art",
    about:
      "This artpiece is made by Ståle Gerhardsen, a norwegian graphical designer and street artist. He has several different pieces of art around Trondheim, and this person is a familiar part of his pieces.",
    year: 2018,
    height: "3 m",
  },
  {
    name: "Nidarosdomen",
    image_url:
      "https://report2.datanova.com/NidarosdomenWebERP//images/webshoptemplate/images/1_1_0.jpg",
    id: 3,
  },
  {
    name: "Berlinmuren",
    image_url:
      "https://cdn.kunstkritikk.no/uploads/2015/11/IMG_0097-1150x767.jpg",
    id: 4,
  },
  {
    name: "Kristiansten festning",
    image_url:
      "https://visittrondheim.no/wp-content/uploads/2021/05/Kristiansten_IMG_5889_MykolaKsenofontov.jpg",
    id: 5,
  },
  { name: "Hovedbygget", id: 6 },
];
