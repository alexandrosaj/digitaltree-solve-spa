import heroChairs from '../assets/images/01-hero-chairs.jpg'
import modernChair from '../assets/images/02-featured-modern-chair.jpg'
import elegantLamp from '../assets/images/03-featured-elegant-lamp.jpg'
import blackChair from '../assets/images/04-featured-black-chair.jpg'
import solveBackground from '../assets/images/05-solve-background-with-circle-imgs.jpg'
import roomOslo from '../assets/images/06-room-oslo.jpg'
import roomNewYork from '../assets/images/07-room-new-york.jpg'
import roomLisbon from '../assets/images/08-room-lisbon.jpg'
import storeHamburg from '../assets/images/09-store-hamburg.jpg'
import storeLisbon from '../assets/images/10-store-lisbon.jpg'
import osloHeroV1 from '../assets/images/11-room-oslo-hero-v1.jpg'
import roomHeroButton from '../assets/images/12-room-oslo-hero-button.jpg'
import nextRoomNewYork from '../assets/images/13-next-room-new-york.jpg'
import osloHeroV2 from '../assets/images/14-room-oslo-hero-v2.jpg'
import nextRoomLisbon from '../assets/images/15-next-room-lisbon.jpg'

export const images = {
  heroChairs,
  solveBackground,
  osloHeroV1,
  osloHeroV2,
  roomHeroButton,
  nextRoomNewYork,
  nextRoomLisbon,
}

export const products = [
  {
    id: 'modern-chair',
    title: 'Modern Chair',
    price: '$ 249.00 USD',
    image: modernChair,
    alt: 'Yellow modern chair against a warm neutral wall',
    badge: 'New',
  },
  {
    id: 'elegant-lamp',
    title: 'Elegant Lamp',
    price: '$ 129.00 USD',
    image: elegantLamp,
    alt: 'Copper pendant lamps hanging against a grey wall',
  },
  {
    id: 'black-chair',
    title: 'Black Chair',
    price: '$ 199.00 USD',
    image: blackChair,
    alt: 'Black dining chair beside a dark floor lamp',
  },
]

export const rooms = [
  {
    slug: 'oslo',
    title: 'Oslo',
    image: roomOslo,
    alt: 'Bright Scandinavian lounge with plants, armchairs and soft curtains',
  },
  {
    slug: 'new-york',
    title: 'New York',
    image: roomNewYork,
    alt: 'Minimal room scene with plants, a garment rack and diffused daylight',
  },
  {
    slug: 'lisbon',
    title: 'Lisbon',
    image: roomLisbon,
    alt: 'Warm lounge with mustard sofa and patterned cushions',
  },
]


export const roomSinglePages = {
  oslo: {
    title: 'Oslo',
    heroImage: osloHeroV1,
    heroAlt: 'Bright Scandinavian lounge with black armchairs, sheer curtains and a cream rug',
    nextImage: nextRoomNewYork,
    nextAlt: 'New York room preview with plant, garment rail and soft window light',
    nextRoute: '/rooms/new-york',
  },
  'new-york': {
    title: 'Oslo',
    heroImage: osloHeroV2,
    heroAlt: 'Minimal interior with a potted plant, garment rack, hat and shoes by the window',
    nextImage: nextRoomLisbon,
    nextAlt: 'Lisbon room preview with a mustard sofa and warm interior lighting',
    nextRoute: '#top',
  },
  lisbon: {
    title: 'Oslo',
    heroImage: osloHeroV2,
    heroAlt: 'Minimal interior with a potted plant, garment rack, hat and shoes by the window',
    nextImage: nextRoomLisbon,
    nextAlt: 'Lisbon room preview with a mustard sofa and warm interior lighting',
    nextRoute: '/rooms/oslo',
  },
} as const

export const stores = [
  {
    city: 'Hamburg',
    address: 'SÃ¸lve Store,\n22765 Hamburg',
    image: storeHamburg,
    alt: 'Modern interior lounge area in Hamburg store',
  },
  {
    city: 'Lisbon',
    address: 'SÃ¸lve Store,\n1049 Lisbon',
    image: storeLisbon,
    alt: 'Street-facing store entrance in Lisbon',
  },
]

export const footerColumns = [
  {
    title: 'SÃ¸lve',
    links: ['Home', 'Rooms', 'Journal', 'Contact'],
  },
  {
    title: 'Shop',
    links: ['Home', 'Rooms', 'Lookbook', 'FAQ'],
  },
  {
    title: 'Webflow',
    links: ['Styleguide', 'Licensing', 'Changelog'],
  },
  {
    title: 'Social',
    links: ['Instagram', 'Facebook', 'Tiktok'],
  },
]

export const aboutParagraphs = [
  'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.',
  'Aenean euismod elementum nisi quis eleifend. Vitae purus faucibus ornare suspendisse sed nisi lacus. Mattis enim ut tellus elementum sagittis. Lectus quam id leo in vitae turpis. Lobortis scelerisque fermentum dui faucibus in ornare quam.',
  'Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies. Quisque egestas diam in arcu cursus. Morbi tincidunt ornare massa eget egestas. Scelerisque eu ultrices vitae auctor eu.',
]

