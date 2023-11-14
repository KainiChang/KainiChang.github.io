import React from 'react';
import Gallery from 'react-photo-gallery';
import Piece1 from '../images/trip.jpg';
import Piece2 from '../images/hiking.jpg';
import Piece3 from '../images/cook.jpg';
import Piece4 from '../images/dog.jpg';
import Piece5 from '../images/hair.jpg';
import Piece6 from '../images/kaini6.png';
import Piece7 from '../images/kaini7.png';
import Piece8 from '../images/kaini8.png';
import Piece9 from '../images/kaini9.png';
const photos = [
  {
    src: Piece1,
    width: 1,
    height: 1,
    title: 'My Passion for Art',
    description: 'I love visiting art galleries and museums.'
  },
  {
    src: Piece2,
    width: 1,
    height: 1,
    title: 'My Passion for sport',
    description: 'I love visiting art galleries and museums.'
  },
  {
    src: Piece3,
    width: 1,
    height: 1,
    title: 'My Passion for Cooking',
    description: 'I love visiting art galleries and museums.'
  },
  // ... more photos with titles and descriptions
  { 
    src: Piece4,
    width: 1,
    height: 1,
    title: 'My Passion for Art',
    description: 'I love visiting art galleries and museums.'
  },
  {
    src: Piece5,
    width: 1,
    height: 1,
    title: 'My Passion for sport',
    description: 'I love visiting art galleries and museums.'
  },
  {
    src: Piece6,
    width: 1,
    height: 1,
    title: 'My Passion for Cooking',
    description: 'I love visiting art galleries and museums.'
  },
  
];

const MyGallery = () => (
  <Gallery photos={photos} renderImage={({ photo, index }) => (
    <div key={index}>
      <img src={photo.src} alt={`Photo ${index}`} width={photo.width} height={photo.height} />
      <p>{photo.title}</p>
    </div>
  )} />
);

export default MyGallery;
