import React, { useState } from "react";
import { MenuItem } from "../models/MenuItem";
import { IoMdArrowDropright } from "react-icons/io";

interface MenuProps {
  items: MenuItem[];
  depth?: number;
  show: boolean;
}

const Menu: React.FC<MenuProps> = ({ items, depth = 0, show = true }) => {
  const [isSubMenuItemsShow, setIsSubMenuItemsShow] = useState(true);

  function menuItemClickHandler(event: React.MouseEvent<HTMLElement>, title: string): void {
    event.stopPropagation();
    setIsSubMenuItemsShow((current) => !current);
    console.log("clicked", title);
  }

  return (
    <div
      style={{
        position: depth > 0 ? "absolute" : "initial",
        minWidth: 200,
        maxWidth: 200,
        left: 200,
        top: 0,
      }}
      className={`menu-items ${show ? "show" : ""}`}
    >
      {items.map((item) => {
        return item.subItems ? (
          <div key={item.id} style={{ position: "relative" }} className="menu-item" onClick={(event) => menuItemClickHandler(event, item.title)}>
            {item.title}
            {item.subItems && <IoMdArrowDropright />}
            {item.subItems && <Menu items={item.subItems} depth={depth + 1} show={isSubMenuItemsShow} />}
          </div>
        ) : (
          <div key={item.id} style={{ position: "relative" }} className="menu-item" onClick={(event) => event.stopPropagation()}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
