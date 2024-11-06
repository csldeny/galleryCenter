import { LuContact2 } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { MdHome, MdStorefront, MdOutlineLocalGroceryStore, MdStarBorder} from "react-icons/md";

export const navData = [
  {
    icon: <MdHome />,
    name: "Home",
    route: "/"
  },
  {
    icon: <MdStorefront />,
    name: "Store",
    route: "/Store"
  },
  {
    icon: <MdOutlineLocalGroceryStore />,
    name: "Cart",
    route: "/Cart"
  },
  {
    icon: <MdStarBorder />,
    name: "Favorites",
    route: "/Favorites"
  },
  {
    icon: <LuContact2 />,
    name: "About Us",
    route: "/AboutUs"
  },
  {
    icon: <FaRegUserCircle />,
    name: "User",
    route: "/User"
  },
];

export default navData;