import { menuItemsData } from "../data/menu-data";
import MenuWithStyle from "./MenuWithStyle";

const Navbar: React.FC = () => {
  return (
    <div>
      Menu
      <MenuWithStyle items={menuItemsData} />
    </div>
  );
};

export default Navbar;
