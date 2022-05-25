export type TrailType = {
  id: string;
  name: string;
  length: number;
  startLocation: string;
  endLocation: string;
  uploadDate: Date;
  rating: number;
};

export type TrailTypePost = {
  name: string;
  startLocation: string;
  endLocation: string;
  length: number;
};
