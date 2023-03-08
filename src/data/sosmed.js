import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const sosmed = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/thelazymonday',
    render: <FaFacebook />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/thelazymonday?lang=en',
    render: <FaTwitter />,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/thelazymonday/',
    render: <FaInstagram />,
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCbb5TgzYFaLw0_QYxMvxDdg',
    render: <FaYoutube />,
  },
  {
    name: 'tiktok',
    link: 'https://www.tiktok.com/@thelazyshorts',
    render: <FaTiktok />,
  },
];

export default sosmed;
