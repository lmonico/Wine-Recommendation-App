export class Review{
  _id: number;
  points: number;
  title: string;
  description: string;
  taster_name: string;
  taster_twitter_handle: string;
  price: number;
  designation: string;
  variety: string;
  region_1: string;
  region_2: string;
  province: string;
  country: string;
  winery: string;
  id: number;
  recommendations: Review[];
}
