import React from 'react';
import PlaceList from '../../../user/components/PlaceList/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Dar Slah',
    description:
      'El Mrabet is one of the oldest cafes in the Tunis medina, the foundation dates back to the 17th century, more precisely in 1630.',
    imageUrl: 'https://www.darslah.com/wp-content/uploads/minis-briks.jpg',
    address: 'rue de la kasbah la medina',
    location: {
      lat: 36.79886306526196,
      lng: 10.171090724639619,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Dar Jeld',
    description:
      'El Mrabet is one of the oldest cafes in the Tunis medina, the foundation dates back to the 17th century, more precisely in 1630.',
    imageUrl: 'https://www.darslah.com/wp-content/uploads/kabkabou-thon.jpg',
    address: 'rue de la kasbah la medina',
    location: {
      lat: 36.79886306526196,
      lng: 10.171090724639619,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
