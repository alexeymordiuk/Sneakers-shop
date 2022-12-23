import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsBell } from "react-icons/bs";

export const links = [
  {
    id: 0,
    link: "/",
    img: <BiHome />,
  },
  {
    id: 1,
    link: "/user",
    img: <FiUser />,
  },
  {
    id: 2,
    link: "/bell",
    img: <BsBell />,
  },
];


export const linksText = [
  {
    id: 0,
    link: "/",
    text: 'Home'
  },
  {
    id: 1,
    link: "/user",
    text: 'User'
  },
  {
    id: 2,
    link: "/liked",
    text: 'Favourite'
  },
  {
    id: 3,
    link: "/bell",
    text: 'Bell'
  },
];