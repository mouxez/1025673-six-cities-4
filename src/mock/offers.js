const offers = [
  {
    id: 1,
    isPremium: true,
    imgSrc: `http://picsum.photos/260/200?r=1`,
    imgDescription: `Some photo description`,
    price: 100,
    isBookmarked: false,
    title: `Some place description`,
    placeType: `Apartment`,
    rating: `4.0`,
    photoCollection: [
      `http://picsum.photos/260/200?r=1`,
      `http://picsum.photos/260/200?r=1`,
      `http://picsum.photos/260/200?r=1`,
      `http://picsum.photos/260/200?r=1`,
      `http://picsum.photos/260/200?r=1`,
      `http://picsum.photos/260/200?r=1`
    ],
    bedroomsCount: 3,
    placeCapacity: 4,
    facilities: [
      `Wi-Fi`,
      `Cabel TV`,
      `Dishwasher`
    ],
    host: {
      hostName: `Alex`,
      avatarSrc: `http://picsum.photos/90/90?r=1`,
      isSuper: true,
    },
    locationDescription: [`Some location description #1`, `Some location description #2`],
  },
  {
    id: 2,
    isPremium: false,
    imgSrc: `http://picsum.photos/260/200?r=2`,
    imgDescription: `Some photo description`,
    price: 70,
    isBookmarked: true,
    title: `Some place description`,
    placeType: `Apartment`,
    rating: `4.0`,
    photoCollection: [
      `http://picsum.photos/260/200?r=2`,
      `http://picsum.photos/260/200?r=2`,
      `http://picsum.photos/260/200?r=2`,
      `http://picsum.photos/260/200?r=2`,
      `http://picsum.photos/260/200?r=2`,
      `http://picsum.photos/260/200?r=2`
    ],
    bedroomsCount: 3,
    placeCapacity: 4,
    facilities: [
      `Wi-Fi`,
      `Kitchen`,
      `Cabel TV`,
      `Dishwasher`,
      `Parking`
    ],
    host: {
      hostName: `Lena`,
      avatarSrc: `http://picsum.photos/90/90?r=1`,
      isSuper: true,
    },
    locationDescription: [`Some location description #1`, `Some location description #2`],
  },
  {
    id: 3,
    isPremium: false,
    imgSrc: `http://picsum.photos/260/200?r=3`,
    imgDescription: `Some photo description`,
    price: 90,
    isBookmarked: true,
    title: `Some place description`,
    placeType: `Room`,
    rating: `4.0`,
    photoCollection: [
      `http://picsum.photos/260/200?r=3`,
      `http://picsum.photos/260/200?r=3`,
      `http://picsum.photos/260/200?r=3`,
      `http://picsum.photos/260/200?r=3`,
      `http://picsum.photos/260/200?r=3`,
      `http://picsum.photos/260/200?r=3`
    ],
    bedroomsCount: 3,
    placeCapacity: 4,
    facilities: [
      `Kitchen`,
      `Cabel TV`,
      `Dishwasher`
    ],
    host: {
      hostName: `John`,
      avatarSrc: `http://picsum.photos/90/90?r=1`,
      isSuper: false,
    },
    locationDescription: [`Some location description #1`, `Some location description #2`],
  },
  {
    id: 4,
    isPremium: true,
    imgSrc: `http://picsum.photos/260/200?r=4`,
    imgDescription: `Some photo description`,
    price: 120,
    isBookmarked: false,
    title: `Some place description`,
    placeType: `House`,
    rating: `4.0`,
    photoCollection: [
      `http://picsum.photos/260/200?r=4`,
      `http://picsum.photos/260/200?r=4`,
      `http://picsum.photos/260/200?r=4`,
      `http://picsum.photos/260/200?r=4`,
      `http://picsum.photos/260/200?r=4`,
      `http://picsum.photos/260/200?r=4`
    ],
    bedroomsCount: 3,
    placeCapacity: 4,
    facilities: [
      `Wi-Fi`,
      `Kitchen`,
      `Cabel TV`,
      `Dishwasher`,
      `Pool`
    ],
    host: {
      hostName: `Ivan`,
      avatarSrc: `http://picsum.photos/90/90?r=1`,
      isSuper: true,
    },
    locationDescription: [`Some location description #1`, `Some location description #2`],
  },
  {
    id: 5,
    isPremium: true,
    imgSrc: `http://picsum.photos/260/200?r=5`,
    imgDescription: `Some photo description`,
    price: 40,
    isBookmarked: false,
    title: `Some place description`,
    placeType: `Hotel`,
    rating: `4.0`,
    photoCollection: [
      `http://picsum.photos/260/200?r=5`,
      `http://picsum.photos/260/200?r=5`,
      `http://picsum.photos/260/200?r=5`,
      `http://picsum.photos/260/200?r=5`,
      `http://picsum.photos/260/200?r=5`,
      `http://picsum.photos/260/200?r=5`
    ],
    bedroomsCount: 3,
    placeCapacity: 4,
    facilities: [
      `Wi-Fi`,
      `Kitchen`,
      `Cabel TV`,
      `Dishwasher`,
      `Sea view`
    ],
    host: {
      hostName: `Elly`,
      avatarSrc: `http://picsum.photos/90/90?r=1`,
      isSuper: true,
    },
    locationDescription: [`Some location description #1`, `Some location description #2`],
  },
];

export {offers};
