import {Review} from "./_models/review";

export const REVIEWS: Review[] = [
  {id: 123, country: "USA", description: "This wine is great!",
  designation: "temp", points: 100, price: 22.30,
  province: "CA", region_1: "n/a", region_2: "n/a",
  taster_name:"Me", taster_twitter_handle:"elonmusk",
  variety: "Moscato", winery: "Local Vinyard",
    title: "Nicosia 2013 Vulkà Bianco (Etna)"},
  {
    id: 999, country: "USA", description: "This wine is okay!",
    designation: "temp", points: 50, price: 3.30,
    province: "CA", region_1: "n/a", region_2: "n/a",
    taster_name:"Me", taster_twitter_handle:"elonmusk",
    variety: "Sweet red", winery: "Local Vinyard",
    title: "Blah"},
  {
    id: 2, country: "France", description: "This wine is good!",
    designation: "temp", points: 80, price: 100,
    province: "IA", region_1: "n/a", region_2: "n/a",
    taster_name:"Me", taster_twitter_handle:"elonmusk",
    variety: "Sweet white", winery: "Vinyard X",
    title: "Nicosia 2013 Vulkà Bianco (Etna)"}
];
