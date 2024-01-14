import Menu from "./Menu";
import { menuItemsData } from "../data/menu-data";

const Navbar: React.FC = () => {
  return (
    <div>
      Menu
      <Menu items={menuItemsData} />
    </div>
  );
};

export default Navbar;
