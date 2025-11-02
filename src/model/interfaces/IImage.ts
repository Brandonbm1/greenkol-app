export interface IImage {
  id: string;
  image: {
    filename: string;
    alt: string;
    url: string;
  };
  url?: string;
  alt?: string;
}

export interface IRender {
  url: string
  
}