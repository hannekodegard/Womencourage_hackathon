type Data = {
  name: string;
  image_url?: string;
  id: number;
  lat: number;
  lon: number;
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
    lat: 63.425777492431074,
    lon: 10.403288512393186,
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
    lat: 63.425777492431074,
    lon: 10.403288512393186,
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
    lat: 63.42695796747913,
    lon: 10.39692495661475,
  },
  {
    name: "Berlinmuren",
    image_url:
      "https://cdn.kunstkritikk.no/uploads/2015/11/IMG_0097-1150x767.jpg",
    id: 4,
    lat: 63.43533883000194,
    lon: 10.415198841143004,
  },
  {
    name: "Kristiansten festning",
    image_url:
      "https://visittrondheim.no/wp-content/uploads/2021/05/Kristiansten_IMG_5889_MykolaKsenofontov.jpg",
    id: 5,
    lat: 63.426971988504896,
    lon: 10.41064577116484,
  },
  {
    name: "Hovedbygget",
    id: 6,
    lat: 63.41959060053063,
    lon: 10.402025454636927,
  },
  {
    name: "Munkholmen",
    id: 7,
    lat: 63.4507536933257,
    lon: 10.382670062965888,
  },
  {
    name: "Tyholttårnet",
    id: 8,
    lat: 63.422596003161836,
    lon: 10.431890455824188,
  },
  {
    name: "Eivind",
    id: 9,
    lat: 63.422532993940216,
    lon: 10.395377708615088,
  },
];

export const events = [
  { id: 9, date: "Today", time: "17:00" },
  { id: 2, date: "Tomorrow", time: "18:30" },
  { id: 3, date: "23/09/22", time: "19:00" },
];
