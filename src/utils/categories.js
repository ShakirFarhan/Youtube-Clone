import { HiOutlineMusicalNote } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { TiCodeOutline } from "react-icons/ti";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoFastFoodSharp } from "react-icons/io5";
import { RiBook3Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { HiMusicalNote } from "react-icons/hi2";
import { TiCode } from "react-icons/ti";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { BsLaptopFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoGameControllerSharp } from "react-icons/io5";
import { RiBook3Line } from "react-icons/ri";
import { IoSkullSharp } from "react-icons/io5";
import { IoSkullOutline } from "react-icons/io5";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const categories = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome style={{ height: "22px", width: "30px" }} />,
    active: <AiFillHome style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 2,
    name: "React JS",
    icon: <TiCodeOutline style={{ height: "22px", width: "30px" }} />,
    active: <TiCode style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 3,
    name: "DuaLipa",
    icon: <HiOutlineMusicalNote style={{ height: "22px", width: "30px" }} />,
    active: <HiMusicalNote style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 4,
    name: "Comedy",
    icon: <BsEmojiLaughing style={{ height: "22px", width: "30px" }} />,
    active: (
      <BsFillEmojiLaughingFill style={{ height: "22px", width: "30px" }} />
    ),
  },
  {
    id: 5,
    name: "Technology",
    icon: <BsLaptop style={{ height: "22px", width: "30px" }} />,
    active: <BsLaptopFill style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 6,
    name: "Gaming",
    icon: <IoGameControllerOutline style={{ height: "22px", width: "30px" }} />,
    active: <IoGameControllerSharp style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 7,
    name: "Food",
    icon: <IoFastFoodOutline style={{ height: "22px", width: "30px" }} />,
    active: <IoFastFoodSharp style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 8,
    name: "Educational",
    icon: <RiBook3Line style={{ height: "22px", width: "30px" }} />,
    active: <RiBook3Fill style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 9,
    name: "Travis Scott",
    icon: <IoSkullOutline style={{ height: "22px", width: "30px" }} />,
    active: <IoSkullSharp style={{ height: "22px", width: "30px" }} />,
  },
  {
    id: 10,
    name: "Olivia Rodrigo",
    icon: <BsStar style={{ height: "22px", width: "30px" }} />,
    active: <BsStarFill style={{ height: "22px", width: "30px" }} />,
  },
];
export default categories;
