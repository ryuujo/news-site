import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaTumblr,
} from 'react-icons/fa';

const sosmed = [
  { name: 'facebook', link: 'https://facebook.com', render: <FaFacebook /> },
  {
    name: 'twitter',
    link: 'https://twitter.com/Renjiro_Junichi',
    render: <FaTwitter />,
  },
  { name: 'instagram', link: 'https://instagram.com', render: <FaInstagram /> },
  {
    name: 'twitch',
    link: 'https://twitch.tv/Renjiro_Junichi',
    render: <FaTwitch />,
  },
  { name: 'tumblr', link: '#', render: <FaTumblr /> },
];

export default sosmed;
