const offerWithPremium = {
  "bedrooms": 3,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Amsterdam`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatarUrl": `http://picsum.photos/90/90?r=1`,
    "id": 11,
    "isPro": true,
    "name": `Angelina`
  },
  "id": 1,
  "images": [`http://picsum.photos/260/200?r=1`, `http://picsum.photos/260/200?r=2`, `http://picsum.photos/260/200?r=3`],
  "isFavorite": false,
  "isPremium": true,
  "location": {
    "latitude": 52.3909553943508,
    "longitude": 4.85309666406198,
    "zoom": 8
  },
  "maxAdults": 4,
  "previewImage": `http://picsum.photos/260/200?r=1`,
  "price": 110,
  "rating": 4.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `apartment`
};

const offerWithoutPremium = {
  "bedrooms": 1,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Paris`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatarUrl": `http://picsum.photos/90/90?r=2`,
    "id": 22,
    "isPro": false,
    "name": `Ivan`
  },
  "id": 2,
  "images": [`http://picsum.photos/260/200?r=1`, `http://picsum.photos/260/200?r=2`, `http://picsum.photos/260/200?r=3`],
  "isFavorite": true,
  "isPremium": false,
  "location": {
    "latitude": 52.369553943508,
    "longitude": 4.85309666406198,
    "zoom": 8
  },
  "maxAdults": 1,
  "previewImage": `http://picsum.photos/260/200?r=2`,
  "price": 80,
  "rating": 2.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `room`
};

const offerWithFavourite = {
  "bedrooms": 2,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Hamburg`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatarUrl": `http://picsum.photos/90/90?r=3`,
    "id": 33,
    "isPro": false,
    "name": `Alex`
  },
  "id": 3,
  "images": [`http://picsum.photos/260/200?r=1`, `http://picsum.photos/260/200?r=2`, `http://picsum.photos/260/200?r=3`],
  "isFavorite": true,
  "isPremium": true,
  "location": {
    "latitude": 52.3909553943508,
    "longitude": 4.929309666406198,
    "zoom": 8
  },
  "maxAdults": 2,
  "previewImage": `http://picsum.photos/260/200?r=3`,
  "price": 20,
  "rating": 3.8,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `house`
};

const offerWithoutFavourite = {
  "bedrooms": 4,
  "city": {
    "location": {
      "latitude": 52.370216,
      "longitude": 4.895168,
      "zoom": 10
    },
    "name": `Cologne`
  },
  "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  "host": {
    "avatarUrl": `http://picsum.photos/90/90?r=4`,
    "id": 44,
    "isPro": false,
    "name": `Sergey`
  },
  "id": 4,
  "images": [`http://picsum.photos/260/200?r=1`, `http://picsum.photos/260/200?r=2`, `http://picsum.photos/260/200?r=3`],
  "isFavorite": false,
  "isPremium": true,
  "location": {
    "latitude": 52.3809553943508,
    "longitude": 4.939309666406198,
    "zoom": 8
  },
  "maxAdults": 3,
  "previewImage": `http://picsum.photos/260/200?r=4`,
  "price": 100,
  "rating": 5.0,
  "title": `Beautiful & luxurious studio at great location`,
  "type": `hotel`
};

const offers = [
  offerWithPremium,
  offerWithoutPremium,
  offerWithFavourite,
  offerWithoutFavourite
];

export {offers};
