export interface restaurantData {
    "blurhash": string,
    "launch_date": string,
    "location": [
      number,
      number
    ],
    "name": string,
    "online": boolean,
    "popularity": number
}

export interface dataWrapper { 
  "title": string,
  "restaurants": restaurantData[] 
}

export interface refElement extends HTMLDivElement {
  current?:  {
      offsetWidth: number
      offsetHeight: number
  }
}


