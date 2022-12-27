import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

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
  }
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
    link: "list",
    text: 'Orders list'
  },
];