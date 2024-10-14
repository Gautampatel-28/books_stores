// Nav [a] Links  Data
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/' },
  { name: 'Pages', path: '/' },
  { name: 'Shop', path: '/' },
  { name: 'Articles', path: '/' },
  { name: 'Contact', path: '/' },
];

// React Icons For Nav And React
import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';

// navRight links Data
export const navRight = {
  managements: [
      { id: 1, icon: FiUser, link: '*' },
      { id: 2, icon: BsBag, link: '*' },
      { id: 3, icon: VscSearch, link: '*' },
  ],
};

// Header Books Data
import HBook1 from '../assets/HeaderBooks/headerBook1.png';
import HBook2 from '../assets/HeaderBooks/headerBook2.png';
import HBook3 from '../assets/HeaderBooks/headerBook3.png';

export const headerBooks = [
  {
      id: 1,
      img: HBook1,
      title: 'Life of the Wild',
      info: 'Experience the untamed beauty of nature with insights into wildlife and nature’s wonders.',
      btnLink: '*'
  },
  {
      id: 2,
      img: HBook2,
      title: 'Simple Way of Peaceful Life',
      info: 'Discover the art of leading a peaceful and fulfilling life, focusing on mindfulness and simplicity.',
      btnLink: '*'
  },
  {
      id: 3,
      img: HBook3,
      title: 'Great Travel at Desert',
      info: 'Join the adventure across the vast and mysterious deserts, unraveling the secrets of survival.',
      btnLink: '*'
  },
];

// Brands Data
import Brand1 from '../assets/Brands/brand1.png';
import Brand2 from '../assets/Brands/brand2.png';
import Brand3 from '../assets/Brands/brand3.png';
import Brand4 from '../assets/Brands/brand4.png';
import Brand5 from '../assets/Brands/brand5.png';

export const brandsData = [
  { id: 1, img: Brand1 },
  { id: 2, img: Brand2 },
  { id: 3, img: Brand3 },
  { id: 4, img: Brand4 },
  { id: 5, img: Brand5 },
];

// Featured Books Data
import FeaturedBooks1 from '../assets/FeaturedBooksImages/FeaturedBook1.png';
import FeaturedBooks2 from '../assets/FeaturedBooksImages/FeaturedBook2.png';
import FeaturedBooks3 from '../assets/FeaturedBooksImages/FeaturedBook3.png';
import FeaturedBooks4 from '../assets/FeaturedBooksImages/FeaturedBook4.png';
import FeaturedBooks5 from '../assets/FeaturedBooksImages/FeaturedBook5.png';

export const featuredBooksData = [
  {
      id: 1,
      img: FeaturedBooks1,
      imgLlink: "*",
      nameLink: "*",
      name: 'Great Travel at Desert',
      writer: 'Sanchit Howdy',
      price: '₹ 3,200'
  },
  {
      id: 2,
      img: FeaturedBooks2,
      imgLlink: "*",
      nameLink: "*",
      name: 'Peaceful Life Journey',
      writer: 'Neha Sharma',
      price: '₹ 2,800'
  },
  {
      id: 3,
      img: FeaturedBooks3,
      imgLlink: "*",
      nameLink: "*",
      name: 'Adventures of India',
      writer: 'Ravi Patel',
      price: '₹ 3,500'
  },
  {
      id: 4,
      img: FeaturedBooks4,
      imgLlink: "*",
      nameLink: "*",
      name: 'The Business Mindset',
      writer: 'Kiran Joshi',
      price: '₹ 2,500'
  },
  {
      id: 5,
      img: FeaturedBooks5,
      imgLlink: "*",
      nameLink: "*",
      name: 'Technology & Us',
      writer: 'Sanchit Howdy',
      price: '₹ 2,900'
  },
];

// Selling Data
import sellingBookimage from '../assets/SellingBookImage/sellingBook.png';

export const sellingBooksData = [
  {
      id: 1,
      img: sellingBookimage,
      infoTitleTop: 'By Timbur Hood',
      infoTitle: 'Birds Gonna Be Happy',
      desc: 'A joyful read about the beauty of nature and the simple pleasures that life offers.',
      price: '₹ 3,700',
      shopbtnLink: "*",
  }
];

// Popular Books Data
import popularbook1 from '../assets/PopularBooksImage/book1.png';
import popularbook2 from '../assets/PopularBooksImage/book2.png';
import popularbook3 from '../assets/PopularBooksImage/book3.png';
import popularbook4 from '../assets/PopularBooksImage/book4.png';
import popularbook5 from '../assets/PopularBooksImage/book5.png';
import popularbook6 from '../assets/PopularBooksImage/book6.png';
import popularbook7 from '../assets/PopularBooksImage/book7.png';
import popularbook8 from '../assets/PopularBooksImage/book8.png';

export const galleryData = [
  { id: 1, name: 'Great Travel at Desert', writer: 'Sanchit Howdy', price: '₹ 3,200', category: 'Business', image: popularbook1 },
  { id: 2, name: 'Peaceful Life Journey', writer: 'Neha Sharma', price: '₹ 2,800', category: 'Adventure', image: popularbook2 },
  { id: 3, name: 'Adventures of India', writer: 'Ravi Patel', price: '₹ 3,500', category: 'Travel', image: popularbook3 },
  { id: 4, name: 'The Business Mindset', writer: 'Kiran Joshi', price: '₹ 2,500', category: 'Business', image: popularbook4 },
  { id: 5, name: 'Technology & Us', writer: 'Sanchit Howdy', price: '₹ 2,900', category: 'Technology', image: popularbook5 },
  { id: 6, name: 'Romantic Escapades', writer: 'Riya Kapoor', price: '₹ 3,000', category: 'Romantic', image: popularbook6 },
  { id: 7, name: 'Mystic Tales', writer: 'Ananya Singh', price: '₹ 2,600', category: 'Fictional', image: popularbook7 },
  { id: 8, name: 'Mindful Living', writer: 'Alok Verma', price: '₹ 2,800', category: 'Self-help', image: popularbook8 },
];

// Quote Data
export const quoteData = [
  {
      id: 1,
      quote: '“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”',
      speaker: 'Dr. Seuss'
  }
];

// Latest Article Data
import ArticleImage1 from '../assets/letestArticlesIamge/ArticleImage1.png';
import ArticleImage2 from '../assets/letestArticlesIamge/ArticleImage2.png';
import ArticleImage3 from '../assets/letestArticlesIamge/ArticleImage3.png';

export const lettestArticleData = [
  {
      id: 1,
      title: 'Reading books always makes the moments happy',
      image: ArticleImage1,
      titLink: "#",
      date: '2 Aug, 2023',
      inspiration: 'Inspiration',
      fbLink: "*",
      instLink: "*",
      twitaLink: "*",
  },
  {
      id: 2,
      title: 'Finding Peace in Pages',
      image: ArticleImage2,
      titleLink: "*",
      date: '15 Sep, 2023',
      inspiration: 'Peaceful Living',
      fbLink: "*",
      instLink: "*",
      twitaLink: "*",
  },
  {
      id: 3,
      title: 'Adventures Await in Every Book',
      image: ArticleImage3,
      titleLink: "*",
      date: '28 Sep, 2023',
      inspiration: 'Adventure',
      fbLink: "*",
      instLink: "*",
      twitaLink: "*",
  },
];

// Footer Data
import {  ImFacebook, ImBehance } from 'react-icons/im';
import {  FiInstagram } from 'react-icons/fi';
import {  RiTwitterXLine } from 'react-icons/ri';
import {  GrLinkedinOption } from 'react-icons/gr';

// Footers Data .......................  
export const FootersLinksData = {

  Aboutus: [
    { linkname: 'vision ', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'careers ', link: "*", },    
    { linkname: 'service terms ', link: "*", },    
    { linkname: 'donate ', link: "*", },   
   
  ],    
  Discover: [
    { linkname: 'Home ', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'Books ', link: "*", },    
    { linkname: 'Authors  ', link: "*", },    
    { linkname: 'Subjects ', link: "*", },   
    { linkname: 'Advanced Search ', link: "*", },   
  ],    
  Myaccount: [
    { linkname: 'Sign In', link: "*", },    
    { linkname: 'articles ', link: "*", },    
    { linkname: 'View Cart', link: "*", },    
    { linkname: 'My Wishtlist  ', link: "*", },    
    { linkname: 'Track My Order ', link: "*", },      
  ],  

  Help: [
    { linkname: 'Help center ', link: "*", },    
    { linkname: 'Report a problem  ', link: "*", },    
    { linkname: 'View Cart', link: "*", },    
    { linkname: 'Suggesting edits ', link: '#' },    
    { linkname: 'Contact us', link: "*", },   
  ],  

  socials: [
    { icon: ImFacebook, link: 'https://www.facebook.com' },
    { icon: FiInstagram, link: 'https://www.twitter.com' },
    { icon: GrLinkedinOption, link: 'https://www.instagram.com' },
    { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
    { icon: ImBehance, link: 'https://www.twitter.com' }
  ],    
    
};
