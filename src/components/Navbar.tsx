import useApi from "../hooks/useApi";
import { MenuItem } from "../models/MenuItem";
import MenuWithStyle from "./MenuWithStyle";

const Navbar: React.FC = () => {
  const { data: menuItemsData, isLoading, error } = useApi<MenuItem[]>("http://localhost:3000/menu", { method: "GET" });

  return (
    <div>
      {isLoading && <span>Fetching data...</span>}
      {error && <span>{error}</span>}
      {menuItemsData && (
        <>
          Menu
          <MenuWithStyle items={menuItemsData} />
        </>
      )}
      {/* Menu
      <MenuWithStyle items={menuItemsData} /> */}
    </div>
  );
};

export default Navbar;
